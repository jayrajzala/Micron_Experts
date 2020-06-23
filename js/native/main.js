//navbar sticky
stickybits('nav', {useStickyClasses: true});

// general function to select elements
const selectElement = function (element) {
  return document.querySelector(element);
};

// burger menu click to open
selectElement('.menu-icons').addEventListener('click', function () {
  selectElement('.nav__right').classList.toggle('current');
  selectElement('body').classList.toggle('noscroll');
});

selectElement('a').addEventListener('click', function (e) {
  e.preventDefault();
});
