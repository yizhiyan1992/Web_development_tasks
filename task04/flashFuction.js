
function positionMessage() {
	if (!document.getElementById) return false;
	if (!document.getElementById("message")) return false;
	var elem=document.getElementById("message");
	elem.style.color="red";
	elem.style.fontSize="50px";
	elem.style.fontFamily="'Bungee Inline', cursive";
	elem.style.postion="absolute";
	elem.style.left="50px";
	elem.style.top="100px";
}

window.onload=positionMessage;