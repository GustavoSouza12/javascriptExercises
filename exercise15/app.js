function testPositiveOrNegative(x, y){
  if ((x < 0 & y < 0) || (x > 0 || y < 0)){
      return "one number is positive and other negative"
  }
}

console.log(testPositiveOrNegative(1, -2))