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
    }, 2000)
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
  // Флаг для отслеживания текущего состояния разрешения экрана
  var isSmallScreen = false;

  // Функция для обработки изменений разрешения экрана
  function handleResize() {
    // Проверяем текущую ширину экрана
    var screenWidth = $(window).width();

    // Проверяем, нужно ли применять логику только для маленьких экранов (< 1200px)
    if (screenWidth < 1200 && !isSmallScreen) {
      isSmallScreen = true;
      applyStickyLogic();
    } else if (screenWidth >= 1200 && isSmallScreen) {
      isSmallScreen = false;
      removeStickyLogic();
    }
  }

  // Функция для применения логики фиксации кнопки
  function applyStickyLogic() {
    var btnSticky = $('.btn-sticky');
    var content = $('.btn-sticky-box');

    $(window).scroll(function () {
      var windowBottom = $(window).scrollTop() + $(window).height();
      var contentBottom = content.offset().top + content.height();
      var btnPosition = contentBottom - btnSticky.height() + 30; // 20px from the bottom

      if (windowBottom > btnPosition) {
        btnSticky.css({
          'position': 'fixed',
          'bottom': '20px',
          'height': '39px',
          'width': 'calc(100vw - 30px)',
          'max-width': content.width() + 'px',
          'left': '15px'
        });
      } else {
        btnSticky.css({
          'position': 'absolute',
          'bottom': '',
          'height': '',
          'width': '',
          'left': '',
        });
      }
    });
  }

  // Функция для удаления логики фиксации кнопки
  function removeStickyLogic() {
    $('.btn-sticky').css({
      'position': '',
      'bottom': '',
      'height': '',
      'width': '',
      'left': '',
    });
    $(window).off('scroll');
  }

  // Вызываем обработку изменений разрешения экрана при загрузке и изменении размера окна
  handleResize();
  $(window).resize(handleResize);
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
