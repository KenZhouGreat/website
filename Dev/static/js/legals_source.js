$(document).ready(function () {
	if	( /iPhone|iPad/i.test(navigator.userAgent)){
		if(!/Safari/.test(navigator.userAgent)){
			/*$('#display').text('Loaded inside App');*/
			$("header").css("display", "none");
			$("footer").css("display", "none");
		}
		else{
			/* $('#display').text('Loaded inside iPhone/iPad with Safari');*/
		}
	}
	else{
		/*$('#display').text('Not loaded from iPhone/iPad');*/
	}	
});