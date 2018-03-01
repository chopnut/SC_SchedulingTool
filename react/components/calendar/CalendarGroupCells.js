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
    componentWillReceiveProps(nextProps){
        if(this.state.use_jobs != nextProps.use_jobs){
            this.setState((prevState, props) => (
                {use_jobs: nextProps.use_jobs}
            ), ()=>{
            });
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextState.isLoading != this.state.isLoading ||
            nextProps.days!= this.props.days
        ){

            return false;
        }
        return false;
    }
    componentDidMount(){

        this.setState(function(state,props){
            return ({state,isLoading: false});
        });
    }
    render(){
        // Calendar uses key value pair , not an array
        // You have to loop through using keys

        const currDayKey        = this.props.dayKey;
        const userId            = this.props.userId;
        const departmentId      = this.props.departmentId;
        const view_date_jobs    = this.props.view_date_jobs;
        let   allJobs           = this.props.calendar_jobs[currDayKey][departmentId];

        // A.  CHECK FIRST IF THIS CALENDAR GROUP IS UNDER THE VIEW DATE OBJECT.
        if(view_date_jobs && this.props.isViewDate){
            if(departmentId in view_date_jobs.master){
                allJobs = view_date_jobs.master[departmentId];
            }
        }
        // B. IF THIS IS GROUP CELL IS A PROGRAMMERS ROW USE THE PROGRAMMERS JOBS
        //1 . Programmers group cell for when you are calendar view
        if(userId in this.props.programmers_jobs && !this.props.isViewDate){

            if(currDayKey in this.props.programmers_jobs[userId] ){
                allJobs             = this.props.programmers_jobs[userId][currDayKey];
            }else{
                // IF THE USER DONT HAVE ANY JOB FOR THAT DAY
                allJobs = [];
            }

        // 2. Programmers group cell for the view data
        }else if(this.props.isViewDate && this.props.isProgrammersRow && this.props.view_date_jobs){
            const programmers_jobs = this.props.view_date_jobs.programmers_jobs;
            if(userId in programmers_jobs){
                allJobs = programmers_jobs[userId];
            }else{
                allJobs = [];
            }
        }

        // 3. If there is no jobs for a particular programmer empty the box itself.

        else if(userId){
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

                    return(
                        <CalendarCell key={index}
                                      jd ={allJobs[key]}
                                      prevDate={prevDate}
                                      nextDate={nextDate}
                                      prevDayKey={prevDayKey}
                                      nextDayKey={nextDayKey}
                                      userId = {userId}
                                      origDate={currDate}
                                      {... this.props}
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
        view_date_jobs: state.calendar_page.view_date_jobs,
        days: state.calendar_page.days
    });
}
function mapDispatchToProps(dispatch){
    return({

    });
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarGroupCells);
