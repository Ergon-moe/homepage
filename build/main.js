window.onload = function () {

	$("#download-button").click(function() {
		$('html,body').animate({
			scrollTop: $("#download").offset().top},
			'slow');
	});

	$("#faq-button").click(function() {
		$('html,body').animate({
			scrollTop: $("#faq").offset().top},
			'slow');
	});

	$("#ecosystem-button").click(function() {
		$('html,body').animate({
			scrollTop: $("#ecosystem").offset().top},
			'slow');
	});

	$("#benefits-button").click(function() {
		$('html,body').animate({
			scrollTop: $("#benefits").offset().top},
			'slow');
	});

	$("#download-button2").click(function() {
		$('html,body').animate({
			scrollTop: $("#download").offset().top},
			'slow');
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});

	$("#faq-button2").click(function() {
		$('html,body').animate({
			scrollTop: $("#faq").offset().top},
			'slow');
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});

    $("#ecosystem-button2").click(function() {
		$('html,body').animate({
			scrollTop: $("#ecosystem").offset().top},
			'slow');
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});

	$("#benefits-button2").click(function() {
		$('html,body').animate({
			scrollTop: $("#benefits").offset().top},
			'slow');
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});

	$("#download-button3").click(function() {
		$('html,body').animate({
			scrollTop: $("#download").offset().top},
			'slow');
	});

	$(window).scroll(function(){
	    var scrollTop = $(window).scrollTop();
	    if (scrollTop > 75) {
	        $('.erasable-header').addClass('shrink');
	    } else {
	        $('.erasable-header').removeClass('shrink');
	    }
  	});

  	$('.hamburger-shell').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});
	$('.bg-cover').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	})
}

//export const faErgon = {
//  prefix: 'fac',
//  iconName: 'Ergon',
//  icon: [
//    448, 448,
//    [],
//    null,
//    'm 12.380115,75.702634 c 0.238258,-0.244039 1.712163,-1.675447 3.275344,-3.180901 L 18.49761,69.784537 V 39.985531 10.18653 L 15.242498,7.0486248 c -1.790314,-1.725848 -3.255113,-3.1507429 -3.255113,-3.166435 0,-0.015683 12.61478,-0.028532 28.032841,-0.028532 H 68.053078 V 8.3233694 12.793076 H 47.745055 27.43703 v 27.206923 27.206924 h 20.065103 20.065106 v 4.469707 4.469712 H 39.757075 11.946921 Z M 43.761181,51.592607 v -6.22542 l 2.744985,-2.645537 c 1.509742,-1.455047 2.756993,-2.676832 2.77167,-2.715081 0.01471,-0.03824 -1.220194,-1.268747 -2.744163,-2.734455 l -2.77086,-2.664916 -7.37e-4,-6.202528 c -3.66e-4,-3.432789 0.03658,-6.188071 0.08292,-6.170146 0.154355,0.05969 18.381126,17.707983 18.35515,17.772585 -0.0216,0.05367 -17.221328,16.677947 -18.132193,17.525525 l -0.306701,0.285392 v -6.225419 z'
//  ]
//}
