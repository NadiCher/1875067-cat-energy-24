const menuItem = document.querySelector('.site-list__item--last');
const mediaQuery = window.matchMedia('(max-width: 767px)');

if (mediaQuery.matches) {
  menuItem.style.borderBottom = '1px solid #e6e6e6'
}
