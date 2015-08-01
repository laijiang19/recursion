// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var res = [];

	if (typeof obj === "function" || obj === null){
		return 'null';
	}

	else if (obj === undefined ){
		return undefined;
	}

	else if (typeof obj !== "object") {
		if (typeof obj === "string"){
			return '"'+obj+'"';
		}
		return obj.toString();
	}

	else if (Array.isArray(obj)){

		res.push('[');

		for (var i=0; i<obj.length; i++){
			
			if (typeof obj[i]!=="function" && obj[i]!==undefined){
				res.push(stringifyJSON(obj[i]));
				res.push(',');
			}
		}
		if (res[res.length-1]===','){
			res.pop();
		}
		res.push(']');
	}

	else {

		res.push('{');
		var count = 0;
		var length = Object.keys(obj).length;

		for (var prop in obj){
			count++;
			if (typeof obj[prop]!=="function" && obj[prop]!==undefined){
				res.push('"'+prop+'"'+':');
				res.push(stringifyJSON(obj[prop]));
				res.push(',');
			}
		}
		if (res[res.length-1]===','){
			res.pop();
		}
		res.push('}');
	}

	return res.join('');
};
