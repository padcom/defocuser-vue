import Defocuser from 'defocuser'

let defocuser = null

const defocus = {
  inserted (el, options) {
    if (!defocuser) defocuser = new Defocuser()
    defocuser.addElement(
      el,
      options.modifiers.capture ? 'capture' : 'bubbling',
      options.value || (() => {}),
      options.modifiers.stop,
      options.modifiers.prevent)
  }
}

const defocusSecondary = {
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
      return defocuser // instance of the actual defocuser
    }
  }
})

module.exports = DefocuserLibrary

if (window && window.Vue) {
  window.Vue.use(DefocuserLibrary)
}
