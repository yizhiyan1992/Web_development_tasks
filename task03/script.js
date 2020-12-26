


function selectPicture(obj) {

	var pic_html=obj.getAttribute("href");
	var loader=document.getElementById("loader");
	var title=obj.getAttribute("title");

	loader.setAttribute("src",pic_html);
	loader.setAttribute("style","height: 300px; width: 400px;");

	var description_obj=document.getElementById("description");
	var description_content=description_obj.childNodes[0];
	description_content.nodeValue=title;


}

function countBodyChildren(){
	var body_obj=document.getElementsByTagName("body")[0];
	alert(body_obj.childNodes.length);
	var children=body_obj.childNodes;
	for (var i=0;i<children.length;i++) {
		console.log(children[i].nodeName);
	}
}
window.onload=countBodyChildren;