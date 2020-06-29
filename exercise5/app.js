let year = 2014
while (year <= 2050){
    let j1 = new Date(year, 0, 1)
    if (j1.getDay() === 0){
        document.write( `Will be sundat in january 1, ${year} <br> ` )
    } 
    year = year + 1
}
        
