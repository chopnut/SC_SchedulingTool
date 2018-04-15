import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getLoader} from "../common/CommonUI"


class UserSettingsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            sched_user_settings: {}
        }
    }
    componentDidMount(){
        this.getUserSettings();
    }
    getUserSettings(){
        // Get the departments from API Call from axios
        // This will build the rows and cells based on the departments and calendar_page.days
        const user_settings_api   = this.props.react_api_folder+"get_user_settings.php";

        const prom        = axios.get(user_settings_api);
        prom.then((res)=>{
            const data          = res.data;
            console.log("User Settings: ", data);
            this.setState((prevState, props) => ({sched_user_settings: data, isLoading: false }));

        });
    }
    renderContent(){
        if(this.props.web.userlog){
        // You are currently log on
            return "You are logged in";
        }else{
        // You are not signed in
            return <div className="not_sign_in"><i className="warning sign icon"></i> Please log in to edit your Scheduling Tool settings</div>;
        }
    }
    render(){

        if(this.state.isLoading){
            return(
                <div className="UserSettingsPage">
                    <header>
                        <i className="linkify icon"></i> User Settings Page
                    </header>
                    <article>
                        {getLoader()}
                    </article>
                </div>);
        }else{
            return(
            <div className="UserSettingsPage">
                <header>
                    <i className="linkify icon"></i> User Settings Page
                </header>
                <article>
                    {this.renderContent()}
                </article>
            </div>);
        }
    }
}

function mapStateToProps(state,ownprops) {
    return ({
        settings: state.settings,
        react_api_folder: state.settings.setting.react_api_folder+"user_settings_actions/"
    })
}
function mapDispatchToProps(dispatch){ return({}) }
export default connect(mapStateToProps,mapDispatchToProps)(UserSettingsPage);
