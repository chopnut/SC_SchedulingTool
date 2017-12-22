import {CALENDAR_PAGE_ADD_SCHEDULE_TO,
        IS_WORKING} from '../common/Constants';

const MyTasksReducer = function (state=[], action) {
    switch (action.type){
        case CALENDAR_PAGE_ADD_SCHEDULE_TO:
            return state;

        case IS_WORKING:
            const  isWorkingState = Object.assign({},state,{ isWorking: action.isWorking });
            return isWorkingState;
            break;
        default:
            return state;
    }
    return state;
}
export default MyTasksReducer ;
