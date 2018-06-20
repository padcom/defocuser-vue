import Defocuser from 'defocuser'

let defocuser = null

export const defocus = {
  inserted (el, options) {
    if (!defocuser) defocuser = new Defocuser()
    defocuser.addElement(el, options.modifiers.capture ? 'capture' : 'bubbling', options.value || (() => {}))
  }
}

export const defocusSecondary = {
  inserted (el, options) {
    if (!defocuser) defocuser = new Defocuser()
    defocuser.setSecondaryElement(el, options.value)
  }
}

const DefocuserLibrary = {
  defocus,
  defocusSecondary,

  install(Vue) {
    Vue.directive('defocus', defocus)
    Vue.directive('defocus-secondary', defocusSecondary)
  }
}

Object.defineProperties(DefocuserLibrary, {
  defocuser: {
    get: function() {
      return defocuser
    }
  }
})

export default DefocuserLibrary

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(DefocuserLibrary)
}
