//array = [2,7,16,1,3];
array = [5,7,16,1,2]
//array = [3,5,-1,8,12]

function ArrayChallenge(arr) { 

  // const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
  const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
  const sum = arr.reduce((a, b) => a + b)
  

  return sum == max * 2;

}

// keep this function call here 
console.log(ArrayChallenge(array));