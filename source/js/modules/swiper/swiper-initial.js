import Swiper from '../../vendor/swiper';

const slider = document.querySelector('.events__slider');

function manageSlider() {
  let mySwiper = null;
  function initSwiper() {
    // eslint-disable-next-line no-undef
    mySwiper = new Swiper(slider, {
      initialSlide: 0,
      cssMode: true,
      direction: 'horizontal',
      loop: false,

      navigation: {
        nextEl: '.swiper__button--next',
        prevEl: '.swiper__button--prev',
      },
    });
  }

  function destroySwiper() {
    if (mySwiper) {
      mySwiper.destroy();
      mySwiper = null;
    }
  }

  function handleWindowSizeChange() {
    if (window.innerWidth <= 767) {
      if (!mySwiper) {
        initSwiper();
      }
    } else {
      destroySwiper();
    }
  }

  handleWindowSizeChange();

  window.addEventListener('resize', handleWindowSizeChange);
}

export {manageSlider};
