
let d = new Date();
let christmas = new Date(d.getFullYear(), 11, 25)

if (d.getMonth() == 11 && d.getDate > 25){
   christmas.setFullYear(d.getFullYear()+1)
}else {
    var one_day = 1000*60*60*24;
    var daysToChristmas = Math.floor(Math.round((Math.abs(christmas.getTime() - d.getTime()))/one_day));
    }

document.write("the christmas is in " + daysToChristmas + " days.")   
