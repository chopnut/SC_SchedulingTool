import React from 'react';
import {Route,NavLink, connect, Component} from "../common/Modules"


import RouteWrapper from './RouteWrapper';
import ManageJobs_JobsPage from './ManageJobs_JobsPage';
import ManageJobs_NewEditPage from './ManageJobs_NewEditPage';
import ManageJobs_SchedulePage from './ManageJobs_SchedulePage';

class ManageJobsPage extends Component {
	constructor(props){
		super(props);
        const state = props.store;
        const userlog  = state.user_detail;
        const settings = state.settings;

        this.state = {settings, userlog};
        // console.log("From manage job page: ",props);
	}
	renderTabs(){
	    return (
	        <div className="menu_sub">
                <NavLink exact to="/manageJobs" activeClassName="selected" className="links start jobs_link"><i className="shopping bag icon"></i> Job Bags</NavLink>
                <NavLink to="/manageJobs/schedule" activeClassName="selected" className="links end schedule_link"><i className="checked calendar icon"></i> Schedule</NavLink>
                <NavLink to="/manageJobs/newedit" activeClassName="selected" className="links end newedit_link"><i className="small add circle icon"></i> New/Edit Job Bags</NavLink>
            </div>
        );
    }
	render(){
		return(
			<div className="ManageJobsPage">
                {this.renderTabs()}
                <RouteWrapper>
                    <Route exact path="/managejobs" render ={(props) => <ManageJobs_JobsPage /> } />
                    <Route path="/managejobs/jobs" render ={(props) => <ManageJobs_JobsPage  /> }  />
                    <Route path="/managejobs/newedit" render ={(props) => <ManageJobs_NewEditPage /> } />
                    <Route path="/managejobs/schedule" render ={(props) => <ManageJobs_SchedulePage /> } />
                </RouteWrapper>

			</div>
		);
	}
}
function mapStateToProps(state,ownprops) {
    return{
        store: state
    }
}
export default connect(mapStateToProps,null,null,{pure: false})(ManageJobsPage);
