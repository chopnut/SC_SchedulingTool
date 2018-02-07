import React, { Component } from 'react';
import {connect} from 'react-redux';
import CalendarCell from './CalendarCell';

class CalendarGroupCells extends Component {
    constructor(props){
        super(props);
        this.state = {
           isLoading: true
        }
    }
    componentDidMount(){
        this.setState(function(state,props){
            return ({state,isLoading: false});
        });
    }
    render(){
        // Calendar uses key value pair , not an array
        // You have to loop through using keys
        const   currDayKey  = this.props.dayKey;
        const userId        = this.props.userId;

        let     allJobs     = this.props.calendar_jobs[currDayKey][this.props.departmentId];

        // IF THIS IS GROUP CELL IS A PROGRAMMERS ROW USE THE PROGRAMMERS JOBS
        if(userId in this.props.programmers_jobs){
            if(currDayKey in this.props.programmers_jobs[userId] ){
                allJobs     = this.props.programmers_jobs[userId][currDayKey];

            }else{
                // IF THE USER DONT HAVE ANY JOB FOR THAT DAY
                allJobs = [];

            }
        }else if(userId){
            // IF THIS IS A PROGRAMMERS CELL AND THERE IS NO PROGRAMMERS JOBS FOR JUST EMPTY THE JOBS.
            allJobs = [];
        }

        let prevDayKey  = currDayKey-1;
        let nextDayKey  = currDayKey+1;

        if(prevDayKey<0){
            prevDayKey    = 0;
        }
        if(nextDayKey>6){
            nextDayKey    = 6;
        }

        const prevDate = this.props.days[prevDayKey];
        const nextDate = this.props.days[nextDayKey];
        const currDate = this.props.days[currDayKey];


        if(this.state.isLoading){
            return(<div>Loading...</div>);
        }else{

            return(
            <div className="group"
            >
                {Object.keys(allJobs).map((key,index)=>{

                    console.log("Cell index: " , key);

                    return(
                        <CalendarCell key={index}
                                      jd ={allJobs[key]}
                                      prevDate={prevDate}
                                      nextDate={nextDate}
                                      prevDayKey={prevDayKey}
                                      nextDayKey={nextDayKey}
                                      origDate={currDate}
                                      dayKey={this.props.dayKey}
                                      initDrag={this.props.initDrag}
                                      initDragEnd = {this.props.initDragEnd}
                        />
                    );
                }

                )}<br/>
            </div>);
        }
    }
}
function mapStateToProps(state,ownprops) {
    return ({
        calendar_jobs: state.calendar_page.calendar_jobs,
        programmers_jobs: state.calendar_page.programmers_jobs,
        days: state.calendar_page.days
    });
}
function mapDispatchToProps(dispatch){
    return({

    });
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarGroupCells);
