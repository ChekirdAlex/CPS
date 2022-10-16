const slider = document.querySelector('.swiper');
let init = false;  /*Slider status with resize. Default: off*/
let sliderBrands;

function createSliderBrands (isActive) {
    if (isActive) {
        sliderBrands = new Swiper(slider, {
            slidesPerView: 'auto',
            spaceBetween: -40,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });
    } else {
        sliderBrands.destroy();
    }
}

// resize
window.addEventListener('resize', function () {
    if (window.innerWidth < 768 && !init) {
        init = true;
        createSliderBrands(init);
    } else if (window.innerWidth >= 768 && init) {
        init = false;
        createSliderBrands(init);
    }
})

createSliderBrands(init);