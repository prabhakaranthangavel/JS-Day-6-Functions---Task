//! Examples for funtions and function types:

//! Example 1:

//  function mul(a,b)
//  {
//      console.log(a*b);
//  }
//   mul(1,2);        //output:2

// *************************************************************************************************************************

//! Example 2:

// function multi(a, b, c, d) 
// {
//   return a * b * c * d;
// }
// function add(a, b, c) 
// {
//   return a + b + c;
// }
// function sub(a, b) 
// {
//   return a - b;
// }
// console.log(sub(2, 1)); //output:1
// console.log(add(1, 2, 2)); //output:5
// console.log(multi(1, 2, 3, 4));//output:24

// *************************************************************************************************************************

//! Example : Print the odd numbers in an array

// var arr = [12, 13, 14, 15, 16];
// var result = [];
// function is used to extract the values(odd array)
// function odd(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// odd(arr);
// console.log(result);
// console.log(odd(arr)); //output:[13,15]

// *************************************************************************************************************************

//! function without parameter

// function greet() 
// {
//     return ("WELCOME");
// }
// console.log(greet());      //output:WELCOME

// *************************************************************************************************************************

//! Anonyomus Function

//! Example :-Print the odd numbers in an array

// let arr = [12,13,14,15];
// let result = [];
// let odd = function(arr)
// {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 != 0) {
//           result.push(arr[i]);
//         }
//       }
//       return result;
// } 
// console.log(odd(arr));   //output:[13,15]

// *************************************************************************************************************************

//! IIFE (Immediately Invoked Function Expression)

//! Example : Print the odd numbers in an array

// (function odd(arr) 
// {
//   var result = [];
//  for (var i = 0; i < arr.length; i++) 
//  {
//    if(arr[i]%2!=0)
//    {
//     result.push(arr[i]);
//    }
// }
// console.log(result);
// })([12, 13, 14, 15, 16]); //output:[13,15]

// *************************************************************************************************************************

//! Arrow Function (ES6)
//! Example :-Print the odd numbers in an array

// const od = (arr) => {
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 != 0) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   };
//   console.log(od([1, 2, 3, 4, 5, 6, 7, 8, 9]));    //output:[ 1, 3, 5, 7, 9 ]

// *************************************************************************************************************************