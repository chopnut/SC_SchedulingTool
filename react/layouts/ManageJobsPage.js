import React from 'react';
import {Route,NavLink, connect, Component} from "../common/Modules"
import PropTypes from 'prop-types';
import '../../public/assets/js/jquery.sortable.min.js';

import RouteWrapper from './common/RouteWrapper';
import ManageJobs_JobsPage from './manage_jobs/JobsPage';
import ManageJobs_NewEditPage from './manage_jobs/NewEditPage';
import ManageJobs_SchedulePage from './manage_jobs/SchedulePage';

class ManageJobsPage extends Component {
	constructor(props){
		super(props);
        const settings = props.settings;
        this.state = {settings};
        // console.log("From manage job page: ",props);
	}
	renderTabs(){
	    return (
	        <div className="menu_sub">
                <NavLink exact to="/manageJobs" activeClassName="selected" className="links start jobs_link"><i className="shopping bag icon"></i> Job Bags</NavLink>
                <NavLink to="/manageJobs/schedule" activeClassName="selected" className="links end schedule_link"><i className="checked calendar icon"></i>Programming Schedule</NavLink>
                <NavLink to="/manageJobs/newedit" activeClassName="selected" className="links end newedit_link"><i className="small add circle icon"></i> New/Edit Job Bags</NavLink>
            </div>
        );
    }
	render(){
		return(
			<div className="ManageJobsPage">
                {this.renderTabs()}
                <RouteWrapper>
                    <Route exact path="/managejobs" render ={(props) => <ManageJobs_JobsPage {...this.props} /> }   />
                    <Route path="/managejobs/jobs" render ={(props) => <ManageJobs_JobsPage  {...this.props} /> }   />
                    <Route path="/managejobs/schedule" render ={(props) => <ManageJobs_SchedulePage {...this.props} /> } />
                    <Route path="/managejobs/newedit" render ={(props) => <ManageJobs_NewEditPage {...this.props}   /> } />
                </RouteWrapper>

			</div>
		);
	}
}
function mapStateToProps(state,ownprops) {
    return{
        settings: state.settings,
        calendar_page: state.calendar_page
    }
}
export default connect(mapStateToProps,null,null,{pure: false})(ManageJobsPage);
