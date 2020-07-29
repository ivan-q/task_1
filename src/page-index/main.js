import { Bar } from '../js/bar.es6'
const { Foo } = require('../js/foo.cjs')
// require('bootstrap/dist/css/bootstrap.css')
require('normalize.css/normalize.css')
require('../scss/_var_mix.scss')
require('../css/main.css')
require('./page.css')
require('../scss/main.scss')
require('../scss/signup.scss')
require('../scss/nav.scss')
require('../scss/color_change.scss')
require('../scss/slider.scss')
require('../scss/endline_signs.scss')
require('../scss/footer.scss')
require('../scss/media.scss')
require('../scss/mobile.scss')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index')
})

window.Foo = Foo.instance()
window.Bar = Bar()

console.log(window.Foo.getValue())
console.log(window.Bar)


