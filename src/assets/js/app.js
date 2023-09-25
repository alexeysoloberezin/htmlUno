import burger from "./components/Burger";
import selectInit from "./components/Select";
import phoneMask from "./components/PhoneMask";
import AccordionInit from "./components/Accordion";
import popupInit from "./components/Popup";
import swiperInit from "./components/swiper";

function instBtn() {
  const instLink = $("#inst-link").text()

  $('.btn-inst').click(function () {
    // console.log('instLink', instLink)
    const res = copyToClipboard.bind(this)
    res(instLink)
  })
}

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;

  document.body.appendChild(textarea);

  textarea.select();

  try {
    document.execCommand('copy');
    $(this).addClass('active')
    setTimeout(() => {
      $(this).removeClass('active')
    }, 3400)
  } catch (err) {
    console.error('Не удалось скопировать текст: ', err);
  } finally {
    document.body.removeChild(textarea);
  }
}

function scrollLink() {

  $(".scrollTo").on("click", function (event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки

    var targetId = $(this).attr("href"); // Получаем значение атрибута href
    var $targetSection = $(targetId); // Выбираем целевую секцию по ID

    if ($targetSection.length) {
      // Плавно прокручиваем к целевой секции
      $("html, body").animate(
        {
          scrollTop: $targetSection.offset().top
        },
        1000 // Время анимации в миллисекундах
      );
    }
  });
}

function stickyBtnInit() {
  var btnSticky = $('.btn-sticky');

  applyStickyLogic()
  function applyStickyLogic() {
    $(window).scroll(function () {
      var windowBottom = $(window).scrollTop() + $(window).height();
      console.log(windowBottom, $('.start').height() + 100)
      if (windowBottom >  $('.start').height() + 200 ) {
        btnSticky.addClass('active')
      } else {
        btnSticky.removeClass('active')
      }
    });
  }
}

function init() {
  burger()
  selectInit()
  phoneMask()
  AccordionInit()
  popupInit()
  swiperInit()
  instBtn()
  scrollLink()
  stickyBtnInit()

  $('.btn-main, .btn-light').each(function () {
    const content = $(this).html();
    $(this).html(`<span>${content}</span>`);
  })

  $('.header__burger').click(function (e) {
    $(this).toggleClass('active')
    $('.header__nav').toggleClass('active')
  })

  $('.history-btn').click(function (e) {
    console.log('history-btn', $(this))
    $(this).slideUp()
    $(this).next().slideDown()
  })
}

$(document).ready(function () {
  init()
});
