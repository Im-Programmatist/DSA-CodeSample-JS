const permutator = (inputArr) => {
	let result = [];
	const permute = (arr, m = []) => {
		console.log(arr, m);
		if (arr.length === 0) {
			result.push(m);
		} else {
			for (let i = 0; i < arr.length; i++) {
				//if(i==1){
				let curr = arr.slice(); // just to convert incoming argument to an array -> return array as it is 
				let next = curr.splice(i, 1); // remove first element, if arr.splice() then return empty array
				console.log('i', i, next);
				permute(curr.slice(), m.concat(next));
				
				//}
			}
		}
	};
	permute(inputArr);
	return result;
};
console.log(permutator(["c", "a", "t"]),permutator(["c", "a", "t"]).length);