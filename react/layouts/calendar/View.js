import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import _ from 'lodash';
import PropTypes from 'prop-types';


// Calendar Date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';



// User define components
import CalendarRow from "../../components/calendar/CalendarRow";
import CalendarPrismSidebar from "../../components/calendar/CalendarPrismSidebar";
import CalendarAddRecurring from "../../components/calendar/AddRecurring";
import BottomLegend from "./BottomLegend";


// Get actions for calendar page
import {calendar_page_change_days,
        calendar_page_refresh,
        reset_all_action } from '../../actions/CalendarActions';

// Get constants for action
import {
    CALENDAR_PAGE_ADD_SCHEDULE_TO,
    CALENDAR_PAGE_ADD_RECURRING_TO_DATE
} from '../../common/Constants';

class Calendar_View extends Component {
	constructor(props){
		super(props);

        const calendar_page  =  props.calendar_page;

        // Deep cloning will not update the siebar date hopefully.
        const sunday         = (calendar_page.days[0]);
        const saturday       = (calendar_page.days[6]);

        this.state = {
            calendar_page,
            departments: props.dep.departments,
            departmentsOrder: props.dep.departmentsOrder,
            sunday,
            saturday,
            sidebarSunday: sunday,
            sidebarSaturday: saturday,
            isLoading: true,
            calendar_date: moment()
        };

        this.handleCalendarFunction     = this.handleCalendarFunction.bind(this);
        this.handleChangeDates          = this.handleChangeDates.bind(this);
        this.handleOnChangeDateRange    = this.handleOnChangeDateRange.bind(this);
        this.handleCalendarDateChange   = this.handleCalendarDateChange.bind(this);

        this.handleViewDays             = this.handleViewDays.bind(this);


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
                    return false;
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

	// Render rows for the calendar
    renderDepartments(){
        let rowsCollection = [];

	    function inlineRecursive(item,rowcollection){
            const title     = item.title;
            const id        = item.id;
            const numkids   = item.kids.length;
            const isParent  = (numkids>0);

            if(numkids>0){
                rowcollection.push(<CalendarRow key={id} title={title} isParent={isParent}  departmentId={id} />);
                for(let value of item.kids){
                    inlineRecursive(value,rowcollection);
                }
            }else{
                rowcollection.push(<CalendarRow key={id} title={title} isParent={isParent}  departmentId= {id}/>);
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
        if(act.type == CALENDAR_PAGE_ADD_RECURRING_TO_DATE || act.type == CALENDAR_PAGE_ADD_SCHEDULE_TO){
            this.props.calendar_page_refresh(this.props.settings,this.state.sunday.date, this.state.saturday.date);
            this.props.reset_all_action();
        }

    }
	componentDidMount(){

        this.setState((prevState, props) => (
            {isLoading: false}
        ));


    }
	render(){
	    if(this.state.isLoading){
            return (<div className="calendar_view center"><div className="ui active inline loader"></div></div>);
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
                                        <th className="header_department_label"><i className="bicycle icon"></i> Department</th>

                                        {this.props.calendar_page.days.map(function(item,i){
                                            let className = "header_date";

                                            if(item.date == this.props.web.today){
                                                className = className+" today";
                                            }

                                            return (<th className={className} key={i}>
                                                <span className="day_label head_link">
                                                    <a onClick={
                                                        (e)=>{
                                                           this.handleViewDays(item.date);
                                                        }
                                                    }>{item.day}</a>
                                                </span>
                                                <span className="add_label">
                                                    <CalendarAddRecurring day ={item} />
                                                </span>
                                                <br/>
                                                <span className="date_label">{item.date}</span></th>);

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
                                <CalendarPrismSidebar days={this.state.calendar_page.days} isLoading = {this.state.isLoading }/>
                            </article>
                        </div>
                    </div>
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
        calendar_page_change_days: (settings, days)=>{
             dispatch(calendar_page_change_days(settings, days));
        },
        calendar_page_refresh: (settings, from, to)=>{
             dispatch(calendar_page_refresh(settings, from, to));
        },
        reset_all_action: ()=>{
             dispatch(reset_all_action());
        }
    })
}
Calendar_View.propTypes = {
    web: PropTypes.object, // web is storage for user_log information
    dep: PropTypes.object  // information about departments
}
export default connect(mapStateToProps,mapDispatchToProps,null,{pure: false})(Calendar_View);