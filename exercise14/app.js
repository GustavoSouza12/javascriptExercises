function testNumber(number){
  if (number >= 20 && number <= 100){
    return `${number} is betweeen 20 and 100`
  }
  else if (number >= 100 && number <= 400){
      return `${number} is betweeen 100 and 400`
  }
  else{
     return `${number} is not betweeen 100 and 400`
  }
}