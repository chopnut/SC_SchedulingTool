import {MANAGE_JOB_ADD_NEW_EDIT} from '../common/Constants';
import app from '../modules/persistent';
import _ from 'lodash';
import axios from 'axios';

import { ST_SETTINGS_SAVE, IS_WORKING} from '../common/Constants';

export function st_settings_save(settings, data){

    return ((dispatch) =>{
        const prom = app(settings);
        // Get user log first

        prom.then((res)=> {
            const path_api = settings.setting.react_api_folder + 'calendar_actions/save.php';
            // If you have the authority proceed with the adding

            const req = axios.post(path_api,data);
            console.log("CALLING SAVE: ",path_api,data);
            req.then((res)=>{

                let returndata = res.data;
                console.log("RESPONSE SAVE: ",returndata);

                dispatch ({type: ST_SETTINGS_SAVE ,resp: returndata });
            });
        });
    });
}


