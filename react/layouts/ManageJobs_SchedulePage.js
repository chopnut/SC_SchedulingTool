import React, { Component } from 'react';
import util from "../common/edlibrary";
import {connect} from 'react-redux';

class ManageJobs_SchedulePage extends Component {
    constructor(props){
        super(props);

        const date = util.getDate();
        const year = util.getFullYear();
        const month  = util.getMonth();
        const day  = util.getWordDate();

        let selectedDate = {date,year,month,day};

        this.state = {
            selectedDate,
            jobsDepartment: []
        }
    }
    componentDidMount(){
        $("#datepicker").datepicker();
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
                                <span className="day">{this.state.selectedDate.day}</span><br/>
                                <span className="date">{this.state.selectedDate.date+"/"+this.state.selectedDate.month+"/"+this.state.selectedDate.year}</span>
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
