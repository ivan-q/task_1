import $ from 'jquery';
// @ts-check

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



// Добавляем классы кружкам с выбором цвета товара
let circleColor = [
    'circle_white',
    'circle_red',
    'circle_black',
]
let circles = document.querySelectorAll('.circle');

for (let i = 0; i < 3; i++) {
    circles[i].classList.add(circleColor[i]);
}




/* При нажатии на кнопку воспроизведения видео, видео запускается, 
появляются элементы управления (controls) и кнопка исчезает */
let videoPlay = document.querySelector('.play-button-wrap');

function playClip(media) {
    media.play();
}

videoPlay.onclick = function() {
    let video = document.querySelector('video');
    video.classList.add('something');
    video.setAttribute('controls', '');

    playClip(video);
    videoPlay.classList.add('hidden');
}





