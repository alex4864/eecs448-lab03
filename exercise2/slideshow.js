'use strict'
let slides = ['slide1.png', 'slide2.png', 'slide3.png', 'slide4.png', 'slide5.png'];
let curSlide = 0

$('document').ready(function(){
	$('#next').click(function(){
		if(curSlide < slides.length - 1){
			curSlide++;
		}
		else{
			curSlide = 0;
		}
		$('#slideshow').attr('src', slides[curSlide]);
	})

	$('#prev').click(function(){
		if(curSlide > 0){
			curSlide--;
		}
		else{
			curSlide = slides.length - 1;
		}
		$('#slideshow').attr('src', slides[curSlide]);
	})
})
