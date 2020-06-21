//Image Slider
var element = document.getElementById('mySwipe'),
  prevBtn = document.getElementById('prev'),
  nextBtn = document.getElementById('next');

// window.mySwipe = new Swipe(element, {
//   // options here
// });

window.mySwipe = new Swipe(element, {
  startSlide: 0,
  speed: 400,
  auto: 3000,
  draggable: true,
  continuous: true,
  autoRestart: false,
  disableScroll: false, // prevent touch events from scrolling the page
  stopPropagation: false,
  callback: function (index, elem, dir) {
    var active = document.querySelector('.active');
    var dotList = document.querySelector(`.dot${index}`);
    if (active) {
      active.classList.remove('active');
    }
    dotList.classList.add('active');
  },
  transitionEnd: function (index, elem) {},
});

var slides_n = mySwipe.getNumSlides();
var list = document.getElementById('list');
var li = '<ul class="dots">';

for (i = 0; i < slides_n; i++) {
  li += `<li class='list dot${i}' onclick="list_nav(${i})"></li>`;
}
list.innerHTML = li + '</ul>';

window.onload = function () {
  var list_all = document.querySelectorAll('.list');
  list_all[0].classList.add('active');
};

function list_nav(i) {
  mySwipe.slide(i, 400);
}
