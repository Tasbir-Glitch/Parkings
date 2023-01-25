// Jquery Code
(function () {
  "use strict";

  $(".search-input").on("keyup", function () {
    if ($(".search-input").val() == "") {
      $('.smart-search').removeClass("show-results");
      $('.search-dropdown').slideUp(150);
    } else {
      $('.smart-search').addClass("show-results");
      $('.search-dropdown').slideDown(150);
    }
  });

  $(document).ready(function () {
    $(document).on('click', 'html', function (e) {
      if (!$(e.target).is('.show-results'))
        $('.show-results').removeClass('show-results');
      $('.search-dropdown').slideUp(150);
    })
  });

  // Hamburger menu
  $(".hamburger-menu").on("click", function () {
    $(".hamburger-menu").addClass("nav-open");
    $(".sidebar").addClass("sidebar-collapse");
    $(".body-overlay").addClass("overlayed");
  });
  $(".body-overlay").on("click", function () {
    $(".hamburger-menu").removeClass("nav-open");
    $(".sidebar").removeClass("sidebar-collapse");
    $(".body-overlay").removeClass("overlayed");
  });
  $(".sidebar-close-btn").on("click", function () {
    $(".hamburger-menu").removeClass("nav-open");
    $(".sidebar").removeClass("sidebar-collapse");
    $(".body-overlay").removeClass("overlayed");
  });
})();


$(document).ready(function () {
  $(document).on('click', '.parking-lot', function (e) {
    $(this).addClass('focused');
    $(this).siblings().removeClass('focused');
    e.stopPropagation()
  });
  $(document).on('click', 'html', function (e) {
    if (!$(e.target).is('.focussed'))
      $('.focused').removeClass('focused');
  })
});

// Panzoom Plugin
var panzoom = Panzoom(document.querySelector(".zoom-area"), {
  startScale: 0.9,
  minScale: 0.8,
  maxScale: 30,
  contain: 'outside'
})
document.querySelector(".zoom-wrapper").addEventListener("wheel", panzoom.zoomWithWheel);
// document.querySelector(".zoomIn-btn").addEventListener("click", panzoom.zoomIn);
// document.querySelector(".zoomOut-btn").addEventListener("click", panzoom.zoomOut);
// document.querySelector(".reset-btn").addEventListener("click", panzoom.reset);
// document.querySelector(".zoomRange").addEventListener('input', (event) => {
//   panzoom.zoom(event.target.valueAsNumber)
// })