export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if(array == null){
    throw ('Creating list from undefined array');
  }
  if(array.length == 0){
    throw('Creating list from empty array');
  }

  const list = {value : array[0], next : null};
  let temp = list;
  for(let i= 1 ; i < array.length ;i++){
    temp.next = {value:array[i],next:null};
    temp = temp.next;
  }

  return list;
}