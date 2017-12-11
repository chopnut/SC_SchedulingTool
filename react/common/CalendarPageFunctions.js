import _ from 'lodash';
import moment from 'moment';

/*
* @usage
* @departmentStructs is the departments from the settings state ['departments'] the ordered one
* @days is the days object from the calendar_page state
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
