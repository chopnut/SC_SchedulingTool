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
        let allJobs = this.props.calendar_jobs[this.props.dayKey][this.props.departmentId];

        if(this.state.isLoading){
            return(<div>Loading...</div>);
        }else{

            return(
            <div className="group">
                {Object.keys(allJobs).map((key,index)=>{
                    return(
                        <CalendarCell key={index} jd ={allJobs[key]} />
                    );
                }

                )}<br/>
            </div>);
        }
    }
}
function mapStateToProps(state,ownprops) {
    return ({
        calendar_jobs: state.calendar_page.calendar_jobs
    });
}
function mapDispatchToProps(dispatch){
    return({

    });
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarGroupCells);
