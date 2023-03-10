import $ from 'jquery';

export default function accordion() {
  // Open accordion
  var $gridLine = $('.grid-line--diagonal-inverted');

  // Function to check the initial state of the accordion items and hide the grid line if necessary
  function checkAccordionState() {
    if ($('.accordion-item.is-open').length > 0) {
      $gridLine.hide();
    } else {
      $gridLine.show();
    }
  }

  $('.accordion-trigger').on('click', function () {
    $(this).parent('.accordion-item').toggleClass('is-open');
    if ($('.accordion-item.is-open').length > 0) {
      $gridLine.hide();
    } else {
      $gridLine.show();
    }
  });

  checkAccordionState();
}
