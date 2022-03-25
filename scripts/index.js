const htmlEl = document.documentElement;
const navToggle = document.getElementById('nav__check');
const bsellerList = document.querySelector('.bsellers__list');
const testimonialList = document.querySelector('.testimonials__list');
const dotsContainer = document.querySelector('.testimonials__dots');

navToggle.addEventListener('change', function () {
  htmlEl.classList.toggle('no-scroll');
});

const bestSellers = [
  {
    name: 'Ipsum dolor',
    desc: 'Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat.',
    img: '/imgs/best-seller/bseller1.jpg',
  },
  {
    name: 'Consectetur',
    desc: 'Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat.',
    img: '/imgs/best-seller/bseller2.jpg',
  },
  {
    name: 'Consequat',
    desc: 'Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat.',
    img: '/imgs/best-seller/bseller3.jpg',
  },
  {
    name: 'Commodo',
    desc: 'Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat.',
    img: '/imgs/best-seller/bseller3.jpg',
  },
];

const testimonials = [
  {
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    logo: '/imgs/testimonials/forbes.png',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    logo: '/imgs/testimonials/saveur.png',
  },
  {
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    logo: '/imgs/testimonials/foodnwine.png',
  },
];

bestSellers.forEach(function (item) {
  const bsellerHTML = `
  <li class="bseller">
    <img
      src="${item.img}"
      alt="best sellers"
      class="bseller__img"
    />
    <h3 class="bseller__title titles">${item.name}</h3>
    <p class="bseller__desc">
      ${item.desc}
    </p>
    <a href="/product.html" class="bseller__link link--underlined text--small"
      >Shop now</a
    >
  </li>
  `;
  bsellerList.insertAdjacentHTML('beforeend', bsellerHTML);
});

testimonials.forEach(function (item, i) {
  dotsContainer.insertAdjacentHTML(
    'beforeend',
    `<span class="testimonials__dot" data-index="${i}"></span>`,
  );
});

const duplicatedTestimonials = [...testimonials, ...testimonials];
const dots = document.querySelectorAll('.testimonials__dot');
let testimonialIndex = 0;

dotsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('testimonials__dot')) {
    testimonialIndex = parseInt(e.target.dataset.index);
    renderTestimonial();
  }
});

function renderTestimonial() {
  dots.forEach(function (dot) {
    dot.classList.remove('testimonials__dot--active');
  });

  if (testimonialIndex == bestSellers.length - 1) {
    testimonialIndex = 0;
  }

  const testimonialToRender = duplicatedTestimonials.slice(
    testimonialIndex,
    testimonialIndex + 3,
  );

  testimonialList.innerHTML = '';
  testimonialToRender.forEach((item) => {
    const testimonialHTML = `
    <li class="testimonial">
      <p class="testimonial__text">
        ${item.text}
      </p>
      <img
        class="testimonial__brand"
        src="${item.logo}"
        alt="forbes logo"
        loading="lazy"
      />
    </li>
  `;
    testimonialList.insertAdjacentHTML('beforeend', testimonialHTML);
  });
  dots[testimonialIndex].classList.add('testimonials__dot--active');
  testimonials.push(testimonials.shift());
  testimonialIndex++;
}

renderTestimonial();
setInterval(renderTestimonial, 5000);
