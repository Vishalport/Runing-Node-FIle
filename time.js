const { request } = require("express");

const moment  = require("moment")

// var StartTime = moment(theList[i].start_time, "YYYY-MM-DD HH:mm:ss"); //2020-04-01 08:00:00.0
//     var EndTime = moment(theList[i].end_time, "YYYY-MM-DD HH:mm:ss"); //2020-04-01 18:00:00.0
//     var Lunch = moment(theList[i].lunch_time, "HH:mm:ss"); //00:30:00
//     var lunchTimeMs= moment(Lunch,"HH:mm:ss");

//     var ms = moment(EndTime,"YYYY-MM-DD HH:mm:ss").diff(moment(StartTime,"YYYY-MM-DD HH:mm:ss"));
//     var d = moment.duration(ms);
//     ms = moment().subtract(lunchTimeMs); //This gives wrong result


//     var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

//     console.log("Total time " + i + " row" + s);


// var StartTime = moment(theList[i].start_time, "YYYY-MM-DD HH:mm:ss");
// var EndTime = moment(theList[i].end_time, "YYYY-MM-DD HH:mm:ss");
// var Lunch = moment(theList[i].lunch_time, "HH:mm:ss");
// var ms = moment(EndTime,"YYYY-MM-DD HH:mm:ss").diff(moment(StartTime,"YYYY-MM-DD HH:mm:ss"));
// moment(ms).subtract(Lunch);

const startTime  = moment().format('LTS');
const endTime = moment().add(20, "minute").format('LTS');
console.log(startTime);
console.log(endTime);

// const test = moment().startOf('hour').fromNow();  
// console.log(test);
console.log(moment().set('hour',10));
console.log(moment().set('minute', 20));

// console.log(moment().set('second')); 