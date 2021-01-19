
function positionMessage(messageId,color,start_x,start_y,end_x,end_y) {
	if (!document.getElementById) return false;
	if (!document.getElementById(messageId)) return false;
	var elem=document.getElementById(messageId);
	elem.style.color=color;
	elem.style.fontSize="50px";
	elem.style.fontFamily="'Bungee Inline', cursive";
	elem.style.position="absolute";
	elem.style.left=start_x+"px";
	elem.style.top=start_y+"px";
	//setTimeout("moveMessage()",10);
	moveElement(messageId,end_x,end_y,5);
}


function moveElement(elementID,final_x,final_y,interval) {
	if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;
	var elem=document.getElementById(elementID);
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	if (xpos==final_x && ypos==final_y) {
		return true;
	}
	if (xpos<final_x) {
		xpos++;
	}
	if (xpos>final_x) {
		xpos--;
	}
	if (ypos<final_y) {
		ypos++;
	}
	if (ypos>final_y) {
		ypos--;
	}
	console.log(xpos+"-"+ypos);
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	console.log(repeat);
	movement=setTimeout(repeat,interval);
}

function addLoadEvent(func) {
	var oldEvent=window.onload;
	if (typeof(window.onload)!='function') {
		window.onload=func;
	}
	else {
		window.ondload=function () {
			oldEvent();
			func();
		}
	}
}

//window.onload=positionMessage;
addLoadEvent(positionMessage("message","purple",0,0,800,700));
addLoadEvent(positionMessage("message2","red",0,50,800,750));
addLoadEvent(positionMessage("message3","pink",0,100,800,800));