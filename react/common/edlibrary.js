// Get Parameter by name from the GET url
// Lodash/Moment.js/JQuery is needed to use this library
import moment from 'moment';
function MyUtil(){

/*
Check if 2 arrays are the same length and value
return true or false
 */
this.isArrayTheSame = function(arr1,arr2){
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}
/*
Pad any text with value left or right
eg: value: 9 , pad(00000,9,true) returns: 00009
 */
this.pad = function (pad, str, padLeft) {
    if (typeof str === 'undefined')
        return pad;
    if (padLeft) {
        return (pad + str).slice(-pad.length);
    } else {
        return (str + pad).substring(0, pad.length);
    }
}
/*
Returns array of days of momentjs() from 1-7 from moment.js value
param: is newDate is a moment object
 */
this.getWeekFromDate = function(newDate,includeDayAndDate=true){
    const today = newDate.format('dddd').toLowerCase();
    let nextSunday, nextSaturday;

    if(today=='sunday'){
        nextSunday = newDate;
        nextSaturday = moment(nextSunday).add(6,'days');

    }else if(today =='saturday'){
        nextSaturday  = newDate;
        nextSunday= moment(nextSaturday).subtract(6,'days');


    }else{
        _.times(7,function(n){
            let mToday = moment(newDate);
            let theDay = mToday.add(n,'days').format('dddd').toLowerCase();

            if(theDay=='saturday'){
                nextSaturday = mToday;
                nextSunday   = moment(nextSaturday).subtract(6,'days');
            }
        });
    }
    let daysArray = [];
    _.times(7, function (n) {
        const tempDate = moment(nextSunday).clone().add(n,'days');
        if(includeDayAndDate){
            daysArray[n] = {day: tempDate.format('dddd'),date: tempDate.format("DD/MM/YYYY")}
        }else{
            daysArray[n] = tempDate;
        }
    })
    return daysArray;
}
this.getParameterByName = function(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Gets today offset by date object
this.getsTodayByOffsetDateObject = function (offset){
    var dateOffset = ((24*60*60*1000) * 1)*offset; // 1 day
    var now = new Date();
    now.setTime(now.getTime()-dateOffset);

    var day = now.getDate();
    var mon = now.getMonth()+1; // Because this starts at zero
    var yr  = now.getFullYear();

    return now;
}
// Get dates bits and pieces
this.getFullYear = function (){  var now = new Date();  return now.getFullYear();   }
// Get monthe number= true gets number false gets words
this.getMonth    = function (number=true){
    var now = new Date();
    var m   = now.getMonth();

    if(number){
        if(m<10){
            m = "0"+m;
        }
        return m;
    }else{
        switch (m){
            case 0: return "January";
            case 1: return "February";
            case 2: return "March";
            case 3: return "April";
            case 4: return "May";
            case 5: return "June";
            case 6: return "July";
            case 7: return "August";
            case 8: return "September";
            case 9: return "October";
            case 10: return "November";
            case 11: return "December";
            default:

        }
    }
    return m;
}
this.getDate = function (padding=true){
    var now = new Date();
    var d   = now.getDate();
    if(padding){
        if(d<10){
            d = "0"+d;
        }
    }
    return d;
}
this.getWordDate = function (dayNum=-1){
    var now = new Date();
    var d   = dayNum;
    if(dayNum<0){
        d   = now.getDay();
    }
    switch (d){
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default:
    }
    return "undefined";
}
this.ucfirst = function(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

}
const util = new MyUtil();
export default util;
