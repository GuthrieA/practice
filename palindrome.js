var original = 'racecars';
let array = original.split('');
console.log(array);
console.log(reverse(array));

function reverse(array){
  let oppositeArray = [];
  for (x=array.length-1; x>=0; x--){
    console.log(x);
    oppositeArray.push(array[x]);
  }
  for(y=0; y<=array.length-1; y++){
    console.log(y);
   if (oppositeArray[y]==array[y]){}
   else{
     return false;
   }
  }
  return true;
}
