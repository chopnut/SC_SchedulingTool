import {USER_SETTINGS_SAVE, IS_WORKING} from '../common/Constants';
import app from '../modules/persistent';
import _ from 'lodash';
import axios from 'axios';

export function user_settings_save(settings, data){

    return ((dispatch) =>{
        const prom = app(settings);
        dispatch({type: IS_WORKING, isWorking: true });

        prom.then((res)=> {
            const path_api = settings.setting.react_api_folder + 'user_setting_actions/manage_jobs_add_schedule_to.php';
            // If you have the authority proceed with the adding

            const req = axios.post(path_api,data);
            console.log("SAVING USER SETTINGS: ",path_api,data);
            req.then((res)=>{
                let returndata = res.data;

                console.log("SAVING USER SETTINGS RESPONSE: ",returndata);
                dispatch ({type: USER_SETTINGS_SAVE ,resp: returndata });
                dispatch({type: IS_WORKING, isWorking: false });

            });
        });
    });
}


