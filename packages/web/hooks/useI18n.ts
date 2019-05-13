import i18next from 'i18next'
import { useState, useEffect } from 'react'
import { isDev } from '@pets-bb/share'

type Messages = {
  [key: string]: string
}

export const useI18n = <M extends Messages>(messages: M, options = {}) => {
  type Trans = <T extends { [key: string]: any }>(
    key: keyof M,
    vars?: T,
  ) => string

  const [{ t, loaded }, setTrans] = useState<{ t: Trans; loaded: boolean }>({
    t: () => '',
    loaded: false,
  })
  // const [n, setN] = useState(1)

  useEffect(() => {
    setTimeout(async () => {
      const i18Instance = i18next.createInstance()

      i18Instance
        .init({
          lng: 'zh',
          load: 'languageOnly',
          debug: isDev,
          interpolation: {
            prefix: '{',
            suffix: '}',
          },
          resources: {
            zh: {
              translation: messages,
            },
          },
          ...options,
        })
        .then(() => {
          const trans: Trans = (key, vars) => {
            console.log(i18Instance)

            return i18Instance.t(key as string, vars)
          }

          setTrans({
            t: trans,
            loaded: true,
          })
        })
    }, 2000)
  }, [])

  return { t, loaded }
}

export default useI18n

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY })
  useEffect(() => {
    window.addEventListener('mousemove', setFromEvent)

    return () => {
      window.removeEventListener('mousemove', setFromEvent)
    }
  }, [])

  return position
}
