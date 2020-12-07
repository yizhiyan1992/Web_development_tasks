
//collapse the navbar list when it is blur
$(function() {
	console.log("Testhere");
	$("#navbar-toggle").blur(function(event){
		var screenWidth=window.innerWidth;
		if (screenWidth<990) {
			$("#navbarNav").collapse('hide');
		}
	});
});

(function function_name(global) {
	// body...

	document.querySelector("#carouselScroll")
		.innerHTML='<img style="margin-left: 45%; margin-top: 50px;" src="brand/ajax-loader.gif" alt="loader">'


	$ajax.sendGetRequest("snippet/snippet-carousel.html",
		function (xhr) {
			var content=xhr.responseText
			global.document.querySelector("#carouselScroll")
				.innerHTML=content
	})
})(window)