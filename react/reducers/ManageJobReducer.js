import Redux from 'redux';
import * as CONS from '../common/Constants';

const ManageJobReducer = function (state = {}, action) {
    switch (action.type){
        case CONS.ADD_NEW_JOB:
            console.log("Action triggered! State is: ", state);
            return state;
        default:
            return state;
    }
    return state;
}
export default ManageJobReducer;
