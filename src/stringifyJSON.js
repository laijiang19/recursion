// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var res = [];

	if input is primitive data type {
		return input;
	}

	if input is function, return null;

	if input is array,

		res.push('[');

		for (var i=0; i<array.length; i++)
			
			res.push(recursive(array[i]));
			if (i<array.length-1){
				res.push(',');
			}

		});

		res.push(']');

	if input is non-array obj,

		res.push('{');
		var count = 0;
		var length = length of obj;

		for (var prop in input){
			count++;
			res.push(prop+';');
			res.push(recursive(input[obj]));
			if (count<length){
				res.push('');
			}
		}

		res.push('}');


	return res.join('');
};
