import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import moment from 'moment';
import DatePicker from 'react-datepicker';
import {getLoader} from '../../common/CommonUI';

class ViewDate extends Component {
    constructor(props){

        super(props);
        this.state = {
            isLoading: true,
            calendar_date: moment()
        }

        this.handleCalendarFunction = this.handleCalendarFunction.bind(this);
        this.renderHeader1          = this.renderHeader1.bind(this);
        this.renderHeader2          = this.renderHeader2.bind(this);
    }
    componentDidMount(){
        const currentDate = moment(this.props.match.params[0], "DD-MM-YYYY");
        this.setState(function(state,props){
            return ({
                isLoading: false,
                calendar_date: currentDate}
            );
        });
        console.log("Initial state: ", this.props);
    }
    handleCalendarFunction(date){
        this.setState(function(state,props){
            return ({calendar_date: date});
        });
    }
    handleChangeDates(num){

    }
    renderContent(){
        return(
            <div className="content">
                <table className="ui fixed single purple unstackable celled table">
                    <thead>
                    <tr>
                        <th>Departments</th>
                        <th>Data</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    renderHeader1(){
        return(
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

        );
    }
    renderHeader2(){
        return(
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
                    <div className="day_label">
                        {this.state.calendar_date.format("dddd")}
                    </div>
                            <span className="previous">
                                <a className="click_prev" onClick={() => {
                                    this.handleChangeDates(-1);
                                }}><i className="chevron circle left icon"></i></a>
                            </span>
                    <span className="range_date">
                        {this.state.calendar_date.format("DD/MM/YYYY")}
                    </span>
                    <span className="next">
                                <a className="click_next" onClick={() => {
                                    this.handleChangeDates(1);
                                }}><i className="chevron circle right icon"></i></a>
                    </span>
                </div>
            </div>

        );
    }
    render(){

        if(this.state.isLoading){
            return(
                <div className="calendar_view_date">
                    {this.renderHeader1()}
                    {this.renderHeader2()}
                    {getLoader()}
                </div>
            );
        }else{

            return(
            <div className="calendar_view_date">
                {this.renderHeader1()}
                {this.renderHeader2()}
                {this.renderContent()}
            </div>);
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

    })
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ViewDate));
