import $ from 'jquery';

// Слайдер цены на странице каталога (jQuery)
$(function () {

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 5000,
        values: [500, 3000],

        slide: function (event, ui) {
            $("#amount").val(ui.values[0]);
        },

        slide: function (event, ui) {
            $("#amount-till").val(ui.values[1]);
        }
    });

    $("#amount").val($("#slider-range").slider("values", 0));
    $("#amount-till").val($("#slider-range").slider("values", 1));
});


// Выпадающее меню в навбаре (мобильная версия)
const nav = document.querySelector('.nav__burger');
nav.onclick = function () {
    document.querySelector('.nav__menu').classList.toggle('open');
}


// Меню для фильтров на странице каталога (мобильная версия)
// const param = document.querySelector('.parameters-menu');
// param.onclick = function () {
//     document.querySelector('.parameters').classList.toggle('open')
// }
//Отключил скрипт и перенёс его на страницу каталога, потому что здесь из-за него ломаются стили главной страницы. Пока не знаю почему


// Применяем к товарам каталога стикеры New и Sale
const s = '.product-list__item:nth-child'
let product = document.querySelector(`${s}(2)`).classList.add('new', 'sale');

product = document.querySelector(`${s}(3)`).classList.add('sale');
product = document.querySelector(`${s}(5)`).classList.add('sale');

product = document.querySelector(`${s}(4)`).classList.add('new');

