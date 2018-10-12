import _ from 'lodash';
import moment from 'moment';

/*
* Returns seven moments from date usually a sunday date
* @sunday is in simple australian date format "DD/MM/YYYY"
* */
export function getSevenMomentsFromDate(sunday) {
    const firstDay      = moment(sunday,'DD/MM/YYYY');
    let moments         = [];
    if(firstDay.isValid()){
        _.times(7,(n)=>{
            const newMoment = moment(firstDay).add(n,'days');
            moments.push(newMoment);
        })
    }
    return moments;
}
/*
* Return the actual data array to be pass to the calendar_page_change_days action function
* @sevenDaysMoments is an array with 7 days of moment() date format mainly from  getSevenMomentsFromDate function
*/
export function getSevenDayAndDatesFormat(sevenDaysMoments){
    let tmp = [];
    sevenDaysMoments.map(e =>{
        tmp.push({day: e.format("dddd"), date: e.format("DD/MM/YYYY") });
    });
    return tmp;
}