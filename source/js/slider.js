const imgBefore = document.querySelector('.slider__image-before');
const imgAfter = document.querySelector('.slider__image-after');
const slider = document.getElementById('slider-input');
function moveDivider() {
  imgBefore.style.width = 100-slider.value+'%';
  imgAfter.style.width = slider.value+'%';
};

const buttonBefore = document.getElementById('button-before');
buttonBefore.addEventListener('click', function() {
  imgBefore.style.width = 100+'%';
  imgAfter.style.width = 0;
  slider.value = 0;
});

const buttonAfter = document.getElementById('button-after');
buttonAfter.addEventListener('click', function() {
  imgBefore.style.width = 0;
  imgAfter.style.width = 100+'%';
  slider.value = 100;
});
