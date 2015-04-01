$(function() {
	smoothScrool(1000);
	workbelt();
});

// smoothScroll function is applied from the document ready function
function smoothScrool (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function workbelt(){

	$('.thumb-unit').click(function(){
		$('.work-belt').css('left', '-100%');
	});

	$('.work-return').click(function(){

		$('.work-belt').css('left', '0%');

	});

}