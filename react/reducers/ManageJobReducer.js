import {MANAGE_JOB_ADD_NEW} from '../common/Constants';

const ManageJobReducer = function (state = [], action) {
    switch (action.type){
        case MANAGE_JOB_ADD_NEW:
            return state;
        default:
            return state;
    }
    return state;
}
export default ManageJobReducer;
