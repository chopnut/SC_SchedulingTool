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
    // ComponentWillReceiveProps will trigger the change
    componentWillReceiveProps(nextProps){
        const currDayKey        = nextProps.dayKey;
        const departmentId      = nextProps.departmentId;


        let next_jobs   = nextProps.calendar_jobs[currDayKey];
        let old_jobs    = this.props.calendar_jobs[currDayKey];

        const njob = next_jobs[departmentId];
        const ojob =  old_jobs[departmentId];


        const new_length = Object.keys(njob).length;
        const old_length = Object.keys(ojob).length;

        if(new_length!=old_length){

            this.setState((prevState,props)=>{
                return({ jobs: next_jobs });
            });
        }




    }

    componentDidUpdate(){}
    componentWillUpdate(nextProps, nextState){}

    // Optimizing speed, only update when needed

    shouldComponentUpdate(nextProps, nextState){

        const next_jobs = nextProps.jobs;
        const old_jobs  = this.props.jobs;

        const n = Object.keys(next_jobs).length;
        const o = Object.keys(old_jobs).length;

        if(n!==o){
            return true
        }

        if(nextState.isLoading != this.state.isLoading){
            return true;
        }


        return false;
    }
    componentDidMount(){
        this.setState((prevState, props) => (
            {isLoading: false}
        ));
    }
    render(){
        // Calendar uses key value pair , not an array
        // You have to loop through using keys
        const currDayKey        = this.props.dayKey;
        const userId            = this.props.userId;

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
            <div className="group">
                {Object.keys(this.props.jobs).map((key,index)=>{

                       
                    return(
                        <CalendarCell key={index}
                                      jd ={this.props.jobs[key]}
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
