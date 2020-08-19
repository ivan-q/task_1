import { Bar } from '../js/bar.es6'
const { Foo } = require('../js/foo.cjs')
require('normalize.css/normalize.css')
require('../scss/_var_mix.scss')
require('../css/main.css')
require('./page.css')
require('../scss/main.scss')
require('../partials/nav/nav.scss') //Navigation bar
require('../partials/header/header.scss')
require('../partials/slider_section/slider_section.scss')
require('../partials/bg_section/bg_section.scss')
require('../partials/simple_section/simple_section.scss')
require('../partials/product_list/product_list.scss')
require('../partials/signup/signup.scss')
require('../partials/footer/footer.scss') //Footer
require('../scss/pixel_perfect_1440px.scss')
require('../scss/pixel_perfect_375px.scss')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index')
})

window.Foo = Foo.instance()
window.Bar = Bar()

console.log(window.Foo.getValue())
console.log(window.Bar)


