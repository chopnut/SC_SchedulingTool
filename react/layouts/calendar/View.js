import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

// Calendar Date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import util from '../../common/edlibrary';

// User define components
import CalendarRow from "../../components/calendar/CalendarRow";
import ProgrammerRow    from '../../components/calendar/common/ProgrammerRow';
import CalendarPrismSidebar from "../../components/calendar/CalendarPrismSidebar";

import BottomLegend from "./BottomLegend";
import CalendarAddRecurring from "../../components/calendar/AddRecurring";
import {getLoader} from '../../common/CommonUI';

// Get actions for calendar page
import {calendar_page_change_days,
        calendar_page_refresh,
        calendar_view_day_set_calendar_date,
        reset_all_action } from '../../actions/CalendarActions';

// Get constants for action
import {
    CALENDAR_PAGE_ADD_SCHEDULE_TO,
    CALENDAR_PAGE_ADD_RECURRING_TO_DATE,
    CALENDAR_MAIN_PAGE_REFRESH,
    CALENDAR_PAGE_MOVE_DEP_SIDE_BY_SIDE
} from '../../common/Constants';

class Calendar_View extends Component {
	constructor(props){
		super(props);

        const calendar_page  =  props.calendar_page;

        // Deep cloning will not update the siebar date hopefully.
        const sunday         = (calendar_page.days[0]);
        const saturday       = (calendar_page.days[6]);

        this.state = {
            departments: props.dep.departments,
            departmentsOrder: props.dep.departmentsOrder,
            sunday,
            saturday,
            sidebarSunday: sunday,
            sidebarSaturday: saturday,
            isLoading: true,
            calendar_date: moment(),
            action_refresh: moment(),
            colour_jobs_hover_array: []
        };

        this.handleCalendarFunction     = this.handleCalendarFunction.bind(this);
        this.handleChangeDates          = this.handleChangeDates.bind(this);
        this.handleOnChangeDateRange    = this.handleOnChangeDateRange.bind(this);
        this.handleCalendarDateChange   = this.handleCalendarDateChange.bind(this);
        this.handleViewDays             = this.handleViewDays.bind(this);
        this.refreshPage                = this.refreshPage.bind(this);
        this.setUp                      = this.setUp.bind(this);

        // Populating colours
        this.populate_colour_settings  = this.populate_colour_settings.bind(this);
	}
	/*
	* When new sunday and saturday has been selected update state and ui
	* @newSunday
	* @newSaturday
	* */
    handleCalendarDateChange(newSunday,newSaturday){
        // Need to fill up the dates in between
        let dateArray = [];
        dateArray.push({day: newSunday.format("dddd"), date: newSunday.format("DD/MM/YYYY") });
        _.times(5,function(n){
            const day = moment(newSunday).add(n+1,'days');
            dateArray.push({day: day.format("dddd"), date: day.format("DD/MM/YYYY") });
        });
        dateArray.push({day: newSaturday.format("dddd"), date: newSaturday.format("DD/MM/YYYY") });

        this.setState((prevState, props) => (
            {sunday: dateArray[0], saturday: dateArray[6]}
        ));

        // Call the calendar action to update the main state
        this.props.calendar_page_change_days(this.props.settings,dateArray);

    }
    /*
    * Handles on change from Mini calendar from in the center of the page
    * */
    handleCalendarFunction(date){
        this.setState(function(state,props){
            return ({state,calendar_date: date});
        });

        this.handleOnChangeDateRange( date);
    }
	/*
	* Handle the date range when mini calendar has been selected
	* query the new calendar_date state;
	* */
    handleOnChangeDateRange(newDate){
        const today = newDate.format('dddd').toLowerCase();
        let nextSunday, nextSaturday;

        if(today=='sunday'){
            nextSunday = newDate;
            nextSaturday = moment(nextSunday).add(6,'days');

        }else if(today =='saturday'){
            nextSaturday  = newDate;
            nextSunday= moment(nextSaturday).subtract(6,'days');


        }else{
            _.times(7,function(n){
                let mToday = moment(newDate);
                let theDay = mToday.add(n,'days').format('dddd').toLowerCase();

                if(theDay=='saturday'){
                    nextSaturday = mToday;
                    nextSunday   = moment(nextSaturday).subtract(6,'days');
                }
            });
        }

        this.handleCalendarDateChange(nextSunday,nextSaturday);

    }

	/*
	* Handle the change of dates which direction the press
	* @direction left or right
	* */
    handleChangeDates(direction){
        const msunday       = moment(this.state.sunday.date,'DD/MM/YYYY');
        const msaturday     = moment(this.state.saturday.date,'DD/MM/YYYY');

        let nextSunday    = moment(msunday);
        let nextSaturday  = moment(msaturday);

        if(direction=='left'){
            nextSunday.subtract(7,'days');
            nextSaturday.subtract(7, 'days');

        }else{ // You are going right
            nextSunday.add(7,'days');
            nextSaturday.add(7, 'days');
        }
        this.handleCalendarDateChange(nextSunday,nextSaturday);

    }
    handleViewDays(date){
        const { history } = this.props;
        history.push('/calendar/manage/days/'+date.replace(/\//g,'-'));
    }

	// RENDER ROWS FOR THE CALENDAR
    renderDepartments(){
        let rowsCollection  = [];
        const that          = this;
        const programmingID = this.props.settings.programmingUsers.deptId;
        const programmingU  = this.props.settings.programmingUsers.value;

        // RECURSING OVER DEPARTMENTS ORDER
        function inlineRecursive(item,rowcollection){
            const title     = item.title;
            const id        = item.id;
            const numkids   = item.kids.length;
            const isParent  = (numkids>0);

            if(numkids>0){
                rowcollection.push(<CalendarRow key={id} title={title} isParent={isParent}  departmentId={id} isViewDate={false}/>);

                // IF DEPARTMENTS ID MATCHED PROGRAMMING ID ADD, ROWS FOR THE PROGRAMMERS

                for(let value of item.kids){
                    inlineRecursive(value,rowcollection);
                }
            }else{
                // THIS IS WHERE YOU PRINT OUT THE DEPARTMENT

                rowcollection.push(<CalendarRow key={id} title={title} isParent={isParent}  departmentId= {id} isViewDate={false}/>);

                // DISPLAY THE ROW FOR THE PROGRAMMER
                if(programmingID == id){
                    programmingU.map((item , n)=>{
                        rowcollection.push(<ProgrammerRow key={"pr_"+ n} user={item} isParent={isParent}  departmentId= {id} counter={n} isViewDate={false}/>);
                        }
                    )
                }
            }
        }
        this.state.departmentsOrder.map(function(item,i){
            inlineRecursive(item,rowsCollection);
        })

       return (rowsCollection);

    }
    componentWillReceiveProps(nextProps){

        // REFRESH THE PAGE
        const act = nextProps.calendar_page.action;

        if(act.type == CALENDAR_PAGE_ADD_RECURRING_TO_DATE || act.type == CALENDAR_PAGE_ADD_SCHEDULE_TO || act.type == CALENDAR_PAGE_MOVE_DEP_SIDE_BY_SIDE){
            this.setUp(nextProps.calendar_page.days, true);
        }
        // WHEN RESET ALL ACTION IS CALLED EVERYTHING ELSE IS DONE LOADING
        // CHANGE ISLOADING TO FALSE

        if(nextProps.reset_all_action){
            this.setState((prevState, props) => (
                {isLoading: false}
            ));
        }
    }
    setUp(days, callRefresh = false){
        const currentDays = days;
        if(!callRefresh){
            this.setState((prevState, props) => ({
                isLoading: false,
                sunday:     currentDays[0],
                saturday:   currentDays[6],
                sidebarSunday: currentDays[0],
                sidebarSaturday: currentDays[6]
            }));
        }else{

            this.setState((prevState, props) => ({
                isLoading: true,
                sunday:     currentDays[0],
                saturday:   currentDays[6],
                sidebarSunday: currentDays[0],
                sidebarSaturday: currentDays[6],
                action_refresh: moment()
            }),this.refreshPage);
        }

    }
    refreshPage(){
        this.props.calendar_page_refresh(this.props.settings,this.state.sunday.date, this.state.saturday.date);
        this.props.reset_all_action();
    }
	componentDidMount(){
        // Make sure when re-initialize the dates to the calendar view format

        const newMoment     = util.getWeekFromDate( moment(this.props.calendar_page.selected_date, "DD/MM/YYYY"));
        const selected_date = moment(this.props.calendar_page.selected_date, "DD/MM/YYYY");
        this.props.calendar_view_day_set_calendar_date(newMoment, selected_date);
        this.setUp(newMoment, true);

        this.populate_colour_settings();
    }
    populate_colour_settings(){
        // Repopulate the colour settings for each job in the calendar

        // 1. For the non-programmers job
        let colour_jobs_hover_array = [];
        for(var day_key in this.props.calendar_jobs){
            // first level is days
            const jobs = this.props.calendar_jobs;

            for(var dep_key in jobs[day_key]){
                // second level is for department
                const deps = jobs[day_key][dep_key];

                for(var job_id in deps){
                    // third level is for jobs
                    const job = deps[job_id];
                    const dep = job.dep;
                    const bag = job.bag;

                    const job_val = { job_id, job_colour: bag.job_colour }
                }
            }
        }
        // 2. For programmers-jobs

    }
	render(){

	    if(this.state.isLoading){
            return (
                <div className="calendar_view center">
                        {getLoader()}
                </div>
            );
        }else{
            return(
                <div className="calendar_view">
                    <div className="first">
                        <div className="left">
                            <h2 className="title">
                                <img src="assets/img/scheduler_icon.svg" width="30" height="30" className="calendar_icon"/> Scheduled Jobs
                            </h2>
                        </div>

                        <div className="right">
                            <span className="calendar_holder">
                                    <span className="ui input">
                                         <i className="calendar large icon"></i>
                                      <DatePicker
                                       selected={this.state.calendar_date}
                                       onChange={(date) => {
                                           this.handleCalendarFunction(date);
                                       }
                                       }

                                       dropdownMode="select"
                                       showMonthDropdown
                                       showYearDropdown
                                       dateFormat="DD/MM/YYYY"
                                       className="mini_calendar_text_field"
                                       todayButton={"Today"}

                                     />
                                    </span>
                                </span>
                        </div>
                    </div>
                    <div className="second">
                        <div style={{float: "left",width:"100px",height:"40px",position: "absolute"}}>
                            <div className="ui active tiny inline loader" style={{
                                marginLeft: '10px',
                                marginTop: '7px',
                                display: (this.props.calendar_page.isWorking) ? "inline-block" : "none",
                                float: "left"
                            }}></div>
                        </div>
                        <div className="date_range head_link">
                            <span className="previous">
                                <a className="click_prev" onClick={() => {
                                    this.handleChangeDates('left');
                                }}><i className="chevron circle left icon"></i></a>
                            </span>
                            <span className="range_date">{this.props.calendar_page.days[0].date}
                                - {this.props.calendar_page.days[6].date}
                            </span>
                            <span className="next">
                                <a className="click_next" onClick={() => {
                                    this.handleChangeDates('right');
                                }}><i className="chevron circle right icon"></i></a>
                            </span>
                        </div>
                    </div>
                    <div className="third">
                        <div className="left">
                            <div>
                                <table className="ui fixed single purple unstackable celled table" >
                                    <thead>
                                    <tr>
                                        <th className="header_department_label">
                                            <i className="bicycle icon"></i> Department
                                        </th>
                                        {this.props.calendar_page.days.map(function(item,i){
                                            let className = "header_date";

                                            if(item.date == this.props.web.today){
                                                className = className+" today";
                                            }
                                            // Stripping the slashes from the date to be displayed
                                            const dateLinkLabel  = item.date.split("/").join("-");

                                            return (<th className={className} key={i}>
                                                    <span className="day_label head_link">
                                                        <a onClick={
                                                            (e)=>{
                                                               this.handleViewDays(item.date);
                                                            }
                                                        }>{item.day}
                                                        </a>
                                                    </span>
                                                    <span className="add_label">
                                                        <CalendarAddRecurring day ={item} />
                                                    </span>
                                                    <br/>
                                                    <span className="date_label">
                                                        <NavLink to={"/calendar/"+ dateLinkLabel} className="date_link">{item.date}</NavLink>
                                                    </span>
                                                </th>);

                                        }.bind(this))}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderDepartments()}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <BottomLegend />
                            </div>
                        </div>
                        <div className="right">
                            <header>
                                <span className="label">Prism Job Bags Available</span><br/>
                                <span className="range">{this.state.sidebarSunday.date} - {this.state.sidebarSaturday.date}</span>
                            </header>
                            <article>
                                <CalendarPrismSidebar days={this.props.calendar_page.days} action_refresh ={this.state.action_refresh} />
                            </article>
                        </div>
                    </div>
                </div>
            )
        }
	}
}
function mapStateToProps(state,ownprops) {
    return{
        settings: state.settings,
        calendar_page: state.calendar_page,
        calendar_jobs: state.calendar_page.calendar_jobs,
        programmers_jobs: state.calendar_page.programmers_jobs
    }
}
function mapDispatchToProps(dispatch){
    return({
        calendar_page_change_days: (settings, days)=>{
             dispatch(calendar_page_change_days(settings, days));
        },
        calendar_page_refresh: (settings, from, to)=>{
             dispatch(calendar_page_refresh(settings, from, to));
        },
        reset_all_action: ()=>{
             dispatch(reset_all_action());
        },
        calendar_view_day_set_calendar_date: (days,selected_date)=>{
            dispatch(calendar_view_day_set_calendar_date(days,selected_date))
        }

    })
}
Calendar_View.propTypes = {
    web: PropTypes.object, // web is storage for user_log information
    dep: PropTypes.object  // information about departments
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps,null,{pure: false})(Calendar_View));
