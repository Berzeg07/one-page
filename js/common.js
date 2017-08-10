$(document).ready(function(){

    $('.nav_item__left a').click(function(e){
        e.preventDefault();
        $(this).next().slideToggle(500);
    });

    var owl2 = $("#slider-banner");
    owl2.owlCarousel({
        loop:true,
        nav:true, 
        autoplay:false,
        smartSpeed:1000,
        margin:10,
        center:false,     //если нужны обрезаные края
        navText:['<span class="nav-left"></span>','<span class="nav-right"></span>'],
        responsive:{
            0:{
                items:1
            },    
        }
    });

	// // Мобильное меню 
	// $(".fa-bars").click(function(m){
	// 	m.preventDefault();
	// 	$(".header__menu-box").slideToggle(500);
	// });
	// // Конец Мобильное меню


 //    // Fancybox
 //    $("a[rel=group]").fancybox({
 //        'transitionIn' : 'none',
 //        'transitionOut' : 'none',
 //        'titlePosition' : 'over',
 //        'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
 //            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
 //        }
 //    });

 //    // Modal window
 //    $('a[name=modal]').click(function(e) {
 //    	e.preventDefault();
 //    	var id = $(this).attr('href');
 //    	var maskHeight = $(document).height();
 //    	var maskWidth = $(window).width();
 //    	$('#mask').css({'width':maskWidth,'height':maskHeight});
 //    	$('#mask').fadeTo("slow",0.8); 
 //    	var winH = $(window).height();
 //    	var winW = $(window).width();
 //    	posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement ||document.body.parentNode || document.body).scrollTop;
 //    	$(id).css('top',  posTop+50);
 //    	$(id).css('left', winW/2-$(id).width()/2);
 //    	$(id).fadeIn(500); 
 //    });
 //    $('.window .dd-close').click(function (e) {
 //    	e.preventDefault();
 //    	$('#mask, .window').hide();
 //    	$('.window').hide();
 //    }); 

 //    $('#mask, .an-exit__krest').click(function () {
 //    	$('#mask').hide();
 //    	$('.window').hide();
 //    }); 
 //    $(".phone").mask("+ 7 (999) 999 - 99 - 99?"); 
 //    $(".form-message").submit(function() { 
 //    	var tel = $(this).find('input[name="phone"]');
 //    	var empty = false;
 //    	if (tel.val() == ""){
 //    		empty = true;
 //    	}
 //    	if (empty == true){
 //    		tel.addClass("error-input");
 //    		tel.focus();
 //    	}else{
 //    		var form_data = $(this).serialize(); 
 //    		$.ajax({
 //    			type: "POST", 
 //    			url: "/message.php", 
 //    			data: form_data,
 //    			success: function() {
 //    				cleanTnanks(this);
 //    			}
 //    		});
 //    	}
 //    	return false;
 //    }); 

 //    function cleanTnanks(form){
 //    	$('input[type="text"]').removeClass("error-input");
 //    	$("input[type=text], textarea").val("");
 //    	$('.window').hide();
 //    	$('a[href=#thanks]').trigger('click');

 //    };


});//END READY
