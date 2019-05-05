$(document).ready(function(){

	new WOW().init();

	$('.js-wp-2').waypoint(function(direction){
		$('.js-wp-2').addClass('animated slideInUp');
	}, {
		offset: '100%'
	});	

	$('.js-wp-3').waypoint(function(direction){
		$('.js-wp-3').addClass('animated fadeIn');
	}, {
		offset: '100%'
	});

	$('.iphone-btn').delay(1500).animate({top: '+=2.5'}, 300);
	$('.iphone-btn').delay(300).animate({top: '+=-2.5'}, 100);

	// $('.iphone-scn').delay(2800).animate({top: '-=28.1rem'}, 1000);	

});