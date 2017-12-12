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
import DayRow from '../../../components/calendar/manage/days_view/Day';
import DeparmentRow from '../../../components/calendar/manage/day_view/Department';

class DaysView extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            departmentJobs: [],
            paramsDate: null,

            calendarDate: moment(),
            sunday: props.calendar_page.days[0].date,
            saturday: props.calendar_page.days[6].date
        }

        this.handleChangeCalendarDate = this.handleChangeCalendarDate.bind(this);
        this.handleChangeDirection    = this.handleChangeDirection.bind(this);
    }
    handleChangeDirection(direction){
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
        this.setState((prevState,props)=>{
            return({sunday: nextSunday, saturday:nextSaturday});
        });
    }
    handleChangeCalendarDate(newDate){
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
                });
        });
    }
    componentWillReceiveProps(nextProps){    }
    componentDidMount(){
        console.log("Daysview",this.props);

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
        let content     = null;
        const parent    = this;
        if(this.state.paramsDate){

            // Get department rows
            let departments = [];
            const k = (item,temp)=>{
                if(item.kids.length>0){
                    temp.push(<DeparmentRow key={item.id} hasKid={true} item={item}/>);
                    item.kids.map((item2,index2)=>{
                            temp.push(<DeparmentRow key={item2.id} hasKid={false} item={item2}/>);
                    });
                }else{
                    temp.push(<DeparmentRow key={item.id} hasKid={false} item={item}/>);
                }
            }
            this.props.dep.departmentsOrder.map(function (item, index) {
                k(item,departments);
            })
            // Individual date, loop through departments

            content = ()=>{
                return (
                    <div className="all_days_date">
                        {
                            departments
                        }
                    </div>
                );
            }
        }else {
            // All week , loop through 7 days

            const moments = helper.getSevenMomentsFromDate(this.state.sunday);
            const parent = this;

            content = ()=>{
                return (
                    <div className="all_days">
                        {
                            moments.map(function (item,index) {

                                return (<DayRow key={index} moment = {item} web={parent.props.web} dep = {parent.props.dep} />);
                            })
                        }
                    </div>
                );
            }

        }
        return content();
    }
    renderTitle(){
        let content = <span className="date_label">{this.state.sunday} - {this.state.saturday}</span>;
        if(this.state.paramsDate) {
            content = <span className="labels">
                        <span className="day_label">{this.state.paramsDate.format('dddd')}</span><br/>
                        <span className="date_label">{this.state.paramsDate.format('DD/MM/YYYY')}</span>
                      </span>;
        }
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
        calendar_page: state.calendar_page
    })
}
function mapDispatchToProps(dispatch){
    return({})
}
DaysView.propTypes = {
    web: PropTypes.object, // web is storage for user_log information
    dep: PropTypes.object, // information about departments
    redirectTo: PropTypes.func
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DaysView));
