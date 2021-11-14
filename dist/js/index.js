$(document).ready(function(){
	console.log(document.getElementById('preloader').style);
	setTimeout(() => {
		document.getElementById('preloader').style.display = 'none';
	}, 2000);

	var isMenuOpen = false;
	$('#nav-icon').click(function(){
		isMenuOpen = !isMenuOpen;

		if (isMenuOpen) {
			$(this).addClass('open');
			$(".custom-menu-area").addClass("menu-open");
		}
		else {
			$(this).removeClass('open');
			$(".custom-menu-area").removeClass("menu-open");
		}
	});

	var backTop = document.getElementById("back-top");
	backTop.style.display = "block";
	window.onscroll = function() {scrollFuntion()};

	function scrollFuntion() {
		var showAfter = 10;
		if ($(this).scrollTop() > showAfter) {
			backTop.style.display = "block";
			$("#back-top").addClass("back-top-animation");
			$("#header").addClass("header-scrolled");
		} else {
			backTop.style.display = "none";
			$("#back-top").removeClass("back-top-animation");
			$("#header").removeClass("header-scrolled");

		}
		};


		backTop.click (function() {
			$('html, body').animate({scrollTop: 0}, 800);
			return false;
		});

		$('#brand_carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			dots:false,
			autoplay: true,
			responsive:{
					0:{
							items:1
					},
					600:{
							items:3
					},
					1000:{
							items:5
					}
			}
	});

	$('#test_slider').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoplay: true,
		items:1,
		navigation:true,
	});

	$( ".owl-prev").html('<i class="lnr lnr-arrow-left"></i>');
	$( ".owl-next").html('<i class="lnr lnr-arrow-right"></i>');

	wow = new WOW(
		{
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true,
			live: true
		}
	)
	wow.init();

	var roundLogEl = document.getElementsByClassName('counter1');

	anime({
		targets: roundLogEl,
		innerHTML: [0, 245],
		easing: 'linear',
		round: 1 // Will round the animated value to 1 decimal
	});

	var roundLogEl1 = document.getElementsByClassName('counter2');

	anime({
		targets: roundLogEl1,
		innerHTML: [0, 535],
		easing: 'linear',
		round: 1 // Will round the animated value to 1 decimal
	});

	var roundLogEl2 = document.getElementsByClassName('counter3');

	anime({
		targets: roundLogEl2,
		innerHTML: [0, 288],
		easing: 'linear',
		round: 1 // Will round the animated value to 1 decimal
	});

	var roundLogEl3 = document.getElementsByClassName('counter4');

	anime({
		targets: roundLogEl3,
		innerHTML: [0, 750],
		easing: 'linear',
		round: 1 // Will round the animated value to 1 decimal
	});



});