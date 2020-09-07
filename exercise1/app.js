
let d = new Date();
let day = d.getDay();
let weekDays= ['Sunday', 'Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];

let today = `Today is : ${weekDays[day]}`

let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let AMorPM = hours <= 12 ? 'AM' : 'PM';

let todayHours = ` Current time is ${hours}${AMorPM}: ${minutes} and ${seconds}`

document.write(today + "<br>" + todayHours)