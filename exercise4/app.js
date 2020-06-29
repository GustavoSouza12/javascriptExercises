function leap(x)
{
   if (x % 4 === 0){
      if (x % 100 === 0){
        if (x % 400){
          return "Leap Year :D"
        } return "Not a Leap Year :c"
      }
      else {return "Leap Year :D"}
   }
   else {return "Not a Leap Year :c"}
     
}