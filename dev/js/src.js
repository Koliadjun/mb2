$('[data-tabtrigger]').click(function(e){
  e.preventDefault();
  var n = $(this).data('tabtrigger');
  var group = $(this).data('group');
  if($(this).is('[data-toggle]')){
    if($(this).is('.active')){
      $(this).removeClass('active');
      $('[data-tab="'+n+'"][data-group="'+group+'"]').removeClass('active');
    }else{
      $(this).addClass('active');
      $('[data-tab="'+n+'"][data-group="'+group+'"]').addClass('active');
    }
  }else{
    $('[data-group="'+group+'"]').removeClass('active')
  $(this).addClass('active')
  $('[data-tab="'+n+'"][data-group="'+group+'"]').addClass('active');
  }
  if(!$(this).is('[data-noheight]')){
    setParentHeight( $('[data-tab="'+n+'"][data-group="'+group+'"]'))
  }
  })
var paragtaphs = document.getElementsByTagName('p');
console.log(paragtaphs);
for (var i = 0; i < paragtaphs.length; i++) {
  paragtaphs[i].style.color=randomColor();
  paragtaphs[i].style.background =randomColor();
}
function randomColor() {
  var color = '#';
  var colorDigit = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  for (var i = 0; i < 6; i++) {
    var rand = Math.floor(Math.random() * colorDigit.length);
    color +=  colorDigit[rand];
  }
  return color;
}
/*$(paragtaphs).click(function(){
  this.style.color = randomColor();
  this.style.background = randomColor();
})*/
/*$(paragtaphs).click(function(){
  this.style.color = randomColor();
  this.style.background = randomColor();
})*/
/*var iFirst = 0;
console.log(iFirst == 0)
if (iFirst == 0){
  $(paragtaphs).click(function(){
    var colorF = this.style.color 
    var backgroundF = this.style.background 
    iFirst = $(this).index();
    console.log(colorF,backgroundF,iFirst)
  })
console.log(!iFirst == 0)
else {
  $(paragtaphs).click(function(){
    var colorS = this.style.color 
    var backgroundS = this.style.background 
    var iSecond= $(this).index();
    console.log(colorS,backgroundS,iSecond)
    this.style.color = colorF;
    this.style.background = backgroundF;
    paragtaphs[iFirst].style.color = colorS;
    paragtaphs[iFirst].style.background = backgroundS;
    iFirst=0;})
}
      */
/*$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed:3000,
    arrows:false,
    appendDots:$('.slider__dots'),
    dots:true,
    lidesToShow: 1,
    adaptiveHeight: true,
    infinite: true,
  });
});*/
var slider = document.querySelectorAll('.slider')
var interval =3000;
function activeSlide(slider, index){
  var slides = slider.getElementsByClassName('slide');
  for (var i = slides.length - 1; i >= 0; i--) {
    slides[i].classList.remove('active');
  }
  console.log(slides[index],slides.length);
  slides[index].classList.add('active');
}
function nextSlide(slider){
  console.log(slider,'slider')
  var slides = slider.getElementsByClassName('slide');
  console.log(slides);
  var dots = slider.getElementsByClassName('dot');
  console.log(dots);
  for (var i = slides.length - 1; i >= 0; i--) {
    slides[i].classList.remove('active');
    dots[i].classList.remove('active');
  }
  slider.currentSlide++;
  console.log(slider.currentSlide,slides.length);
  if(slider.currentSlide >= slides.length){
   slider.currentSlide=0;
  }
  slides[slider.currentSlide].classList.add('active');
  dots[slider.currentSlide].classList.add('active');
}
function prevSlide(slider){
  var slides = slider.getElementsByClassName('slide');
  for (var i = slides.length - 1; i >= 0; i--) {
    slides[i].classList.remove('active')
  }
  slider.currentSlide--;
  if(slider.currentSlide < 0){
   slider.currentSlide=slides.length-1;
  }
  slides[slider.currentSlide].classList.add('active');
}
slider.forEach( function(currentSlider){
  var slides = currentSlider.getElementsByClassName('slide');
  slides[0].classList.add('active');
  currentSlider.style.height = slides[0].clientHeight+'px';
  currentSlider.currentSlide = 0;
    var dots = document.createElement('div');
  dots.classList.add('dots');
  console.log(slides.length);
  var n = 0;
  for (var j = 0; j < slides.length; j++) {
    var dot = document.createElement('span');
    dot.setAttribute('dot-num', n)
    dot.onclick= function(){
      activeSlide(currentSlider, this.getAttribute('dot-num'));
    }
    dots.appendChild(dot);
    n++;
  }
  currentSlider.appendChild(dots);
  var nextBtn = document.createElement('div');
  nextBtn.innerText = 'next';
  nextBtn.classList.add('slider__btn');
  nextBtn.classList.add('slider__btn_prev');
  nextBtn.onclick= function(){
    nextSlide(currentSlider);
  }
  currentSlider.appendChild(nextBtn);
  var prevBtn = document.createElement('div');
  prevBtn.innerText = 'prev';
  prevBtn.classList.add('slider__btn');
  prevBtn.classList.add('slider__btn_next');
  prevBtn.onclick= function(){;
    prevSlide(currentSlider);
  }
  currentSlider.appendChild(prevBtn);
  var playPauseBtn = document.createElement('div');
  playPauseBtn.innerText = 'prev';
  playPauseBtn.classList.add('slider__btn');
  playPauseBtn.classList.add('slider__btn_play-pause');
  playPauseBtn.onclick= function(){
    if(interval==0){
      interval=0;
    }
    else{
      interval=3000;
    }
  }
  currentSlider.appendChild(playPauseBtn);
  jQuery(document).ready(function ($) {

      setInterval(function () {nextSlide(currentSlider);}, interval);
      })
});