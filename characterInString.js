let string = 'abcda';
let char = 'a';

console.log(remove(string,char).join(''));

function remove(string,char){
  let splitString = string.split('');
  let cutString = [];
  console.log(splitString);
  for (x=0; x<string.length; x++){
    if (char!=splitString[x]){
      cutString.push(splitString[x]);
    }
  }
  return cutString;
}
