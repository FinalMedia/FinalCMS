/*

Responsive Mobile Menu v1.0
Plugin URI: responsivemobilemenu.com

Author: Sergio Vitov
Author URI: http://xmacros.com

License: CC BY 3.0 http://creativecommons.org/licenses/by/3.0/

*/

function responsiveMobileMenu() {	
		$('.rmm').each(function() {
			
			
			
			$(this).children('ul').addClass('rmm-main-list');	// mark main menu list
			
			
			var $style = $(this).attr('data-menu-style');	// get menu style
				if ( typeof $style == 'undefined' ||  $style == false )
					{
						$(this).addClass('graphite'); // set graphite style if style is not defined
					}
				else {
						$(this).addClass($style);
					}
					
					
			/* 	width of menu list (non-toggled) */
			
			var $width = 0;
				$(this).find('ul li').each(function() {
					$width += $(this).outerWidth();
				});
				
			// if modern browser
			
			if ($.support.leadingWhitespace) {
				$(this).css('max-width' , $width*1.05+'px');
			}
			// 
			else {
				$(this).css('width' , $width*1.05+'px');
			}
		
	 	});
}
function getMobileMenu() {

	/* 	build toggled dropdown menu list */
	
	$('.rmm').each(function() {
				var $menulist = $(this).children('.rmm-main-list').html();
				var $menucontrols ="<div class='rmm-toggled-controls'><div class='rmm-toggled-title'>AWA Menu</div><div class='rmm-button'><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></div></div>";
				$(this).prepend("<div class='rmm-toggled'>"+$menucontrols+"<ul>"+$menulist+"</ul></div>");

		});
}

function adaptMenu() {
	
	/* 	toggle menu on resize */
	
	$('.rmm').each(function() {
			var $width = $(this).css('max-width');
			$width = $width.replace('px', ''); 
			if ( $(this).parent().width() < $width*1.05 ) {
				$(this).children('.rmm-main-list').hide(0);
				$(this).children('.rmm-toggled').show(0);
			}
			else {
				$(this).children('.rmm-main-list').show(0);
				$(this).children('.rmm-toggled').hide(0);
			}
		});
		
	$('.rmm-toggled').each(function(){
		$(this).find('ul').stop().hide(0);
	});
}

$(function() {

	 responsiveMobileMenu();
	 getMobileMenu();
	 adaptMenu();
	 
	 /* slide down mobile menu on click */
	 
	 $('.rmm-toggled, .rmm-toggled .rmm-button').click(function(){
		 $(this).find('ul').stop().slideToggle(300);
	});	

});
	/* 	hide mobile menu on resize */
$(window).resize(function() {
 	adaptMenu();
});

$(document).ready( function() {
window.addEventListener("load",function() {
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});

});