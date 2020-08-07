function convertF(celsius){

  let tempInCelsius = celsius
  let convertFahrenheit = (celsius * 9 / 5 +32);
  let result = `${tempInCelsius}C converted in fahrenheit is ${convertFahrenheit}F`
  console.log(result)

}
convertF(60)

function convertC(fahrenheit)
{
     let tempF = fahrenheit
     let convertCelsius = (tempF -32) * 5 / 9
     let result = `${tempF}F converted in celsius is ${convertCelsius}C`
     
     console.log(result);
}

convertC(140)