function StringChallenge(num) { 

  // code goes here
  minutes = num % 60;
  hours = parseInt(num / 60);
  
  return `${hours}:${minutes}`;
}
   
// keep this function call here 
console.log(StringChallenge(63));