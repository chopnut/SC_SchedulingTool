import React, { Component } from 'react';
import {Route,NavLink} from "react-router-dom"
import {withRouter } from 'react-router-dom';
import {connect}     from 'react-redux';
import moment from 'moment';
import axios from 'axios';
import PropTypes from 'prop-types';

// User defined modules
import RouteWrapper from './common/RouteWrapper';
import Calendar_Manage from './calendar/Manage';
import CalendarView from './calendar/View';
import CalendarViewDate from './calendar/ViewDate';
import {getLoader} from "../common/CommonUI";

class CalendarPage extends Component {
	constructor(props){
		super(props);

        this.state = {
            isLoading: true,
            departments: []
        };
	}

	componentDidMount(){


        // Get the departments from API Call from axios
        // This will build the rows and cells based on the departments and calendar_page.days
        const calendar_department_api   = this.props.settings.setting.react_api_folder+"calendar_department_structure.php";
        const promiseDepartments        = axios.get(calendar_department_api);
        promiseDepartments.then((res)=>{
            const deps          = res.data;
            this.setState((prevState, props) => ({departments: deps, isLoading: false }));

        });
    }
	renderLinkManager(){
        return (
            <div className="menu_sub">
                <div className="left">
                    <div className="current_date">
                       Today is the {moment().format("dddd, Do of MMMM YYYY")}
                    </div>
                </div>
                <div className="right">
                    <NavLink exact to="/calendar/" activeClassName="selected" className="links"><i className="grid layout icon"></i> View </NavLink>
                    <NavLink exact to="/calendar/manage/" activeClassName="selected" className="links"><i className="checked calendar icon"></i> Manage</NavLink>
                </div>
            </div>
        );
    }
	render(){
	    if(!this.state.isLoading) {
            return (
                <article className="CalendarPage">
                    {this.renderLinkManager()}
                    <div className="body">
                        <RouteWrapper>
                            <Route exact path="/calendar/" render={(props) => <CalendarView   dep={this.state.departments} {...this.props}/>}/>
                            <Route path="/calendar/(\d+-\d+-\d+)" render={(props) => <CalendarViewDate   dep={this.state.departments} {...this.props}/>}/>
                            <Route path="/calendar/manage/" render={(props) => <Calendar_Manage dep={this.state.departments} {...this.props}/>}/>
                        </RouteWrapper>
                    </div>
                </article>
            )
        }else{
	        return (<article className="CalendarPage">
                        {this.renderLinkManager()}
                        <div className="body">
                                <div className="calendar_view">
                                    <div className="first">
                                        <div className="left">
                                            <h2 className="title">
                                                <img src="assets/img/scheduler_icon.svg" width="30" height="30" className="calendar_icon"/> Scheduled Jobs
                                            </h2>
                                        </div>
                                        <div className="right">
                                        </div>
                                    </div>
                                    <div className="second">
                                        {getLoader()}
                                    </div>
                                </div>
                        </div>
                    </article>);
        }
	}
}
CalendarPage.propTypes = {
    web: PropTypes.object // web is storage for user_log information
}
function mapStateToProps(state,ownprops) {
    return{
        settings: state.settings
    }
}
export default withRouter(connect(mapStateToProps,null,null,{pure: false})(CalendarPage));
