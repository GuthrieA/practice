function compare(basis, comparison){
  for(x in basis){
    if (comparison[x] == basis[x]){
    }
    else{
      return basis[x];
    }
  }
};

console.log(compare([1,2,3],[1,3]));
