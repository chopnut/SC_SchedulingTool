import React, { Component } from 'react';
import {connect} from 'react-redux';
import CalendarCell from './CalendarCell';

class CalendarGroupCells extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
        this.getAllJobs = this.getAllJobs.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(this.state.use_jobs != nextProps.use_jobs){
            this.setState((prevState, props) => (
                {use_jobs: nextProps.use_jobs}
            ), ()=>{
            });
        }
    }
    // Getting all jobs from this particular group of cells
    getAllJobs(fromShouldComponentUpdate,nextProps,nextState){
        const currDayKey        = this.props.dayKey;
        const userId            = this.props.userId;
        const departmentId      = this.props.departmentId;
        const view_date_jobs    = this.props.view_date_jobs;
        let jobs =[];

        // Invoked from should component update
        if(fromShouldComponentUpdate){
            // --- FOR NON-PROGRAMMER-ROW -----
            if(!this.props.isProgrammersRow){
                // Viewing Date
                if(nextProps.isViewDate){

                    if(departmentId in view_date_jobs.master){
                        jobs = nextProps.master[departmentId];
                    }

                }else{
                    // Viewing Calendar
                     jobs = nextProps.calendar_jobs[currDayKey][departmentId];

                }
            }else{
                // --- FOR PROGRAMMER-ROW -------
                const programmers_jobs = [];
                // Viewing Date
                if(nextProps.isViewDate){
                    const programmers_jobs = nextProps.props.view_date_jobs.programmers_jobs;
                    if(userId in programmers_jobs){
                        jobs = programmers_jobs[userId];
                    }
                }else{
                    // Viewing Calendar
                    const programmers_jobs = nextProps.programmers_jobs;
                    if(userId in programmers_jobs){
                        if(currDayKey in programmers_jobs[userId] ){
                            jobs = programmers_jobs[userId][currDayKey];
                        }
                    }
                }
            }
        }else{
        // Invoked from just getting the jobs
            jobs           = this.props.calendar_jobs[currDayKey][departmentId];

            // A.  CHECK FIRST IF THIS CALENDAR GROUP IS UNDER THE VIEW DATE PAGE.
            if(view_date_jobs && this.props.isViewDate){
                if(departmentId in view_date_jobs.master){
                    jobs = view_date_jobs.master[departmentId];
                }
            }
            // B. IF THIS IS GROUP CELL IS A PROGRAMMERS ROW USE THE PROGRAMMERS JOBS
            //1 . Programmers group cell for when you are calendar view
            if(userId in this.props.programmers_jobs && !this.props.isViewDate){

                if(currDayKey in this.props.programmers_jobs[userId] ){
                    jobs             = this.props.programmers_jobs[userId][currDayKey];
                }else{
                    // IF THE USER DONT HAVE ANY JOB FOR THAT DAY
                    jobs = [];
                }

                // 2. Programmers group cell for the view date
            }else if(this.props.isProgrammersRow && this.props.view_date_jobs && this.props.isViewDate){
                const programmers_jobs = this.props.view_date_jobs.programmers_jobs;
                if(userId in programmers_jobs){
                    jobs = programmers_jobs[userId];
                }else{
                    jobs = [];
                }
            }

            // 3. If there is no jobs for a particular programmer empty the box itself.

            else if(userId){
                // IF THIS IS A PROGRAMMERS CELL AND THERE IS NO PROGRAMMERS JOBS FOR JUST EMPTY THE JOBS.
                jobs = [];


            }
        }
        return jobs;
    }
    // Optimizing speed, only update when needed
    shouldComponentUpdate(nextProps, nextState){

        const next_jobs = this.getAllJobs(true,nextProps,nextState);
        const old_jobs  = this.getAllJobs(false);

        const n = Object.keys(next_jobs).length;
        const o = Object.keys(old_jobs).length;


        // If there is no jobs for a group cell, dont update
        if(o == n){
            console.log("CONSOLE!", next_jobs,old_jobs);
            return false;
        }

        return true;
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

        const allJobs = this.getAllJobs(false);


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


        // if(this.state.isLoading){
        //     return(<div>Loading...</div>);
        // }else{

            return(
            <div className="group">
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
        // }
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
