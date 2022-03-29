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
