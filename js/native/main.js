//navbar sticky
stickybits('nav', {useStickyClasses: true});

// general function to select elements
const selectElement = function (element) {
  return document.querySelector(element);
};

// burger menu click to open
selectElement('.menu-icons').addEventListener('click', function (e) {
  console.log('menu icon clicked!');

  selectElement('.nav__right').classList.toggle('current');
  console.log('current class added');

  selectElement('body').classList.toggle('noscroll');
  console.log('no scroll class on body added');

  //if clicked on burger, run function that attached event listeners.
  if (e.target.classList.contains('nav__right__burger-menu')) {
    console.log('clicked on burger menu, calling getTarget() function');

    return getTarget(e);
  }
});

function getTarget(e) {
  console.log('current value of listener Attribute=>', e.target.getAttribute('listener'));

  // run only if EventListener is not already present
  if (!e.target.getAttribute('listener')) {
    console.log('listener attribute not present or false');

    //adding attribute that stores info about whether eventListener is present or not.
    e.target.setAttribute('listener', 'true');
    console.log('added listener with value set to true');

    selectElement('.nav__right.current .nav__right__menu').addEventListener('click', function (el) {
      console.log('added event listener to nav__right__menu');

      if (el.target.parentNode.nodeName == 'LI') {
        el.target.parentElement.classList.toggle('clicked');
        console.log("added 'clicked' class to the clicked item");
      }
    });
  }
}
