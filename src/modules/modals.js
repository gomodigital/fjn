import $ from 'jquery';

import { offsetMenuButton, resetMenuButton } from './animations';

export function videoModals() {
  // Video modals
  const modalVideo = $('.modal-video');
  const closeButton = modalVideo.find('.button-close');
  modalVideo.detach().appendTo('body');

  $(document).on('click', 'a[href^="#modal-video-"]', function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $(target).addClass('is-open');
    $('body').addClass('no-scroll');
    offsetMenuButton();
    history.replaceState({}, document.title, window.location.href.split('#')[0]);
    const video = $(target).find('.modal-video_player');
    video[0].play();
  });

  closeButton.on('click', function (e) {
    e.preventDefault();
    resetMenuButton();
    const modalVideo = $(this).closest('.modal-video');
    modalVideo.removeClass('is-open');
    $('body').removeClass('no-scroll');
    const video = $(this).closest('.modal-video').find('.modal-video_player');
    // Pause the video
    video[0].pause();
    // Reset the video to the beginning
    video[0].currentTime = 0;
  });
}

// export function modals() {
//   // Normal modals
//   const modal = $('.modal');
//   modal.detach().appendTo('body');

//   $(document).on('click', 'a[href^="#modal-"]', function (e) {
//     e.preventDefault();
//     const target = $(this).attr('href');
//     $(target).addClass('is-open');
//     $('body').addClass('no-scroll');
//     // history.replaceState({}, document.title, window.location.href.split('#')[0]);
//   });

//   $('.modal_close').on('click', function (e) {
//     e.preventDefault();
//     const modal = $(this).closest('.modal');
//     modal.removeClass('is-open');
//     $('body').removeClass('no-scroll');
//   });

//   function showElementByHash(hash) {
//     if (window.location.hash === hash) {
//       const element = $(hash);
//       if (element.length) {
//         element.addClass('is-open');
//         $('body').addClass('no-scroll');
//       }
//     }
//   }

//   $(document).ready(() => {
//     showElementByHash('#download');

//     $(window).on('hashchange', () => {
//       showElementByHash('#download');
//     });
//   });
// }

export function modals() {
  // Normal modals
  const modal = $('.modal');
  modal.detach().appendTo('body');

  // $(document).on('click', 'a[href^="#"]', function (e) {
  //   const target = $(this).attr('href');
  //   const targetModal = $(target);

  //   if (targetModal.hasClass('modal')) {
  //     e.preventDefault();
  //     targetModal.addClass('is-open');
  //     $('body').addClass('no-scroll');
  //   }
  // });
  $(document).on('click', 'a[href^="#"]', function (e) {
    const target = $(this).attr('href');

    if (target !== '#') {
      const targetModal = $(target);

      if (targetModal.hasClass('modal')) {
        e.preventDefault();
        targetModal.addClass('is-open');
        $('body').addClass('no-scroll');
      }
    }
  });

  $('.modal_close').on('click', function (e) {
    e.preventDefault();
    const modal = $(this).closest('.modal');
    modal.removeClass('is-open');
    $('body').removeClass('no-scroll');
  });

  function showElementByHash(hash) {
    const element = $(hash);
    if (element.length && element.hasClass('modal')) {
      element.addClass('is-open');
      $('body').addClass('no-scroll');
    }
  }

  $(document).ready(() => {
    showElementByHash(window.location.hash);

    $(window).on('hashchange', () => {
      showElementByHash(window.location.hash);
    });
  });
}
