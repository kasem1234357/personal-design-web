"use strict";

//---------------start color change code-------------------//
$(function () {
  'use strict';

  $('.logo2 li').on('click', function () {
    $(':root').css('--maincolor', $(this).data('color'));
  });
});
$(function () {
  'use strict';

  $('.logo2 li').on('click', function () {
    $(':root').css('--secondcolor', $(this).data('color2'));
  });
}); //---------------end color change code-------------------//
//---------------start swiper slide code-------------------//

var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: '.swiper-pagination'
  },
  loop: true
}); //---------------start swiper slide code-------------------//
//---------------start menu slide code-------------------//

var header = document.getElementById('x');
var nav = document.getElementById('nav');
var btnx2 = document.getElementById('btnx2');

btnx2.onclick = function () {
  header.classList.toggle('nav-active');
}; //---------------end menu slide code-------------------//
//---------------start skills effect code-------------------//


var sec = document.getElementById('skill');
var x = document.querySelectorAll('.logo2 .color');
x.forEach(function say(x2) {
  x2.onclick = function () {
    col2 = x2.id;
    console.log(col2);

    if (col2 === 'black') {
      sec.classList.remove('active');
    } else {
      sec.classList.add('active');
    }
  };
});

function color() {
  say();
} //---------------start skills effect code-------------------//


var navbarMenu = document.querySelector(".nav-links");
var navbarLinks = document.querySelectorAll(".nav-link");

for (var i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navbarLinkClick);
}

function navbarLinkClick(event) {
  smoothScroll(event);
}

function smoothScroll(event) {
  event.preventDefault();
  var targetId = event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href");
  console.log(event);
  var targetPosition = document.querySelector(targetId).offsetTop;
  console.log(targetPosition);
  var startPosition = window.pageYOffset;
  console.log(startPosition);
  var distance = targetPosition - startPosition;
  console.log(distance);
  var duration = 1000;
  var start = null;
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    console.log(progress); // window.scrollTo(0, distance*(progress/duration) + startPosition);

    window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function linear(t, b, c, d) {
  return c * t / d + b;
}

;

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}

;

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
}

;
var progesspar = document.querySelector(".linear");
var totalheight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  var progess = window.pageYOffset / totalheight * 100;
  progesspar.style.width = progess + "%";
};

window.addEventListener('scroll', function () {
  console.log(header.offsetHeight);

  if (header.offsetHeight <= window.pageYOffset) {
    progesspar.classList.add('fixed');
    header.classList.add('fixed');
    console.log('sss');
  } else {
    header.classList.remove('fixed');
    progesspar.classList.remove('fixed');
  }
});
console.log(progesspar.offsetHeight);

function say() {
  progesspar.style.top = "".concat(header.offsetHeight - progesspar.offsetHeight, "px");
}

setInterval(say, 100);