
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
		function (text) {
			var content=text
			global.document.querySelector("#carouselScroll")
				.innerHTML=content
	},false)
})(window)

	// for team page
	var insertProperty=function (string,propName,propValue) {
		var propToReplace="{{"+propName+'}}';
		string=string.replace(new RegExp(propToReplace,"g"),propValue);
		return string
	}

	var teamSnippet="snippet/snippet-team.html";
	$ajax.sendGetRequest(teamSnippet,
		function (text) {
			var teamContent=text;
			$ajax.sendGetRequest("snippet/team.json",
				function (text) {
					var	teamInfo=text;
					var final_html=""
					for (var i=0; i<teamInfo.length; i++) {
						var temp_html=teamContent;
						var name=teamInfo[i].name;
						var email=teamInfo[i].Email;
						var intro=teamInfo[i].introduction;
						var photo=teamInfo[i].PhotoUrl;
						temp_html=insertProperty(temp_html,"name",name);
						temp_html=insertProperty(temp_html,"email",email);
						temp_html=insertProperty(temp_html,"intro",intro);
						temp_html=insertProperty(temp_html,"PhotoUrl",photo);
						final_html+=temp_html+"<hr class='featurette-divider team'>"
						}
					window.document.querySelector(".team").innerHTML=final_html
				
				})

		},false)
	// for publication page
	var publications="snippet/snippet-publications.html";
	$ajax.sendGetRequest(publications,
		function(text) {
			var publicationSnippet=text;
			$ajax.sendGetRequest("snippet/publications.json",
				function (text) {
					var pubInfo=text;
					var final_list="";
					for (var i=0;i<pubInfo.length;i++) {
						var tempPub=publicationSnippet;
						var paperName=pubInfo[i].name;
						var link=pubInfo[i].link;
						tempPub=insertProperty(tempPub,"publication",paperName)
						tempPub=insertProperty(tempPub,"link",link)
						final_list+=tempPub}
						
					window.document.querySelector("#publications-list").innerHTML=final_list;
				
				},true)
		},false)
	


