$(function () {
  var $btn = $('.hamburger');
  var $menu = $('#mainMenu');          // UL с id
  var $overlay = $('.menu-overlay');

  function openMenu() {
    $menu.addClass('is-open');
    $overlay.addClass('show');
    $btn.attr('aria-expanded', 'true');
    $('body').addClass('noscroll');
  }
  function closeMenu() {
    $menu.removeClass('is-open');
    $overlay.removeClass('show');
    $btn.attr('aria-expanded', 'false');
    $('body').removeClass('noscroll');
  }

  $btn.on('click', function () {
    ($menu.hasClass('is-open')) ? closeMenu() : openMenu();
  });

  $overlay.on('click', closeMenu);

  $('#mainMenu .menu__link').on('click', function () {
    if (window.matchMedia('(max-width: 800px)').matches) closeMenu();
  });

  $(document).on('keyup', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  $(window).on('resize', function () {
    if (window.matchMedia('(min-width: 801px)').matches) closeMenu();
  });
});
