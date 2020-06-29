let randomNum = Math.ceil(Math.random() * 10)
let n = prompt("Set a number between 1 and 10")

if (n == randomNum){
    alert(`Good Work :D, the number was ${randomNum}`)
} else {alert( `Not matched :c, the correct answer was ${randomNum}. Press F5 and try again!` ) }

