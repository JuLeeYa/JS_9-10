$(function() {
	$('.jcarousel').jcarousel({

	});

	$('.jcarousel-prev').jcarouselControl({
		target: '-=1'
	});

	$('.jcarousel-next').jcarouselControl({
		target: '+=1'
	});
	$('.jcarousel-pagination').jcarouselPagination({
		item: function(page) {
			return '<a href="#' + page + '">' + page + '</a>';
		}
	});

	// SELECT
	$('select').selectBox({

	});

	$('input.first').iCheck({

		checkboxClass: 'icheckbox_minimal-blue',
		radioClass: 'iradio_minimal-blue',
    increaseArea: '20%' 
  });

// MENU

	$('.submenu').hover(function(){
		$(this).stop().animate({
			backgroundColor:"#4F4FD9",
		},1000)

	}, function() {
		$(this).stop().animate({ 
			backgroundColor: "#3F92D2"
		}, 400);
	});

	$('.submenu2').hover(function(){
		$(this).stop().animate({
			backgroundColor:"#36D792",
		},1000)

	}, function() {
		$(this).stop().animate({ 
			backgroundColor: "#3F92D2"
		}, 400);
	});

	$('.submenu3').hover(function(){
		$(this).stop().animate({
			backgroundColor:"#FFAD40",
		},1000)

	}, function() {
		$(this).stop().animate({ 
			backgroundColor: "#3F92D2"
		}, 400);
	});



	
});

