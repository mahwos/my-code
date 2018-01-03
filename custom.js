$(document).ready(function() {  

$("#foo4").carouFredSel({
	circular	: false,
	infinite	: true,
    auto: {pauseDuration: 3000, delay: 750},
    scroll: {fx: "fade"},
	items: { pauseOnHover: true },
	prev : {
		button		: "#foo4_prev",
		key			: "left",
		items		: 4,
		easing		: "easeInOutCubic",
		duration	: 2500,
		pauseOnHover: true
	},
	next : {
		button		: "#foo4_next",
		key			: "right",
		items		: 4,
		easing		: "easeInQuart",
		duration	: 1500,
		pauseOnHover: true
	},
	pagination : {
		container	: "#foo4_pag",
		keys		: true,
		easing		: "easeOutBounce",
		duration	: 3000,
		pauseOnHover: true
	}
});
            $('.preview-fade').each(function() {
                $(this).hover(
                    function() {
                        $(this).stop().animate({ opacity: 0.5 }, 400);
                    },
                   function() {
                       $(this).stop().animate({ opacity: 1.0 }, 400);
                   })
            });



	
});




		

$(document).ready(function() {

//search toggle
		$("#search-toggle").click(function () {
			if ($("#adv-search-wrap").is(":hidden")) {
				$("#adv-search-wrap").fadeIn("normal");
			} else {
				$("#adv-search-wrap").fadeOut("normal");
			}
			return false;
		});
			
		$('#adv-search-wrap').click(function(e) {
            	e.stopPropagation();
		});
        	$(document).click(function() {
            	$('#adv-search-wrap').animate({ opacity: 'hide' }, 400);
        	});
			
			
			//search functions
			$("#adv-search-post").click(function () {
				$("#search-filter").val('post');
				
				if ($("#adv-search-input").val() == 'search galleries...' || $("#adv-search-input").val() == '') {
					$("#adv-search-input").val('search posts...');
				}
				
				$("#adv-search-post").addClass('active');
				$("#adv-search-image").removeClass('active');
				return false;
			});
			
			$("#adv-search-image").click(function () {
				$("#search-filter").val('gallery');
				
				if ($("#adv-search-input").val() == 'search posts...' || $("#adv-search-input").val() == '') {
					$("#adv-search-input").val('search gallery...');
				}
				
				$("#adv-search-image").addClass('active');
				$("#adv-search-post").removeClass('active');
				return false;
			});
			
			$("#adv-search-input").click(function () {
				$("#adv-search-input").val('');
			});
			

});

$(document).ready(function() { 
	$('#social-01').tipsy({gravity: 'n'});
	$('#social-02').tipsy({gravity: 'n'});
	$('#social-03').tipsy({gravity: 'n'});
	$('#social-04').tipsy({gravity: 'n'});
	$('#social-05').tipsy({gravity: 'n'});
	$('#social-06').tipsy({gravity: 'n'});
	$('#logoff').tipsy({gravity: 'n'});
	
	$('#tip-1').tipsy({gravity: 's'});
	$('#tip-2').tipsy({gravity: 's'});
	$('#tip-3').tipsy({gravity: 's'});
	$('#tip-4').tipsy({gravity: 's'});
	$('#tip-5').tipsy({gravity: 's'});


});






