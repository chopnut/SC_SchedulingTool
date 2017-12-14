import React, { Component } from 'react';
import {connect} from 'react-redux';
import  axios from 'axios';

// User defined components
import {getLoader} from "../common/CommonUI"

class SchedulingSettingsPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
          setting: {}
      }
    }
    getSettings(){
        const get_setting_api   = this.props.settings.setting.react_api_folder+"/settings_actions/get_settings.php";
        const prom        = axios.get(get_setting_api);

        prom.then((res)=>{
            this.setState((prevState, props) => ({setting: res.data, isLoading: false }));
        });
    }
    handleOnChangeVal(e,{value}){

    }
    componentDidMount(){
        this.getSettings();
    }
    renderContent(){
        console.log("Props settings: ",this.state);
        return (
            <div className="ui form">
            <table cellSpacing={10}>
                <tbody>
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
                                <textarea value={this.state.setting.react_public_folder.setting_value} name="job_types" onChange={this.handleOnChangeVal} />
                            </div>
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

function mapStateToProps(state,ownprops) {
    return{
        settings: state.settings
    }
}
export default connect(mapStateToProps,null,null,{pure: false})(SchedulingSettingsPage);
