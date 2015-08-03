// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

	var body = document.body;

	var classCheck = function(element){
		var res = [];
		
		if (element.classList != null){
			for (var i=0; i<element.classList.length;i++){
				if(element.classList[i]===className){
					res.push(element);
				}
			}
		}

		if (!element.hasChildNodes()){
			return res;
		}
			
		else {
			var elements = element.childNodes;
			for (var j=0; j<elements.length; j++){
				res = res.concat(classCheck(elements[j]));				
			}
		}
		return res;
	}

	return classCheck(body);
};


