const accourdions = document.querySelectorAll('.accordions');

let lastOpened = null;
accourdions.forEach((item) =>
  item.addEventListener('click', function (e) {
    if (lastOpened && e.target.closest('.accordion') != lastOpened) {
      lastOpened.classList.remove('accordion--open');
      lastOpened = null;
    }
    if (e.target.classList.contains('accordion__icon')) {
      lastOpened = e.target.closest('.accordion');
      lastOpened.classList.toggle('accordion--open');
    }
  }),
);

$(document).ready(function () {
  // product image
  const imglist = $('.product-hero__img-list');
  imglist.owlCarousel({
    // autoplay: true,
    dotsContainer: '.product-hero__dots',
    dotClass: 'product-hero__dot',
    items: 1,
    rewind: true,
  });

  $('.product-hero__img-next').click(function () {
    imglist.trigger('next.owl.carousel');
  });
  $('.product-hero__img-prev').click(function () {
    imglist.trigger('prev.owl.carousel');
  });

  // CAROUSEL INGREDIENTS
  const ingredientList = $('.benefits__ingredients');
  ingredientList.owlCarousel({
    autoplay: true,
    dotsContainer: '.benefits__dots',
    dotClass: 'benefits__dot',
    rewind: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        dots: false,
        items: 3,
      },
    },
  });

  $('.product-hero__img-next').click(function () {
    ingredientList.trigger('next.owl.carousel');
  });
  $('.product-hero__img-prev').click(function () {
    ingredientList.trigger('prev.owl.carousel');
  });

  // Additional products
  const additionalPrs = $('.additional-products__container');
  additionalPrs.owlCarousel({
    dots: false,
    rewind: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
    },
  });

  $('.additional-products__next').click(function () {
    additionalPrs.trigger('next.owl.carousel');
  });
  $('.additional-products__prev').click(function () {
    additionalPrs.trigger('prev.owl.carousel');
  });

  // Recipes
  const recipes = $('.recipes__list');
  recipes.owlCarousel({
    dots: false,
    autoWidth: true,
    rewind: true,
    responsive: {
      0: {
        autoplay: true,
      },
      600: {
        autoplay: false,
      },
    },
  });

  $('.recipe__next-btn').click(function () {
    recipes.trigger('next.owl.carousel');
  });
});
