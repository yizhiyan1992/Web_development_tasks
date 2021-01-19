function changeColor(elementID,colorList,colorIndex,logoList) {
	if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;
	var elem=document.getElementById(elementID);
	var oldColor=elem.style.backgroundColor;
	var intId=parseInt(elementID.substring(4))
	if (logoList.indexOf(elementID)==-1 ) {
		elem.style.backgroundColor=colorList[colorIndex];
	}

	var recursion="changeColor('ball"+(intId+20)%160+"',colorList,"+(colorIndex+1)%colorList.length+",logoList)";
	setTimeout(recursion,50);
	

}

var colorIndex=0;
colorList=["#e0f0e9","#e3f9fd","#d6ecf0","#e9e7ef",'#6b6882',"#f0f0f4"];
logoList=['ball22','ball42','ball62','ball82','ball103','ball104','ball25','ball45','ball65','ball85',
'ball47','ball67','ball87','ball108','ball109','ball28','ball29','ball210','ball50','ball70','ball90',
'ball32','ball52','ball72','ball92','ball113','ball114','ball35','ball55','ball75','ball95'];
window.onload=function (){

	changeColor("ball1",colorList,Math.ceil(Math.random()*10)%logoList.length,logoList);
	changeColor("ball2",colorList,Math.ceil(Math.random()*10)%logoList.length,logoList);
	changeColor("ball3",colorList,Math.ceil(Math.random()*10)%logoList.length,logoList);
	changeColor("ball4",colorList,Math.ceil(Math.random()*10)%logoList.length,logoList);
	changeColor("ball5",colorList,Math.ceil(Math.random()*10)%logoList.length,logoList);
	changeColor("ball6",colorList,Math.ceil(Math.random()*10)%logoList.length,logoList);
	changeColor("ball7",colorList,Math.ceil(Math.random()*10)%logoList.length,logoList);
	changeColor("ball8",colorList,Math.ceil(Math.random()*10)%logoList.length,logoList);
	changeColor("ball9",colorList,Math.ceil(Math.random()*10)%logoList.length,logoList);
	changeColor("ball10",colorList,Math.ceil(Math.random()*10)%logoList.length,logoList);
	changeColor("ball11",colorList,Math.ceil(Math.random()*10)%logoList.length,logoList);
	changeColor("ball12",colorList,Math.ceil(Math.random()*10)%logoList.length,logoList);
	changeColor("ball13",colorList,Math.ceil(Math.random()*10)%logoList.length,logoList);
	changeColor("ball14",colorList,Math.ceil(Math.random()*10)%logoList.length,logoList);
	changeColor("ball15",colorList,Math.ceil(Math.random()*10)%logoList.length,logoList);
	changeColor("ball16",colorList,Math.ceil(Math.random()*10)%logoList.length,logoList);

	}



var elem=document.getElementById("ball1");
var cor = window.getComputedStyle(elem, null)['background-color'];
console.log(cor);
