/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }

import Swiper, { Navigation, Thumbs } from "swiper";

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
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 22,
    observeParents: true,
    speed: 800,
    loop: true,
    lazy: true,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".centers-prev",
      nextEl: ".centers-next",
    },

    // Брейкпоинты

    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 14,
        autoHeight: true,
      },
      575: {
        slidesPerView: "auto",
        centeredSlides: true,
      },
    },
  });
  var reviewSlider = new Swiper(".reviews__slider", {
    // Указываем скласс нужного слайдера
    // Подключаем модули слайдера
    // для конкретного случая
    modules: [Navigation],
    observer: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 22,
    observeParents: true,
    speed: 800,
    loop: true,
    lazy: true,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".reviews-prev",
      nextEl: ".reviews-next",
    },

    // Брейкпоинты

    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 14,
        autoHeight: true,
      },
      575: {
        slidesPerView: "auto",
        centeredSlides: true,
      },
    },
  });
  var benefitsSlider = new Swiper(".benefits__slider", {
    // Указываем скласс нужного слайдера
    // Подключаем модули слайдера
    // для конкретного случая
    modules: [Navigation],
    observer: true,
    spaceBetween: 24,
    observeParents: true,
    speed: 800,
    lazy: true,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".benefits-prev",
      nextEl: ".benefits-next",
    },

    // Брейкпоинты
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
      },
    },
  });
  var accommodationsSlider = new Swiper(".accommodations__slider", {
    // Указываем скласс нужного слайдера
    // Подключаем модули слайдера
    // для конкретного случая
    modules: [Navigation],
    observer: true,
    spaceBetween: 24,
    slidesPerView: "auto",
    slideToClickedSlide: true,
    observeParents: true,
    speed: 800,
    lazy: true,
    autoHeight: true,
    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".accommodations-prev",
      nextEl: ".accommodations-next",
    },

    // Брейкпоинты
    breakpoints: {
      0: {
        slidesPerView: 1,
        slideToClickedSlide: false,
      },
      768: {
        slidesPerView: "auto",
        slideToClickedSlide: true,
      },
    },
  });
  var specialistsSlider = new Swiper(".specialists__slider", {
    // Указываем скласс нужного слайдера
    // Подключаем модули слайдера
    // для конкретного случая
    modules: [Navigation],
    enabled: false,
    observer: true,
    spaceBetween: 24,
    slidesPerView: "auto",
    observeParents: true,
    speed: 800,
    lazy: true,
    autoHeight: true,
    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".specialists-prev",
      nextEl: ".specialists-next",
    },

    // Брейкпоинты
    breakpoints: {
      0: {
        slidesPerView: 1,
        enabled: true,
      },
      992: {
        slidesPerView: 1,
        enabled: false,
      },
    },
  });
  var CenterThumbSlider = new Swiper(".center-thumb__slider", {
    // Указываем скласс нужного слайдера
    // Подключаем модули слайдера
    // для конкретного случая
    modules: [Navigation],
    observer: true,
    slidesPerView: 2,
    spaceBetween: 24,
    observeParents: true,
    speed: 800,
    lazy: true,
    loop: true,
    slideToClickedSlide: true,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".center-prev",
      nextEl: ".center-next",
    },

    // Брейкпоинты
    breakpoints: {
      1300: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
      2000: {
        slidesPerView: 5,
      },

    },
  });
  var CenterSlider = new Swiper(".center-gallery__slider", {
    // Указываем скласс нужного слайдера
    // Подключаем модули слайдера
    // для конкретного случая
    modules: [Navigation, Thumbs],
    observer: true,
    slidesPerView: 1,
    spaceBetween: 24,
    observeParents: true,
    speed: 800,
    lazy: true,
    loop: true,
    navigation: {
      prevEl: ".center-prev",
      nextEl: ".center-next",
    },
    thumbs: {
      swiper: CenterThumbSlider,
    },
    // Кнопки "влево/вправо"
    // navigation: {
    //   prevEl: ".specialists-prev",
    //   nextEl: ".specialists-next",
    // },

    // Брейкпоинты
    // breakpoints: {
    //   0: {
    //     slidesPerView: 1,
    //     enabled: true,
    //   },
    //   992: {
    //     slidesPerView: 1,
    //     enabled: false,
    //   },
    // },
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
