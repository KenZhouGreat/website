//slide show implementation
function next_slide() {
	var active = $('#phone-inner img.active');
	if (active.length == 0) active = $('#phone-inner img:last');
	var next = active.next().length ? active.next() : $('#phone-inner img:first');
	active.addClass('last-active');
	next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 1500, function() {
		active.removeClass('active last-active');
	});
	setTimeout("next_slide()", 5000);
}

function adjustIPhonePosition(){
	if($(window).width() <= 645){
		var iPhone = $("#iphone");
		var splash = $("#splash");
		var perfectMemory = $("#perfectmemory");
		var	margin = 65;
		var properHeight = perfectMemory.height() + 539 + margin;
		$("#splashcenter").css("cssText", "height:" +properHeight +"px !important;");
		var bottom = $('#downloadfromappstore').position().top+$('#downloadfromappstore').outerHeight(true);		
		$("#iphone").css("top", bottom);
		$("#iphone").css("left", ($(window).width() - 281)/2);
		$("#iphone").css("display", "block");
	}
	else{
		$("#splashcenter").removeAttr( 'style' );
		$("#iphone").removeAttr( 'style' );
	}
}


$(document).ready(function () {
	
	$("#splash").height($(window).height());	
	
    $(window).resize(function () {
        $("#splash").height($(window).height())
		adjustIPhonePosition();	
    });
	
	
	
	$("#learnmore").smoothScroll({
        speed: 800
    });
	
	$(function() {
		setTimeout("next_slide()", 5000);
	});
	
	
	
});

$(window).load(function(){
	adjustIPhonePosition();			
});