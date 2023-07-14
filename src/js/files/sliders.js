/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }

import Swiper, { Navigation } from "swiper";

/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import "swiper/css";

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице

  // Указываем скласс нужного слайдера
  // Создаем слайдер
  var centerSlider = new Swiper(".centers__slider", {
    // Указываем скласс нужного слайдера
    // Подключаем модули слайдера
    // для конкретного случая
    modules: [Navigation],
    observer: true,
    observeParents: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 22,
    speed: 800,
    loop: true,
    lazy: true,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".centers-prev",
      nextEl: ".centers-next",
    },

    // Брейкпоинты
    /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
  });
  var reviewSlider = new Swiper(".reviews__slider", {
    // Указываем скласс нужного слайдера
    // Подключаем модули слайдера
    // для конкретного случая
    modules: [Navigation],
    observer: true,
    observeParents: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 24,
    speed: 800,
    loop: true,
    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".reviews-prev",
      nextEl: ".reviews-next",
    },

    // Брейкпоинты
    /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
    // События
    on: {},
  });
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
