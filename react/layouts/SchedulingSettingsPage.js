import React, { Component } from 'react';
import {connect} from 'react-redux';
import  axios from 'axios';
import {Dropdown} from 'semantic-ui-react';
import _ from 'lodash';

// User defined components
import {getLoader} from "../common/CommonUI"
import Doc from './docs/SchedulingToolSettingsDoc';
import DBRefDoc from './docs/DBReferenceDoc';


// Get constatnt action
import {st_settings_save} from "../actions/SchedulingToolSettingsActions";

class SchedulingSettingsPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
            isLoading: true,
            userSettings: false,
            setting: {},

            // state for getting user settings from dropdown
            isLoadingUserSettings: false,
            usersOptions: [],
            userDepartmentSelections: []
      }
      this.handleSave       = this.handleSave.bind(this);
      this.handleUserSelect = this.handleUserSelect.bind(this);
      this.handleDeptSelect = this.handleDeptSelect.bind(this);
    }
    getSettings(){
        const apiUrl   = this.props.react_api_folder+"/settings_actions/get_settings.php";
        const prom              = axios.get(apiUrl);

        prom.then((res)=>{
            const setting = res.data.settings;
            const users   = res.data.users;
            const usersOptions = users.map((item, index)=>{
                return {"key":item.id ,"text": item.username, "value": item.id }
            });
            this.setState((prevState, props) => ({setting: setting, isLoading: false, usersOptions: usersOptions }));
        });
    }
    getUserSettings(id){
        const apiUrl   = this.props.react_api_folder+"/settings_actions/get_user_settings.php?login_id="+id;
        const prom              = axios.get(apiUrl);
        prom.then((res)=>{
            const userSetting   = res.data.payload;
            const depSelection  = _.cloneDeep(userSetting.sched_us_department_group);

            console.log("SELECTED:" ,depSelection);

            this.setState((prevState,props)=>{
                return({userSettings: userSetting, userDepartmentSelections: depSelection, isLoadingUserSettings: false});
            });

        });
    }

    handleUserSelect(e,{value}){
        this.setState((prevState,props)=>{
            return({isLoadingUserSettings:true});
        });
        this.getUserSettings(value);
    }
    handleDeptSelect(e,{value}){
        console.log("selected dep", value);
        this.setState((prevState,props)=>{
            return({userDepartmentSelections: value });
        });
    }
    handleOnChangeVal(e,{value}){

    }
    handleSave(e){
        const data = Object.assign({},this.state.setting,
            {
                user_selected: this.state.userSettings,
                user_change_departments: this.state.userDepartmentSelections
            });
        console.log("Data to save: ", data);
        this.props.st_settings_save(this.props.settings,data);
    }
    handleLabelChange(e){
        const labelValue = $(e.target).text();
    }
    renderDepartmentsDropdown(){
        if(this.state.userSettings){
            return <div className="dept_selects">
                <Dropdown placeholder='Select department for the user' selection multiple value={this.state.userDepartmentSelections} options={this.props.settings.departmentOptions} className="dept_select" onChange={this.handleDeptSelect} />
            </div>
        }else if(this.state.isLoadingUserSettings){
            return getLoader("small");
        }
    }
    renderSavingButton(){
        if(this.props.settings.isWorking){
            return <button className="ui loading button">Is working...</button>
        }else{
            return <button className="ui primary button" onClick={this.handleSave}>Save</button>
        }
    }
    componentDidMount(){
        this.getSettings();
    }
    renderContent(){
        console.log("Props settings: ",this.props);
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
                                <label contentEditable={true} onInput={this.handleLabelChange} id={"tabs"} className="editable_label">{this.state.setting.tabs.setting_label}</label>
                                <textarea rows="2" value={this.state.setting.tabs.setting_value} name="tabs" onChange={this.handleOnChangeVal}/>
                            </div>
                        </td>
                        <td>
                            <div className="field">
                                <label contentEditable={true} onInput={this.handleLabelChange}  id={"user_default_settings"} className="editable_label">{this.state.setting.user_default_settings.setting_label}</label>
                                <textarea rows="2" value={this.state.setting.user_default_settings.setting_value} name="user_default_settings" onChange={this.handleOnChangeVal} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="field">
                                <label contentEditable={true} onInput={this.handleLabelChange}  id={"job_it_status"} className="editable_label">{this.state.setting.job_it_status.setting_label}</label>
                                <input value={this.state.setting.job_it_status.setting_value} name="job_it_status" onChange={this.handleOnChangeVal}/>
                            </div>
                        </td>
                        <td>
                            <div className="field">
                                <label contentEditable={true} onInput={this.handleLabelChange} id={"user_default_settings"} className="editable_label">{this.state.setting.job_prod_status.setting_label}</label>
                                <input value={this.state.setting.job_prod_status.setting_value} name="user_default_settings" onChange={this.handleOnChangeVal} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="field">
                                <label contentEditable={true} onInput={this.handleLabelChange} id={"job_status"} className="editable_label">{this.state.setting.job_status.setting_label}</label>
                                <input value={this.state.setting.job_status.setting_value} name="job_status" onChange={this.handleOnChangeVal}/>
                            </div>
                        </td>
                        <td>
                            <div className="field">
                                <label contentEditable={true} onInput={this.handleLabelChange} id={"job_types"} className="editable_label">{this.state.setting.job_types.setting_label}</label>
                                <input value={this.state.setting.job_types.setting_value} name="job_types" onChange={this.handleOnChangeVal} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="field">
                                <label contentEditable={true} onInput={this.handleLabelChange} id={"react_api_folder"} className="editable_label">{this.state.setting.react_api_folder.setting_label}</label>
                                <input value={this.state.setting.react_api_folder.setting_value} name="react_api_folder" onChange={this.handleOnChangeVal}/>
                            </div>
                        </td>
                        <td>
                            <div className="field">
                                <label contentEditable={true} onInput={this.handleLabelChange} id={"react_public_folder"} className="editable_label">{this.state.setting.react_public_folder.setting_label}</label>
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
                                        <Dropdown placeholder='Select a user' selection options={this.state.usersOptions} className="user_select" onChange={this.handleUserSelect} />
                                    </div>
                                    {this.renderDepartmentsDropdown()}
                                </div>

                            </div>
                        </td>
                        <td>
                            Right column
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>
                            {this.renderSavingButton()}
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
            </div>
		);
	}
}

function mapStateToProps(state,props) {
    return{
        settings: state.settings,
        react_api_folder: state.settings.setting.react_api_folder
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
