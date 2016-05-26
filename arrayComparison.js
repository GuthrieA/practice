console.log(separate([1,2,3,4,5], [2,3,1,0,5]));

function separate(array1, array2){
  let array3 = [];
  for (x in array1){
    for (y in array2){
        if (array1[x] == array2[y]){
          array3.push(array2[x]);
        }
    }
  }
  for(z in array3){
    if (array2[z] == array3[z]){
    }
    else{
      return array2[z];
    }
  }
}
