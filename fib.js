console.log(fib(3));

function fib(n){
  if(n==0 || n==1){
  return 1;
  }
  let prevPrev = 1;
  let prev = 1;
  let result = 0;

  for (let i = 2; i <= n; i++)
      {
          result = prev + prevPrev;
          prevPrev = prev;
          prev = result;
      }
      return result;
}

// function fib(n){
//   if(n===0 || n===1){
//     return 1;
//   }
//   else{
//   return fib(n-1) + fib(n-2);
//   }
//   }
