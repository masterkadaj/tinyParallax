$.fn.parallax = function(){
	return $(this).each(function(){
    $(this).css("background-position", 'center '+(($(this).offset().top+($(this).height()/2)-$(window).scrollTop())/$(window).height()*100)+'%');
	});
}
