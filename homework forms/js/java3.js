function berkanalce(age,city,country){
    if(age === city || age === country || city === country){
        return true;
    } else{
        return false;
    }  
}
console.log(berkanalce(1, 1, 3));


function berkanalce(age,city,country){
    if(age == city || age == country || city == country){
        return true;
    } else{
        return false;
    }  
}
console.log(berkanalce(1, "3", 3));

  function monthYear(month,year){
    if(month=== 2){
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return 29;
      } else {
        return 28;
      }
    }else{
      const monthYear =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      return monthYear [month -1];
    }
  }
  console.log(monthYear(2, 2024));

  