let newDate = new Date();
let d = newDate.getDate();
let m = newDate.getMonth()+1;
let y = newDate.getFullYear();

let todayDate = `today date is: ${d}/${m}/${y}`

document.write(todayDate)