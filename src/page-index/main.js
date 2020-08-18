import { Bar } from '../js/bar.es6'
const { Foo } = require('../js/foo.cjs')
require('normalize.css/normalize.css')
require('../scss/_var_mix.scss')
require('../css/main.css')
require('./page.css')
require('../scss/main.scss')
require('../scss/nav.scss') //Navigation bar
require('../scss/header.scss')
require('../scss/slider_section.scss')
require('../scss/color_change.scss')
require('../scss/bg_section.scss')
require('../scss/simple_section.scss')
require('../scss/product_list.scss')
require('../scss/signup.scss')
require('../scss/footer.scss') //Footer
require('../scss/pixel_perfect_1440px.scss')
require('../scss/pixel_perfect_375px.scss')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index')
})

window.Foo = Foo.instance()
window.Bar = Bar()

console.log(window.Foo.getValue())
console.log(window.Bar)


