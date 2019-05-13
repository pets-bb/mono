import { setupI18n } from '@lingui/core'

// export { t } from '@lingui/macro'
// messages.js is generated by the cli
const en = require('../locale/en/messages.json')
const zh = require('../locale/zh/messages.json')

console.log({ en, zh })
export const i18n = setupI18n({
  language: 'zh',
  catalogs: {
    zh,
    en,
  },
})

// i18n.load({
//   en: require('../locale/en/messages.json')
// })

// i18n.load({ en: enpo })

export default i18n

// export const trans = (msgsid: TemplateStringsArray, ...values: any[]) =>
//   i18nii._(t(msgsid, values))

// import i18next from 'i18next'

// i18next.init({
//   lng: 'zh',
//   debug: true,
//   resources: {
//     en: {
//       translation: {
//         hello: 'hello world',
//       },
//     },

//     zh: {
//       translation: {
//         hello: '你好世界',
//       },
//     },
//   },
// })

// export const t = (id: string, vars: { [key: string]: string } = {}) => {
//   return i18next.t(id, { interpolation: vars })
// }

// export default i18next
