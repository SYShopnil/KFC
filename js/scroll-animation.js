
$(document).ready(function (){
	
	$(document).css({ background:"red"});
	/*scrolling webpage*/
$("a").on('click',function (){
	$("html, body").animate({
		scrollTop: $($.attr(this,'href')).offset().top
	}, 700);
});

if (windows.location.hash){
	scroll(0, 0);
	setTimeout(function () {
		scroll(0, 0);
	}, 1);
}

if (windows.location.hash){
	$("html, body").animate({
		scrollTop: $($.attr(this, 'href')).offset().top+ 'px'
	}, 700);
}
});
	