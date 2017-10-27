import axios from 'axios';

const persistent = function(settings){
    const react_api = settings.setting.react_api_folder+"initial_persistent_data.php";
    const promise = axios.get(react_api);

    return promise;
}
export default persistent;
