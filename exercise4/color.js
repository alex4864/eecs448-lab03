'use strict'

$(document).ready(function(){
	$('#submit').click(function(){
		let form = $('#color-form');

		let colorFields = [];
		colorFields.push('border-red');
		colorFields.push('border-green');
		colorFields.push('border-blue');
		colorFields.push('background-red');
		colorFields.push('background-green');
		colorFields.push('background-blue');

		for(let i = 0; i < colorFields.length; i++){
			if($("[name='" + colorFields[i] + "']", form).val() < 0 || $("[name='" + colorFields[i] + "']", form).val() > 255){
				throw new Error('Color value outside acceptable bounds');
			}
		}

		if($("[name='border-width']", form).val() < 0 || $("[name='border-width']", form).val() > 100){
			//throw new Error('Width value outside acceptable bounds');
		}

		let newColor = 'rgb(' + $("[name='border-red']", form).val() + ', ' + $("[name='border-green']", form).val() + ', ' + $("[name='border-blue']", form).val() + ')'
		$('p').css('border-style', 'solid');
		$('p').css('border-color', newColor);
		$('p').css('border-width', $("[name='border-width']", form).val() + "px");

		let newBackgroundColor = 'rgb(' + $("[name='background-red']", form).val() + ', ' + $("[name='background-green']", form).val() + ', ' + $("[name='border-blue']", form).val() + ')'
		$('p').css('background-color', newBackgroundColor);
	})
})
