'use strict'
$(document).ready(function(){
	function validate(){
		let data = $('form').serializeArray();
		if(data[0]['value'] != data[1]['value']){
			alert('Entries do not match');
		}
		else if(data[0]['value'].length < 8){
			alert('Password must be at least 8 characters');
		}
		else{
			alert('Success!')
		}
	}

	$('#submit').click(function() {
		validate();
	});
})
