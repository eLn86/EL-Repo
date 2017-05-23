//Robin's Solution

function dayAndTime1(min) {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var theDay;
  var theTime;
  if (Math.abs(min) > 10080) {
    min = min % 10080;
  } // wrap around if a week has passed
  if (min < 0) { // for values less than before Sunday midnight, wrap around
    theDay = days[days.length + Math.floor(min/1440)];
    theTime = 1440 + (min % 1440);
  }
  else { // for values after Sunday midnight
    theDay = days[Math.floor(min/1440)];
    theTime = min % 1440;
  }
  var theHour = Math.floor(theTime/60);
  var theMinute = theTime % 60;
  theHour = twoDigit(theHour);
  theMinute = twoDigit(theMinute);

  var ret = theDay + " " + theHour + ":" + theMinute;
  return ret;
}

function twoDigit(number) {
  var twodigit = number >= 10 ? number : "0"+number.toString();
  return twodigit;
}


//Geng Sng's solution
function dayAndTime2(time) {
  // account for negative
  if (time < 0) {
    time = 10080 + (time%10080)
  }

  var hours = Math.floor(time / 60);
  var minutes = time % 60

  //format hh:mm
  var hh = pad(hours % 24, 2)
  var mm = pad(minutes, 2)
  var date = hh + ":" + mm
  var day = 'Sunday'

  // what day is it?
  var ahead = Math.floor(hours / 24) % 7

  switch(ahead) {
    case 1: day = 'Monday'
    break;
    case 2: day = 'Tuesday'
    break;
    case 3: day = 'Wednesday'
    break;
    case 4: day = 'Thursday'
    break;
    case 5: day = 'Friday'
    break;
    case 6: day = 'Saturday'
    break;
    default:
    day = 'Sunday'
  }
  console.log(day + " " + date )
}

// pad zero before numbers size < 2
function pad(num, size) {
    var s = "0" + num;
    return s.substr(s.length-size);
}

//Hans solution
function calendar(a){
  var day = 'Sunday';
  var hour = ((a - (a % 60))/60);
  var minute = a % 60;
  var weekDay = (a / 1440);

 if(a > 0){

   if(weekDay > 7){
      weekDay = weekDay % 7;
    }

   if(weekDay <= 1 && weekDay >= 0){
      day = 'Sunday';
    }else if(weekDay <= 2 && weekDay >= 1){
      day = 'Monday';
    }
    else if(weekDay <= 3 && weekDay >= 2){
      day = 'Tuesday';
    }
    else if(weekDay <= 4 && weekDay >= 3){
      day = 'Wednesday';
    }
    else if(weekDay <= 5 && weekDay >= 4){
      day = 'Thursday';
    }
    else if(weekDay <= 6 && weekDay >= 5){
      day = 'Friday';
    }
    else if(weekDay <= 7 && weekDay >= 6){
      day = 'Saturday';
    }

   if(hour % 24 == 0){
      hour = "00";
    }
    if(hour > 24){
      hour = hour % 24;
    }

   console.log("" + day + " " + hour + ":" + minute);

 }

 else if(a < 0){
    day = 'Sunday';
    hour = ((a - (a % 60))/60);
    minute = 60 + (a % 60);
    weekDay = (a / 1440);

   if(weekDay < -7){
      weekDay = weekDay % 7;
    }

   if(weekDay >= -1 && weekDay <= 0){
      day = 'Saturday';
    }else if(weekDay >= -2 && weekDay <= -1){
      day = 'Friday';
    }
    else if(weekDay >= -3 && weekDay <= -2){
      day = 'Thursday';
    }
    else if(weekDay >= -4 && weekDay <= -3){
      day = 'Wednesday';
    }
    else if(weekDay >= -5 && weekDay <= -4){
      day = 'Tuesday';
    }
    else if(weekDay >= -6 && weekDay <= -5){
      day = 'Monday';
    }
    else if(weekDay >= -7 && weekDay <= -6){
      day = 'Sunday';
    }


   if(hour < -24){
      hour = hour % 24;

   }

   hour = 24 + hour - 1;


   console.log("" + day + " " + hour + ":" + minute);

 }
}


//Marie's solution
var dayAndTime3 = function(minutes){
  var date = new Date("2017-05-21T00:00:00");
  var minute = date.getMinutes();
  var hours = date.getHours();
  var day = date.getDay();
  if (minutes < 0) {
    minutes = 10080 + (minutes%10080)
  }
  var min = minutes % 60;
  var hour = parseInt(minutes/60);
  if (hour > 23){
    var dayPassed = parseInt(hour / 24);
    date.setDate(date.getDate() + dayPassed);
    hour = hour % 24;
  }
  date.setHours(hours + hour);
  hours = date.getHours();
  hours = ("0" + hours).slice(-2);
  date.setMinutes(minute + min);
  minute = date.getMinutes();
  minute = ("0" + minute).slice(-2);
  var dayInString;
  switch(date.getDay()){
    case 0:
      dayInString = "Sunday";
      break;
    case 1:
      dayInString = "Monday";
      break;
    case 2:
      dayInString = "Tuesday";
      break;
    case 3:
      dayInString = "Wednesday";
      break;
    case 4:
      dayInString = "Thursday";
      break;
    case 5:
      dayInString = "Friday";
      break;
    case 6:
      dayInString = "Saturday";
      break;
  }
  console.log(dayInString + " " + hours + ":" + minute);
}

//Sam's solution
function dayAndTime4(minutes) {
    var defaultDate = new Date(2017, 4, 21);
    defaultDate.setMinutes(minutes);

    var strResult = dayToName(defaultDate.getDay());
    strResult += ' ';
    strResult += pumpTo2Digits(defaultDate.getHours());
    strResult += ':';
    strResult += pumpTo2Digits(defaultDate.getMinutes());
    return strResult;
}

function pumpTo2Digits(someStr) {
    return ("0" + someStr).slice(-2);
}

function dayToName(day) {
  switch (day) {
    case 0: return 'Sunday'; break;
    case 1: return 'Monday'; break;
    case 2: return 'Tuesday'; break;
    case 3: return 'Wednesday'; break;
    case 4: return 'Thursday'; break;
    case 5: return 'Friday'; break;
    case 6: return 'Saturday'; break;
  }
}


//Jens's solution
function dayAndTime5(num) {
  var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  while(num<0) {num += 10080;}
  while(num>0 && num<10080) {num %= 10080;}

  var day=0;
  while(num>1440) {
    num -= 1440;
    day++;
  }

  var hour=0;
  while(num>60) {
    n -= 60;
    hour++;
  }

  return dayArray[day] + " " + hour + ":" + num;

}
