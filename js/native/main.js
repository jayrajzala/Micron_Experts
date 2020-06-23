//navbar sticky
stickybits('nav', {useStickyClasses: true});

// general function to select elements
const selectElement = function (element) {
  return document.querySelector(element);
};

// burger menu click to open
selectElement('.menu-icons').addEventListener('click', function (e) {
  selectElement('.nav__right').classList.toggle('current');
  selectElement('body').classList.toggle('noscroll');
  //if clicked on burger, run function that attached event listners.
  if (e.target.classList.contains('nav__right__burger-menu')) {
    return getTarget(e);
  }
});

function getTarget(e) {
  // run only if EventListener is not already present
  if (!e.target.getAttribute('listener')) {
    selectElement('.nav__right.current .nav__right__menu').addEventListener('click', function (el) {
      el.target.parentElement.classList.toggle('clicked');
    });
  }
  //adding attribute that stores info about whether eventListener is present or not.
  e.target.setAttribute('listener', 'true');
}
