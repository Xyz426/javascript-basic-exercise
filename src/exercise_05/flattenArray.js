export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if(array == null){
    throw('Flatten undefined or null array');
  }

  const res = [];

  for(let i = 0 ; i < array.length(); i++){
    //说明是一维数组
    if(array[i].length == 0){
      res.push(array[i]);
    }else{
      for(let j = 0 ; j < array[i].length ;j++){
        res.push(array[i][j]);
      }
    }
  }

  return res;
}
