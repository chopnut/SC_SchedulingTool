import React, { Component } from 'react';
import {connect} from 'react-redux';
import CalendarCell from './CalendarCell';

class CalendarGroupCells extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentWillUpdate(nextProps, nextState){}
    componentWillReceiveProps(nextProps){

    }

    // Optimizing speed, only update when needed

    shouldComponentUpdate(nextProps, nextState){
        const new_length = Object.keys(nextProps.jobs).length;
        const old_length = Object.keys(this.props.jobs).length;

        if(new_length==old_length){

            return true;
        }
        return true;
    }
    componentDidUpdate(){

    }
    componentDidMount(){
    }
    render(){
        // Calendar uses key value pair , not an array
        // You have to loop through using keys
        const currDayKey        = this.props.dayKey;

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



        return(
        <div className="group">
            {Object.keys(this.props.jobs).map((key,index)=>{
                   return(
                    <CalendarCell key={key}
                                  jd ={this.props.jobs[key]}
                                  prevDate={prevDate}
                                  nextDate={nextDate}
                                  prevDayKey={prevDayKey}
                                  nextDayKey={nextDayKey}
                                  userId = {this.props.userId}
                                  origDate={currDate}
                                  {... this.props}
                    />
                );
            }

            )}<br/>
        </div>);

    }
}
function mapStateToProps(state,ownprops) {
    return ({
        days: state.calendar_page.days
    });
}
function mapDispatchToProps(dispatch){
    return({

    });
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarGroupCells);
