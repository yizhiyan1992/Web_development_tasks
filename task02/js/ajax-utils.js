
(function(global) {
var ajax={};

ajax.sendGetRequest=
	function(url,handler) {
		function create_xhr() {
			if (global.XMLHttpRequest) {
				return (new XMLHttpRequest());
			}
			else if (global.ActiveXObject) {
				return (new ActiveXObject("Microsoft.XMLHTTP"));
			}
		}
		
		var xhr=create_xhr()  //create a new XHR object
		xhr.open("GET",url,true) ;//set the open property
		xhr.send(null);//set the send property
		xhr.onreadystatechange=
			function (){
				if (xhr.status==200 && xhr.readyState==4) {
					handler(xhr);
				}
			}
	}

global.$ajax=ajax

})(window);