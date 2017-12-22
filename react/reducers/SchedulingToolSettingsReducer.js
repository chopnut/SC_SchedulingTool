import {ST_SETTINGS_SAVE, IS_WORKING} from '../common/Constants';

const SchedulingToolSettingsReducer = function (state=[], action) {
    switch (action.type){
        case ST_SETTINGS_SAVE:
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
export default SchedulingToolSettingsReducer ;
