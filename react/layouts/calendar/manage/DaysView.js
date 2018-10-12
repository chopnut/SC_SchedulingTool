import React, { Component } from 'react';
import {withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';

// Other function
import * as helper from '../../../common/CalendarPageFunctions';

// Calendar Date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// User defined components
import Day from '../../../components/calendar/manage/days_view/Day';

// Get actions for calendar page
import {calendar_page_change_days,
    calendar_page_refresh,
    calendar_view_day_set_calendar_date,
    reset_all_action } from '../../../actions/CalendarActions';

class DaysView extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            departmentJobs: [],
            loadedDays: 0,
            paramsDate: null,

            calendarDate: moment(),
            sunday: props.calendar_page.days[0].date,
            saturday: props.calendar_page.days[6].date
        }

        this.handleChangeCalendarDate = this.handleChangeCalendarDate.bind(this);
        this.handleChangeDirection    = this.handleChangeDirection.bind(this);
        this.handleLoadedDayRow       = this.handleLoadedDayRow.bind(this);

        // PRE-TRIGGERED MAIN ACTION
        this.updateDateChange         = this.updateDateChange.bind(this);
    }
    updateDateChange(){
        // Before updating the views

        const seven_days = helper.getSevenMomentsFromDate(this.state.sunday);
        const post_data  = helper.getSevenDayAndDatesFormat(seven_days);

        // Update UI/View now
        this.props.calendar_page_change_days(this.props.settings, post_data);
    }
    componentWillReceiveProps(nextProps) {
       
    }    
    handleChangeDirection(direction){
        // Allow to change the display and trigger to update the main caledar_jobs
        const msunday       = moment(this.state.sunday,'DD/MM/YYYY');
        const msaturday     = moment(this.state.saturday,'DD/MM/YYYY');

        let nextSunday    = moment(msunday);
        let nextSaturday  = moment(msaturday);

       

        if(direction=='left'){
            nextSunday.subtract(7,'days');
            nextSaturday.subtract(7, 'days');

        }else{ // You are going right
            nextSunday.add(7,'days');
            nextSaturday.add(7, 'days');
        }

        this.setState((prevState,props)=>{
            return({sunday: nextSunday.format("DD/MM/YYYY"), saturday:nextSaturday.format("DD/MM/YYYY")});
        }, this.updateDateChange );

    }

    handleChangeCalendarDate(newDate){
        // Allow to change the display and trigger to update the main caledar_jobs
        const today         = newDate.format('dddd').toLowerCase();
        let paramsDate      = null

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
        // If params date has value that means you are in the mode of viewing a particular date
        // so redirect to new date
        if(this.state.paramsDate){
            this.props.history.push('/calendar/manage/days/'+newDate.format('DD-MM-YYYY'));
            paramsDate = newDate;
        }

        this.setState((prevState,props)=>{
            return(
                {
                    calendarDate: newDate,
                    sunday: nextSunday.format('DD/MM/YYYY'),
                    saturday: nextSaturday.format('DD/MM/YYYY'),
                    paramsDate: paramsDate
                } );
        },  this.updateDateChange );
    }
    handleLoadedDayRow(){
        this.setState((prevState, props) => (
            {loadedDays: prevState.loadedDays+1 }
        ));
    }
    componentDidUpdate(){
        if(this.state.paramsDate){
            // This will cause the view to go directly to that specific day
            if(this.state.loadedDays==7){
                $('html, body').animate({
                    scrollTop: $('#'+this.state.paramsDate.format("DD-MM-YYYY")).offset().top
                }, 'fast');
            }
        }
    }
    componentDidMount(){

        const date = this.props.match.params.date;
        let   paramsDate = null;
        if(date){
            // Check for a valid date, 3rd param is for strict mode
            const moDate = moment(date,"DD-MM-YYYY",true);
            if(moDate.isValid()) paramsDate = moDate;
        }
        this.setState(function(state,props){
            return ({state,isLoading: false,paramsDate: paramsDate});
        });
    }
    renderContent(){
        // All week , loop through 7 days

        let content     = null;
        const parent    = this;
        const moments = helper.getSevenMomentsFromDate(this.state.sunday);

        content = ()=>{
            return (
                <div className="all_days"> 
                    {

                        moments.map(function (item,index) {

                            return (<Day key={index} moment = {item} web={parent.props.web} dep = {parent.props.dep} loaded={parent.handleLoadedDayRow} />);
                        })
                    }
                </div>
            );
        }

        return content();
    }
    renderTitle(){
        let content = <span className="date_label">{this.state.sunday} - {this.state.saturday}</span>;
        return (content);
    }
    render(){
        if(this.state.isLoading){
            return(<div>Loading...</div>);
        }else{

            return(
                <div className="calendar_manage">
                    <div className="first">
                        <div className="left">
                            <h2 className="title">
                                <i className="settings icon"></i> Manage Scheduled Jobs
                            </h2>
                        </div>
                        <div className="right">
                            <span className="calendar_holder">
                                    <span className="ui input">
                                         <i className="calendar large icon"></i>
                                      <DatePicker
                                          selected={this.state.calendarDate}
                                          onChange={(date) => {
                                              this.handleChangeCalendarDate(date);
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
                            <table style={{border: "0px solid #000",dislay: "table",margin:"0 auto" }}>
                                <tbody>
                                <tr>
                                    <td>
                                        <span className="previous">
                                            <a className="click_prev" onClick={() => {
                                                this.handleChangeDirection('left');
                                            }}><i className="chevron circle left icon"></i></a>
                                        </span>
                                    </td>
                                    <td>
                                        {this.renderTitle()}
                                    </td>
                                    <td>
                                        <span className="next">
                                            <a className="click_next" onClick={() => {
                                                this.handleChangeDirection('right');
                                            }}><i className="chevron circle right icon"></i></a>
                                        </span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div className="fourth">
                        <div className="left">
                            {this.renderContent()}
                        </div>
                        <div className="right">
                            &nbsp;
                        </div>
                    </div>
                </div>
            );
        }
    }
}
function mapStateToProps(state,ownprops) {
    return ({
        settings: state.settings,
        calendar_page: state.calendar_page
    })
}
function mapDispatchToProps(dispatch){
    return({
        calendar_page_change_days: (settings, days)=>{
             dispatch(calendar_page_change_days(settings, days));
        }
    })
}
DaysView.propTypes = {
    web: PropTypes.object, // web is storage for user_log information
    dep: PropTypes.object, // information about departments
    redirectTo: PropTypes.func
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DaysView));
