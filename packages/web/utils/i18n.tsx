import React from 'react'
import { setupI18n, I18n } from '@lingui/core'
import dynamic from 'next/dynamic'
import { Omit } from 'utility-types'

export type WithI18n = { i18n: I18n }
const lang = 'zh'

export const withI18n = <P extends WithI18n>(
  Component: React.ComponentType<P>,
) =>
  dynamic<Omit<P, keyof WithI18n>>(async () => {
    const { default: catalog } = await import(`../locale/${lang}/messages.json`)

    const i18n = setupI18n({
      language: lang,
      catalogs: {
        [lang]: catalog,
      },
    })

    const I18nComponent = (props: any) => <Component {...props} i18n={i18n} />

    return I18nComponent
  })

export default withI18n
