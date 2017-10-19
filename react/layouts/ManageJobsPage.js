import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink ,IndexLink} from 'react-router-dom';
import {Route} from 'react-router-dom'


import RouteWrapper from './RouteWrapper';
import ManageJobs_JobsPage from './ManageJobs_JobsPage';
import ManageJobs_NewEditPage from './ManageJobs_NewEditPage';


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
                <NavLink exact to="/manageJobs" activeClassName="selected" className="links start"><i className="small cubes icon"></i> Job Bags</NavLink>
                <NavLink to="/manageJobs/newedit" activeClassName="selected" className="links end"><i className="small add circle icon"></i> New/Edit Job Bags</NavLink>
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
