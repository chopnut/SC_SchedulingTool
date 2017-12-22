import React, { Component } from 'react';
import {connect} from 'react-redux';
import  axios from 'axios';
import {Dropdown} from 'semantic-ui-react';

// User defined components
import {getLoader} from "../common/CommonUI"
import Doc from './docs/SchedulingToolSettingsDoc';
import DBRefDoc from './docs/DBReferenceDoc';

// Get constatnt action
import {ST_SETTINGS_SAVE} from "../actions/SchedulingToolSettingsActions";

class SchedulingSettingsPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
            isLoading: true,
            usersOptions: [],
            setting: {}
      }
      this.handleSave       = this.handleSave.bind(this);
      this.handleUserSelect = this.handleUserSelect.bind(this);
    }
    getSettings(){
        const get_setting_api   = this.props.settings.setting.react_api_folder+"/settings_actions/get_settings.php";
        const prom        = axios.get(get_setting_api);

        prom.then((res)=>{
            const setting = res.data.settings;
            const users   = res.data.users;



            const usersOptions = users.map((item, index)=>{
                return {"key":item.id ,"text": item.username, "value": item.id }
            });


            this.setState((prevState, props) => ({setting: setting, isLoading: false, usersOptions: usersOptions }));
        });
    }
    handleUserSelect(e){
        console.log(this.state.userOptions);
    }
    handleOnChangeVal(e,{value}){

    }
    handleSave(e){

    }
    componentDidMount(){    this.getSettings();    }
    renderContent(){
        console.log("Props settings: ",this.state);
        return (
            <div className="ui form">
            <table cellSpacing={10}>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <Doc/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="field">
                                <label>{this.state.setting.tabs.setting_label}</label>
                                <textarea rows="2" value={this.state.setting.tabs.setting_value} name="tabs" onChange={this.handleOnChangeVal}/>
                            </div>
                        </td>
                        <td>
                            <div className="field">
                                <label>{this.state.setting.user_default_settings.setting_label}</label>
                                <textarea rows="2" value={this.state.setting.user_default_settings.setting_value} name="user_default_settings" onChange={this.handleOnChangeVal} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="field">
                                <label>{this.state.setting.job_it_status.setting_label}</label>
                                <input value={this.state.setting.job_it_status.setting_value} name="job_it_status" onChange={this.handleOnChangeVal}/>
                            </div>
                        </td>
                        <td>
                            <div className="field">
                                <label>{this.state.setting.job_prod_status.setting_label}</label>
                                <input value={this.state.setting.job_prod_status.setting_value} name="user_default_settings" onChange={this.handleOnChangeVal} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="field">
                                <label>{this.state.setting.job_status.setting_label}</label>
                                <input value={this.state.setting.job_status.setting_value} name="job_status" onChange={this.handleOnChangeVal}/>
                            </div>
                        </td>
                        <td>
                            <div className="field">
                                <label>{this.state.setting.job_types.setting_label}</label>
                                <input value={this.state.setting.job_types.setting_value} name="job_types" onChange={this.handleOnChangeVal} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="field">
                                <label>{this.state.setting.react_api_folder.setting_label}</label>
                                <input value={this.state.setting.react_api_folder.setting_value} name="react_api_folder" onChange={this.handleOnChangeVal}/>
                            </div>
                        </td>
                        <td>
                            <div className="field">
                                <label>{this.state.setting.react_public_folder.setting_label}</label>
                                <input value={this.state.setting.react_public_folder.setting_value} name="react_public_folder" onChange={this.handleOnChangeVal} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="field">

                                <div className="user_departments">
                                    <strong>User Department Group</strong>
                                    <div className="info">
                                        User department group settings lets you appoint a user to a particular department. <br/>
                                    </div>
                                    <div className="user_selects">
                                        <Dropdown placeholder='Select a user' search selection options={this.state.usersOptions} className="user_select" onChange={this.handleUserSelect} />
                                    </div>
                                </div>

                            </div>
                        </td>
                        <td>
                            Right column
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>
                            <button className="ui button" onClick={this.handleSave}>Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            </div>
        );
    }
	render(){

		return(
			<div className="SchedulingSettingsPage">
                <header>
                    <i className="setting icon"></i> Scheduling Setting Page
                </header>
                <article>
                    <form action="post" onSubmit={(e)=>{e.preventDefault()}}>
                        {
                            (this.state.isLoading)? <div className="still_loading">{getLoader()}</div>:this.renderContent()
                        }
                    </form>
                </article>
                <DBRefDoc/>
            </div>
		);
	}
}

function mapStateToProps(state,props) {
    return{
        settings: state.settings
    }
}
function mapDispatchToProps(dispatch){
    return{
        st_settings_save: (settings, data)=>{
            dispatch(st_settings_save(settings, data));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps,null,{pure: false})(SchedulingSettingsPage);
