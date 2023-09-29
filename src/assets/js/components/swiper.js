import Swiper from 'swiper';
import createLink from "../helper";
// import Swiper styles
// import 'swiper/css';

export default function swiperInit(){
  console.log('swiper')
  // const css = 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css'
  // createLink(css)

  // new Swiper(".know_swiper", {
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //     clickable: true,
  //   },
  //   slidesPerView: 4, // Показывать 3 слайда
  //   spaceBetween: 20, // Промежуток между слайдами
  //   pagination: {
  //     el: ".know_pag",
  //   },
  // });

  $('.learn_slick').slick({
    slidesToShow: 2,
    infinite: true,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $('.learn_swiper-prev-arrow'), // Use your custom previous arrow element
    nextArrow: $('.learn_swiper-next-arrow'),
    responsive: [
      {
        breakpoint: 800, // Медиа-запрос для ширины экрана от 500px до 800px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $('.know_swiper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $('.know_swiper-prev-arrow'), // Use your custom previous arrow element
    nextArrow: $('.know_swiper-next-arrow'),
    responsive: [
      {
        breakpoint: 1200, // Медиа-запрос для ширины экрана от 800px до 1200px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800, // Медиа-запрос для ширины экрана от 500px до 800px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500, // Медиа-запрос для ширины экрана менее 500px
        settings: {
          slidesToShow: 1, // Используйте 1.3 для отображения части следующего слайда
        },
      },
    ],
  });
}