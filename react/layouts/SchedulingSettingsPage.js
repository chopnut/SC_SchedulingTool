import React, { Component } from 'react';
import {connect} from 'react-redux';
import  axios from 'axios';
import {Dropdown, Input} from 'semantic-ui-react';
import _ from 'lodash';
import {fromJS } from 'immutable';
import {ChromePicker } from 'react-color';

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
            userDepartmentSelections: [],

          // Color selections
            color_selections: {job_it_status: {selected:"", isOpen: false, color:""} , job_prod_status: {selected:"", isOpen: false, color:""}, job_status: {selected:"", isOpen: false, color:""}, job_types: {selected:"", isOpen: false, color:""},colours_setting: {selected:"", isOpen: false, color:""} }

        }
        this.handleSave           = this.handleSave.bind(this);
        this.handleUserSelect     = this.handleUserSelect.bind(this);
        this.handleDeptSelect     = this.handleDeptSelect.bind(this);
        this.handleLabelChange    = this.handleLabelChange.bind(this);
        this.handleOnChangeVal    = this.handleOnChangeVal.bind(this);
        this.renderColourOptions  = this.renderColourOptions.bind(this);
        this.displayColorPicker   = false;
    }
    getSettings(){
        const apiUrl   = this.props.react_api_folder+"get_settings.php";
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
        const apiUrl   = this.props.react_api_folder+"get_user_settings.php?login_id="+id;
        const prom              = axios.get(apiUrl);
        prom.then((res)=>{
            const userSetting   = res.data.payload;
            const depSelection  = _.cloneDeep(userSetting.sched_us_department_group);
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
    handleLabelChange(e){

        const targ       = e.target;
        const jTarg      = $(targ);
        const labelValue = jTarg.text();
        const fieldName  = targ.className;

        // Clone the individual label setting
        let isetting            = _.cloneDeep(this.state.setting[fieldName]);
        isetting.setting_label  = labelValue;

        // Clone the actual setting
        let setting           = Object.assign({},this.state.setting);
        setting[fieldName]    = isetting;

        this.setState((prevState, props) => (
            {setting}
        ));

    }
    handleSave(e){
        const data = Object.assign({},
            {
                sched_settings: this.state.setting,
                user_selected: this.state.userSettings,
                user_settings:{
                    sched_us_department_group: this.state.userDepartmentSelections
                }
            });
        console.log("Data to save: ", data);
        this.props.st_settings_save(this.props.settings,data);
    }
    handleOnChangeVal(e) {
        const element = $(e.target);
        const elName = element.attr('name');
        const elValue = element.val();

        // Clone the value itself
        const settingOption = Object.assign({}, this.state.setting[elName],{setting_value: elValue});

        // Clone the setting with new option value
        const newSetting    = Object.assign({}, this.state.setting, {[elName]: settingOption})

        this.setState((prevState, props) => (
            {setting: newSetting}
        ));
    }
    handleColorPickerOpen(setting_name){
        this.handleColorSelectionChange(setting_name,true, "isOpen");
    }
    handleColorPickerClose(setting_name){
        this.handleColorSelectionChange(setting_name, false, "isOpen");
    }
    handleColourType(setting_name , value){
        this.handleColorSelectionChange(setting_name,value , "selected");
    }
    handleReturnVal(setting_name){
        const get_selected      = this.state.color_selections[setting_name].selected;   // get the current selected based on whats being changed.
        if(get_selected!=""){
            const each_string_value= this.state.setting[setting_name].setting_value;
            try{
                const ob_value         = JSON.parse(each_string_value);                     // parse the text value
                let  the_key           = -1;
                Object.keys(ob_value).map((n)=>{
                    const isMatch = ob_value[n].key == get_selected;
                    if(isMatch) the_key  = n;
                });

                if(the_key>-1){
                    return ob_value[the_key].color;
                }
            }catch (e){
            }
        }
        return "";
    }
    handleColorPickerChange(setting_name, color){
        this.handleColorSelectionChange(setting_name,color.hex,'color');
        const get_selected      = this.state.color_selections[setting_name].selected;   // get the current selected based on whats being changed.
        const each_color_val    = Object.assign({}, this.state.setting[setting_name]);  // get the object setting name
        let  string_val         = JSON.parse(each_color_val.setting_value);             // parse the text value
        const map_string_val    = fromJS(string_val);

        let  the_key            = -1;

        Object.keys(string_val).map((n)=>{
            const isMatch = string_val[n].key == get_selected;
            if(isMatch) the_key  = n;
        });

        // This will change the color in the text-box dynamically
        if(get_selected!=""){
            const copy_string_val   = map_string_val.setIn([the_key,'color'], color.hex);
            const convert_to_string = JSON.stringify(copy_string_val.toJS());

            const settingOption = Object.assign({}, this.state.setting[setting_name], {setting_value: convert_to_string});
            const newSetting    = Object.assign({}, this.state.setting, {[setting_name]: settingOption})
            this.setState((prevState, props) => (
                {setting: newSetting}
            ));

        }

    }
    handleColorSelectionChange(setting_name, value , prop){
        const selected          = Object.assign({}, this.state.color_selections[setting_name], {[prop]: value});
        const color_selections  = Object.assign({}, this.state.color_selections, {[setting_name]: selected});

        console.log("COLOR CHANGE: ",value,prop);
        this.setState((prevState, props) => (
            {color_selections}
        ));
    }

    renderColourOptions(setting_name){
        const options   = this.state.setting[setting_name].setting_value;
        const original_colour_options = Object.assign( {}, JSON.parse(options));

        // For colour picker positioning
        const popover = {
            position: 'absolute',
            zIndex: '2',
        }
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        }
        // This will convert the option to proper array
        const change_colour_options = function (colours) {
            let tmp_array = [];
            Object.keys(colours).forEach(function(n){
                colours[n].value = colours[n].key;
                delete colours[n]['color'];
                tmp_array.push(colours[n]);
            });
            return tmp_array;
        }
        let colour_options = change_colour_options(original_colour_options);
        return <div className="three_cols">
            <div className="column">
                <Dropdown placeholder="Select one" fluid selection options={colour_options} onChange={ (e,{value})=>{ this.handleColourType(setting_name, value); }} />
            </div>
            <div className="middle">
               <div className="preview_box" style={{backgroundColor: this.handleReturnVal(setting_name)}}>
                   &nbsp;
               </div>
            </div>
            <div className="column">
                <Input className="input_text" placeholder="Select background colour" onClick={ ()=>{  this.handleColorPickerOpen(setting_name) } } readOnly={true} value={ this.state.color_selections[setting_name].color}/>
                {this.state.color_selections[setting_name].isOpen ? <div style={ popover }>
                    <div style={ cover } onClick={ ()=>{  this.handleColorPickerClose(setting_name) } }/>
                    <ChromePicker
                        color={this.state.color_selections[setting_name].color}
                        onChange = {(color)=>{  this.handleColorPickerChange(setting_name, color) } } />
                </div> : null}
            </div>
        </div>;
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
                        <td>
                            <div className="two_cols">
                                <div className="column">
                                    <div className="field">
                                        <label contentEditable={true} onBlur={this.handleLabelChange}  id={"job_it_status"} className="job_it_status">{this.state.setting.job_it_status.setting_label}</label>
                                        <span className="setting_name">{this.state.setting.job_it_status.name}</span>
                                        <input value={this.state.setting.job_it_status.setting_value} name="job_it_status" onChange={this.handleOnChangeVal}/>
                                    </div>
                                    <div className="field">
                                        <label contentEditable={true} onBlur={this.handleLabelChange} id={"job_prod_status"} className="job_prod_status">{this.state.setting.job_prod_status.setting_label}</label>
                                        <span className="setting_name">{this.state.setting.job_prod_status.name}</span>
                                        <input value={this.state.setting.job_prod_status.setting_value} name="job_prod_status" onChange={this.handleOnChangeVal} />
                                    </div>
                                    <div className="field">
                                        <label contentEditable={true} onBlur={this.handleLabelChange} id={"job_status"} className="job_status">{this.state.setting.job_status.setting_label}</label>
                                        <span className="setting_name">{this.state.setting.job_status.name}</span>
                                        <input value={this.state.setting.job_status.setting_value} name="job_status" onChange={this.handleOnChangeVal}/>
                                    </div>
                                    <div className="field">
                                        <label contentEditable={true} onBlur={this.handleLabelChange} id={"job_types"} className="job_types">{this.state.setting.job_types.setting_label}</label>
                                        <span className="setting_name">{this.state.setting.job_types.name}</span>
                                        <input value={this.state.setting.job_types.setting_value} name="job_types" onChange={this.handleOnChangeVal} />
                                    </div>
                                    <div className="field">
                                        <label contentEditable={true} onBlur={this.handleLabelChange} id={"colours_setting"} className="colours_setting">{this.state.setting.colours_setting.setting_label}</label>
                                        <span className="setting_name">{this.state.setting.colours_setting.name}</span>
                                        <input value={this.state.setting.colours_setting.setting_value} name="colours_setting" onChange={this.handleOnChangeVal}/>
                                    </div>
                                </div>
                                <div className="column">
                                    Right Side
                                </div>
                            </div>

                        </td>
                        <td style={{verticalAlign: "top"}}>
                            {this.renderColourOptions(this.state.setting.job_it_status.name)}
                            {this.renderColourOptions(this.state.setting.job_prod_status.name)}
                            {this.renderColourOptions(this.state.setting.job_status.name)}
                            {this.renderColourOptions(this.state.setting.job_types.name)}
                            {this.renderColourOptions(this.state.setting.colours_setting.name)}

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
                                        <Dropdown placeholder='Select a user'
                                                  selection options={this.state.usersOptions}
                                                  className="user_select"
                                                  onChange={this.handleUserSelect} />
                                    </div>
                                    {this.renderDepartmentsDropdown()}
                                </div>

                            </div>
                        </td>
                        <td>
                            <div className="field">
                                <label contentEditable={true} onBlur={this.handleLabelChange} id={"programming_dept_id"} className="programming_dept_id">{this.state.setting.programming_dept_id.setting_label}</label>
                                <span className="setting_name">{this.state.setting.programming_dept_id.name}</span>
                                <input value={this.state.setting.programming_dept_id.setting_value} name="programming_dept_id" onChange={this.handleOnChangeVal} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <Doc/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="field">
                                <label contentEditable={true} onBlur={this.handleLabelChange} id={"tabs"} className="tabs">{this.state.setting.tabs.setting_label}</label>
                                <span className="setting_name">{this.state.setting.tabs.name}</span>
                                <textarea rows="2" value={this.state.setting.tabs.setting_value} name="tabs" onChange={this.handleOnChangeVal}/>
                            </div>
                        </td>
                        <td>
                            <div className="field">
                                <label contentEditable={true} onBlur={this.handleLabelChange}  id={"user_default_settings"} className="user_default_settings">{this.state.setting.user_default_settings.setting_label}</label>
                                <span className="setting_name">{this.state.setting.user_default_settings.name}</span>
                                <textarea rows="2" value={this.state.setting.user_default_settings.setting_value} name="user_default_settings" onChange={this.handleOnChangeVal} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="field">
                                <label contentEditable={true} onBlur={this.handleLabelChange} id={"react_api_folder"} className="react_api_folder">{this.state.setting.react_api_folder.setting_label}</label>
                                <span className="setting_name">{this.state.setting.react_api_folder.name}</span>
                                <input value={this.state.setting.react_api_folder.setting_value} name="react_api_folder" onChange={this.handleOnChangeVal}/>
                            </div>
                        </td>
                        <td>
                            <div className="field">
                                <label contentEditable={true} onBlur={this.handleLabelChange} id={"react_public_folder"} className="react_public_folder">{this.state.setting.react_public_folder.setting_label}</label>
                                <span className="setting_name">{this.state.setting.react_public_folder.name}</span>
                                <input value={this.state.setting.react_public_folder.setting_value} name="react_public_folder" onChange={this.handleOnChangeVal} />
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="field">
                                <label contentEditable={true} onBlur={this.handleLabelChange} id={"production_hours_per_day"} className="production_hours_per_day">{this.state.setting.production_hours_per_day.setting_label}</label>
                                <span className="setting_name">{this.state.setting.production_hours_per_day.name}</span>
                                <input value={this.state.setting.production_hours_per_day.setting_value} name="production_hours_per_day" onChange={this.handleOnChangeVal} />
                            </div>
                        </td>
                        <td>
                            &nbsp;
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
        react_api_folder: state.settings.setting.react_api_folder+"/settings_actions/"
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
