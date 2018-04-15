import React from 'react';
import {Route,NavLink, connect, Component} from "../common/Modules"
import '../../public/assets/js/jquery.sortable.min.js';
import RouteWrapper from './common/RouteWrapper';
import ManageJobs_JobsPage from './manage_jobs/JobsPage';
import ManageJobs_NewEditPage from './manage_jobs/NewEditPage';
import ManageJobs_SchedulePage from './manage_jobs/SchedulePage';

// IMPORT FOR SETTING UP CALENDAR DATES RIGHT AGAIN
import util from '../common/edlibrary';
import moment from 'moment';
import {calendar_view_day_set_calendar_date} from '../actions/CalendarActions';

class ManageJobsPage extends Component {
	constructor(props){
		super(props);
        this.state = {
            isLoading: true
        };
        this.setUp = this.setUp.bind(this);
	}
    componentWillReceiveProps(nextProps){
        // WILL BE CALLED WHEN FIRST LOADED OR INVOKED
        if(nextProps.calendar_view_day_set_calendar_date && this.props.calendar_page.days.length==0){
            this.setUp();
        }
    }
    setUp(){
        const moSelectedDate = moment(this.props.calendar_page.selected_date, 'DD/MM/YYYY');
        const mo_dates          = util.getWeekFromDate(moSelectedDate);

        this.props.calendar_view_day_set_calendar_date(mo_dates,moSelectedDate);
        this.setState((prevState, props) => ({
            isLoading: false
        }));
    }
	componentDidMount(){
        this.setUp();
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
	    if(!this.state.isLoading){
            return(
                <div className="ManageJobsPage">
                    {this.renderTabs()}
                    <RouteWrapper>
                        <Route exact path="/managejobs" render ={(props) => <ManageJobs_JobsPage {...this.props} /> }   />
                        <Route path="/managejobs/jobs" render ={(props) => <ManageJobs_JobsPage  {...this.props} /> }   />
                        <Route path="/managejobs/schedule" render ={(props) => <ManageJobs_SchedulePage {...this.props} /> } />
                        <Route path="/managejobs/newedit/:jobid?/:depid?" render ={(props) => <ManageJobs_NewEditPage {...this.props}   /> } />
                    </RouteWrapper>
                </div>
            );
        }else{
            return(
                <div className="ManageJobsPage">
                </div>
            );
        }

	}
}
function mapStateToProps(state,ownprops) {
    return{
        settings: state.settings,
        calendar_page: state.calendar_page
    }
}
function mapDispatchToProps(dispatch){
    return({
        calendar_view_day_set_calendar_date: (days, selected_date)=>{
            dispatch(calendar_view_day_set_calendar_date(days, selected_date))
        }
    })
}
export default connect(mapStateToProps,mapDispatchToProps,null,{pure: false})(ManageJobsPage);
