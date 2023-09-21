import {iosVhFix} from './utils/ios-vh-fix';
import {manageSlider} from './modules/swiper/swiper-initial';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  manageSlider();
  // ---------------------------------
});
