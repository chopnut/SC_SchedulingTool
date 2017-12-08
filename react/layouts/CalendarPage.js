import React, { Component } from 'react';
import {Route,NavLink,connect} from "../common/Modules"
import {withRouter } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import PropTypes from 'prop-types';

// User defined modules
import RouteWrapper from './common/RouteWrapper';
import Calendar_Manage from './calendar/Manage';
import Calendar_View from './calendar/View';

class CalendarPage extends Component {
	constructor(props){
		super(props);

        this.state = {
            isLoading: true,
            departments: {}
        };

	}
	componentDidMount(){
	    console.log("FromCalendarPage ", this.props);

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
                    <NavLink exact to="/calendar" activeClassName="selected" className="links"><i className="grid layout icon"></i> View </NavLink>
                    <NavLink to="/calendar/manage" activeClassName="selected" className="links"><i className="checked calendar icon"></i> Manage</NavLink>
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
                            <Route exact path="/calendar"  render={(props) => <Calendar_View   dep={this.state.departments} {...this.props}/>}/>
                            <Route path="/calendar/manage" render={(props) => <Calendar_Manage dep={this.state.departments} {...this.props}/>}/>
                        </RouteWrapper>
                    </div>
                </article>
            )
        }else{
	        return (<article className="CalendarPage">
                        {this.renderLinkManager()}
                        <div className="body">

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
