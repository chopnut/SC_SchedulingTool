import React, { Component } from 'react';
import util from "../../common/edlibrary";
import {connect} from 'react-redux';

// Calendar Date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class ManageJobs_SchedulePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            jobsDepartment: []
        }
    }
    componentDidMount(){
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
                                <span className="day">{"DAY"}</span><br/>
                                <span className="date">{"DATE HERE"}</span>
                            </div>
                        </div>
                        <div id="datepicker" className="datepicker"></div>
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
