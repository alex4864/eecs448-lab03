'use strict'

let slides = ['slide1.png', 'slide2.png', 'slide3.png', 'slide4.png', 'slide5.png']; // sources of slide images
let curSlide = 0 // current slide position

$('document').ready(function(){
	$('#next').click(function(){
		if(curSlide < slides.length - 1){
			curSlide++;
		}
		else{
			curSlide = 0;
		}
		$('#slideshow').attr('src', slides[curSlide]);
		$('#slideshow').width(400);
		$('#slideshow').height(400);
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
