// Solution 1
//function reverseString(str){
//  let strArr = str.split("");
//  let reverseStrArray = strArr.reverse();
//  let reversedString = reverseStrArray.join("");
//  return reversedString;
//}

// document.write(reverseString('gustavo')); //

function reverseString(str){
  let final = ""
  for (let i = str.length -1; i >= 0; i--){
    final += str[i]
  }
  return final
}