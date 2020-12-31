


function showPic(whichpic) {
	if (!document.getElementById("placeholder")) 
		{return false;}
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	placeholder.setAttribute("style","width:300px; height:300px;")
	if (document.getElementById("description")) {
		var text=whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
		var description=document.getElementById("description");
		description.firstChild.nodeValue=text;
	}
	return true;
}

function prepareGallery() {
	
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById("imagegallary")) return false;
	var gallery=document.getElementById("imagegallary");
	var links=gallery.getElementsByTagName("a");
	for (var i=0;i<links.length;i++) {
		links[i].onclick=function() {
			console.log(showPic(this));
			return !showPic(this);
		}
	}

}

window.onload=prepareGallery;