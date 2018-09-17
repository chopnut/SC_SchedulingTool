import React, { Component } from 'react';
import {connect} from 'react-redux';

// Calendar Date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class ManageJobs_SchedulePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            jobsDepartment: [],
            selectedDate: moment()
        }
        this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
    }
    componentDidMount(){
    }
    handleDatePickerChange(date){
        this.setState((prevState, props) => (
            {selectedDate: date }
        ));
    }
    render(){
        return(
            <div className="jobs">
                <div className="main_container">
                    <div className="left">
                        <div className="header">

                            <div className="top">
                                Schedule for
                            </div>
                            <div className="bottom">
                                <span className="day">{this.state.selectedDate.format("dddd")}</span><br/>
                                <span className="date">{this.state.selectedDate.format("DD/MM/YYYY")}</span>
                            </div>
                        </div>
                        <div id="datepicker" className="datepicker">
                            <DatePicker
                                inline
                                selected={this.state.selectedDate}
                                onChange={(newDate)=>{
                                    this.handleDatePickerChange(newDate);
                                }}
                                todayButton={"Today"}
                            />
                        </div>
                    </div>
                    <div className="right">
                        <div className="header schedules">
                            <div className="content">
                                <div className="left">
                                    <i className="checked calendar icon"></i> Daily Schedule
                                </div>
                                <div className="right">
                                    some here

                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="info">
                                Information here
                            </div>
                            <div className="content">
                                No Content Yet
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state,ownprops) {
    return{
        store: state
    }
}
export default connect(mapStateToProps,null)(ManageJobs_SchedulePage);
