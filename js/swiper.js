const slider = document.querySelector('.swiper');
let init = false;
let sliderBrands;

function createSliderBrands () {
    if (window.innerWidth < 768) {
        if (!init) {
            init = true;
            sliderBrands = new Swiper(slider, {
                slidesPerView: 'auto',
                spaceBetween: 16,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            });
        }
    } else if (init) {
        sliderBrands.destroy();
        init = false;
    }
}

createSliderBrands();
window.addEventListener('resize', createSliderBrands);