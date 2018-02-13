import React,{ Component }  from 'react';
import {connect}            from 'react-redux';
import {Route}              from 'react-router-dom';
import PropTypes            from 'prop-types';
import {withRouter }        from 'react-router-dom';
import moment from 'moment';

// User created module
import DaysView             from './manage/DaysView';
import DepartmentView       from './manage/DepartmentView';
import {getLoader}          from '../../common/CommonUI';
import util from '../../common/edlibrary';

// Get actions for calendar page
import {
    calendar_view_day_set_calendar_date
} from '../../actions/CalendarActions';

// Javascript Helpers and modules
import '../../../public/assets/js/jquery.sortable.min.js';


class Calendar_Manage extends Component {
	constructor(props){
		super(props);
		this.state = {
		    isLoading: true
        }
        this.redirectTo = this.redirectTo.bind(this);
	}
	redirectTo(loc){
	    this.props.history.push(loc);
    }
    componentWillReceiveProps(nextProps){

	    // WHEN ALL DATES ARE READY TO BE DISPLAYED SET ISLOADING TO FALSE.

	    if(nextProps.calendar_view_day_set_calendar_date){
            this.setState((prevState, props) => (
                {
                    isLoading: false
                }
            ));
        }
    }
	componentDidMount(){
        // call set up first making sure the days and dates are present before making everything displayed.
        const newMoment     = util.getWeekFromDate( moment(this.props.calendar_page.selected_date, "DD/MM/YYYY"));
        const selected_date = moment(this.props.calendar_page.selected_date, "DD/MM/YYYY");
        this.props.calendar_view_day_set_calendar_date(newMoment, selected_date);
    }
	render(){
        if(this.state.isLoading){
            return (<div className="calendar_view center">{getLoader()}</div>);
        }else{
            return(
                <div>
                    <Route exact path="/calendar/manage/" render ={(props) => <DaysView web={this.props.web} dep={this.props.dep} redirectTo={this.redirectTo} {...props} /> } />
                    <Route path="/calendar/manage/days/:date?/:job_dp_id?" render ={(props) => <DaysView web={this.props.web} dep={this.props.dep} redirectTo={this.redirectTo} {...props} /> } />
                    <Route path="/calendar/manage/departments/:id"         render ={(props) => <DepartmentView web={this.props.web} dep={this.props.dep} redirectTo={this.redirectTo}  /> } />
                </div>
            );
        }
	}
}
function mapStateToProps(state,ownprops) {
    return{
        calendar_page: state.calendar_page
    }
}
function mapDispatchToProps(dispatch){
    return({
        calendar_view_day_set_calendar_date: (days,selected_date)=>{
            dispatch(calendar_view_day_set_calendar_date(days,selected_date))
        }
    })
}
Calendar_Manage.propTypes = {
    web: PropTypes.object, // web is storage for user_log information
    dep: PropTypes.object  // information about departments
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps,null,{pure: false})(Calendar_Manage));


