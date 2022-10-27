/*
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
slideImg = document.querySelector('.slider-img img');

next.onclick = function() {
   let currentSlide = document.querySelector('.slider .slider-small-img li.active');

   console.dir(currentSlide);
   currentSlide.classList.remove('active');
   let nextSlide = currentSlide.nextElementSibling;
      if(nextSlide) {
         nextSlide.classList.add('active')
      } else {
         nextSlide = document.querySelector('.slider .slider-small-img li');
         nextSlide.classList.add('active')
      }

      slideImg.src = nextSlide.querySelector('img').src;
}


prev.onclick = function() {
   let currentSlide = document.querySelector('.slider .slider-small-img li.active');

   console.dir(currentSlide);
   currentSlide.classList.remove('active');
   let prevSlide = currentSlide.previousElementSibling;
      if(prevSlide) {
         prevSlide.classList.add('active')
      } else {
         prevSlide = document.querySelector('.slider .slider-small-img li:last-child');
         prevSlide.classList.add('active')
      }            
      
      slideImg.src = prevSlide.querySelector('img').src;
}*/
/*  
/* jquery 
slider = $('.slider');

$('#prev').on('click', function(){
   let elem = $('.slider .slider-small-img li.active').prev();
   $('.slider .slider-small-img li.active').removeClass('active');

   if(!elem.length) {
      elem = $('.slider .slider-small-img li:last-child');
   }
   elem.addClass('active');
   
   $('.slider-img img').attr( 'src',elem.find( 'img' ).attr( 'src' ) );
})

console.dir(slider) */

$(function(){
   $('.bxslider').bxSlider({
     mode: 'fade',
     captions: true,
     slideWidth: 600
   });
 });



 ! function(i) {
   let o, n;
   i(".title_block").on("click", function() {
     o = i(this).parents(".accordion_item"), n = o.find(".info"),
       o.hasClass("active_block") ? (o.removeClass("active_block"),
         n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
         o.siblings(".active_block").removeClass("active_block").children(
           ".info").stop(!0, !0).slideUp())
   })
 }(jQuery);
