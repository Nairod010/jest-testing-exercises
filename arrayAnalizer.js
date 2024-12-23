function arrayAnalizer(arr) {
  const length = arr.length; 
  
  let total = 0; 
  
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]; 
  }

  const average = total / length; 
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average: average,
    min: min,       
    max: max,      
    length: length
  };
}

module.exports = arrayAnalizer

