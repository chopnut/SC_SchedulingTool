import {MANAGE_JOB_ADD_NEW_EDIT, IS_WORKING} from '../common/Constants';

const ManageJobReducer = function (state = [], action) {
    switch (action.type){
        case MANAGE_JOB_ADD_NEW_EDIT:
            const newState = Object.assign({},...state,{ resp: action.resp });
            return newState;

        // MAKE IS WORKING THE LAST STATE CHANGER
        case IS_WORKING:
            const  isWorkingState = Object.assign({},state,{ isWorking: action.isWorking });
            return isWorkingState;
            break;
        default:
            return state;
    }
    return state;
}
export default ManageJobReducer;
