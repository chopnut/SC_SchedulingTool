import {MANAGE_JOB_ADD_NEW_EDIT} from '../common/Constants';

const ManageJobReducer = function (state = [], action) {
    switch (action.type){
        case MANAGE_JOB_ADD_NEW_EDIT:
            const newState = Object.assign({},...state,{ resp: action.resp });
            return newState;
        default:
            return state;
    }
    return state;
}
export default ManageJobReducer;
