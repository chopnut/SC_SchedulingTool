import {ST_SETTINGS_SAVE} from '../common/Constants';

const SchedulingToolSettingsReducer = function (state=[], action) {
    switch (action.type){
        case ST_SETTINGS_SAVE:
            return state;
        default:
            return state;
    }
    return state;
}
export default SchedulingToolSettingsReducer ;
