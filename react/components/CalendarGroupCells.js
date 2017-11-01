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

        const allJobs     = this.props.calendar_jobs[this.props.dayKey][this.props.departmentId];
        const currDayKey  = this.props.dayKey;

        let prevDayKey  = currDayKey-1;
        let nextDayKey  = currDayKey+1;

        if(prevDayKey<0){
            prevDayKey    = 0;
        }
        if(nextDayKey>6){
            nextDayKey    = 6;
        }
        // console.log("Days", prevDayKey,currDayKey,nextDayKey);

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
        days: state.calendar_page.days
    });
}
function mapDispatchToProps(dispatch){
    return({

    });
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarGroupCells);
