import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

// Calendar Date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class DaysView extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            calendar_date: moment(),
            sunday,
            saturday
        }
        this.handleChangeCalendarDate = this.handleChangeCalendarDate.bind(this);
        this.handleChangeDates      = this.handleChangeDates.bind(this);
    }
    handleChangeDates(direction){

    }
    /*
    * Handle the date range when mini calendar has been selected
    * query the new calendar_date state;
    * */
    handleChangeCalendarDate(newDate){
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


    }
    componentDidMount(){
        console.log("DAYSVIEW", this.props);
        this.setState(function(state,props){
            return ({state,isLoading: false});
        });
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
                                          selected={this.state.calendar_date}
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
    web: PropTypes.object // web is storage for user_log information
}
export default connect(mapStateToProps,mapDispatchToProps)(DaysView);
