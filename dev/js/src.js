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
$(document).ready(function(){
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
});