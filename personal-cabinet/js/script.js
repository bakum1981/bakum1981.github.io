$(document).ready(function () {
  $('.sideMenuToggler').on('click', function () {
    $('.wrapper').toggleClass('active');
    $('.sidebar-search').slideToggle();
    $('.page').slideToggle();
    $('.navbar-brand').slideToggle();
  });

  var adjustSidebar = function () {
    $('.sidebar').slimScroll({
      height: document.documentElement.clientHeight - $('.navbar').outerHeight()
    });
  };

  adjustSidebar();
  $(window).resize(function () {
    adjustSidebar();
  });

  const setValue = () => {
    const pages = document.querySelectorAll('[data-page]')
    let value = document.querySelector('.page')
    if (pages) {
      pages.forEach(item => {
        item.onclick = (e) => {
          const current = e.target
          value.innerHTML = current.innerHTML
        }
      })
    }
  }

  const setStatus = () => {
    const pages = document.querySelectorAll('[data-page]')
    let value = document.querySelector('.page')
    if (pages) {
      pages.forEach(item => {
        item.onclick = (e) => {
          const current = e.target
          value.innerHTML = current.innerHTML
        }
      })
    }
  }
  setValue()

  $('.input-daterange').datepicker({
    format: 'dd-mm-yyyy',
    autoclose: true,
    calendarWeeks: true,
    clearBtn: true,
    disableTouchKeyboard: true
  });


});
