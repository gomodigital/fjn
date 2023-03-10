import $ from 'jquery';
// import lottie from 'lottie-web';
// import { Player } from 'player.js';

import { accordion } from './modules/accordion';
import * as animation from './modules/animations';
import { faqs } from './modules/faqs';
import { library } from './modules/library';
import { videoModals, modals } from './modules/modals';
import { sliderHomeHero, sliderHomePrograms, sliderHomePartners } from './modules/sliders';

import './styles/style.scss';

const currentYear = new Date().getFullYear();
const accordionElements = $('.accordion-wrapper');
const faqsSection = $('.section_faqs');
const librarySection = $('.section_library-header');
const videoModalsElements = $('.modal-video');
const modalsElements = $('.modal');
const mapPartners = $('.section_home-partners');
const heroSlider = $('.hero-slider');
const programsSlider = $('.programs-slider');
const partnersSlider = $('.partners-slider');
const menuButton = $('#main-menu-button');
const closeMenu = $('#main-menu-close');
const nav = $('.nav_wrapper');
const languageButton = $('.button-language');

// Set the current year in the footer
$('.copyright-year').text(currentYear);

// Open external links in a new tab
$('a[href^="http"]:not([href*="' + window.location.hostname + '"])').attr('target', '_blank');

menuButton.on('click', function (e) {
  e.preventDefault();
  nav.fadeIn(100);
  $('body').addClass('no-scroll');
  animation.animateMenu();
});

closeMenu.on('click', function (e) {
  e.preventDefault();
  nav.fadeOut(100);
  $('body').removeClass('no-scroll');
});

languageButton.on('click', function (e) {
  e.preventDefault();
  let url = $(this).attr('href');
  let innerCircle = $(this).find('.button-language_switch-circle');
  innerCircle.css('transform', 'translateX(100%)');
  setTimeout(function () {
    window.location.href = url;
  }, 500);
});

animation.animateLines();

// const lottieContainer = document.querySelector('.lottie');
// const lottieAnimation = lottie.loadAnimation({
//   container: lottieContainer,
//   renderer: 'svg',
//   loop: false,
//   autoplay: false,
//   path: 'https://uploads-ssl.webflow.com/6384edcb8a540581e11a078d/640b6d66d086fdca1ca42584_menu-button.json',
// });

// lottieContainer.addEventListener('mouseenter', function () {
//   lottieAnimation.setDirection(1);
//   lottieAnimation.setSpeed(2);
//   lottieAnimation.play();
// });

// lottieContainer.addEventListener('mouseleave', function () {
//   lottieAnimation.setDirection(-1);
//   lottieAnimation.setSpeed(2);
//   lottieAnimation.play();
// });

if (accordionElements.length > 0) {
  accordion();
}

if (faqsSection.length > 0) {
  faqs();
}

if (librarySection.length > 0) {
  library();
}

if (videoModalsElements.length > 0) {
  videoModals();
}

if (modalsElements.length > 0) {
  modals();
}

if (mapPartners.length > 0) {
  animation.animateMap();
}

if (heroSlider.length > 0) {
  sliderHomeHero();
}

if (programsSlider.length > 0) {
  sliderHomePrograms();
}

if (partnersSlider.length > 0) {
  sliderHomePartners();
}

if ($('.section_hero').length > 0) {
  animation.animateHeroSection();
}

if ($('.section_intro').length > 0) {
  animation.animateIntroSection();
}

if ($('.section_3-highlights').length > 0) {
  animation.animate3HighlightsSection();
}

if ($('.section_highlight').length > 0) {
  animation.animateHighlightSection();
}

if ($('.section_accordion').length > 0) {
  animation.animateAccordionItems();
}

if ($('.section_product-hero').length > 0) {
  animation.animateProductHero();
}

if ($('.section_product-grid').length > 0) {
  animation.animateProductGrid();
}

if ($('.section_home-featured').length > 0 || $('.section_home-career-tips').length > 0) {
  animation.animateFeaturedArticles();
}

if ($('.section_home-partners').length > 0) {
  animation.animatePartners();
}

if ($('.home-footer').length > 0) {
  animation.animateHomeFooter();
}
