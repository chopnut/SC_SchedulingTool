import React, { Component } from 'react';
import {connect} from 'react-redux';
import {calendar_page_move_dep_side_by_side} from '../../../actions/CalendarActions';
import PropTypes from 'prop-types';
import {withRouter } from 'react-router-dom';
import CalendarGroupCells from "../CalendarGroupCells";

class ProgrammerRow extends Component {
    constructor(props){
        super(props);
        this.state = {
           isLoading: true
        }
        this.startDrop       = this.startDrop.bind(this);
        this.handleDragging  = this.handleDragging.bind(this);
        this.handleDragEnter = this.handleDragEnter.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleDragOver  = this.handleDragOver.bind(this);
        this.handleDragEnd   = this.handleDragEnd.bind(this);
    }
    componentDidMount(){
        this.setState(function(state,props){
            return ({state,isLoading: false});
        });
    }
    startDrop(e,droppedDate,toKey){
        const el        = $(e.target);
        const dayKey    = this.state.currentDayKey;
        const job = Object.assign({},this.state.job);

        el.removeClass("highlight_drag");

        this.setState((prevState, props) => ({
            job: {}, currentDayKey: -1
        }));
        console.log('dropped',droppedDate,dayKey, this.state.job);

        const info = {
            jobId: job.dep.job_dp_id,
            day: droppedDate,
            toKey : toKey,
            deptId: job.dep.job_dp_dept,
            dayKey: dayKey,
            userId: job.dep.job_dp_allocated_to
        }

        // Trigger the action creator side to side functionality with drag and drop
        this.props.calendar_page_move_dep_side_by_side(this.props.settings, info);
    }
    handleDragOver(e,departmentId){
        let dpIdfromBag = 0;
        try{
            dpIdfromBag = this.state.job.dep.job_dp_dept;
        }catch(e){
            return;
        }
        const el = $(e.target);
        if(e.target.id==undefined || !e.target.id){
            return;
        }
        if(departmentId==dpIdfromBag){
            el.addClass("highlight_drag");

        }
    }
    handleDragEnter(e,departmentId){
        let dpIdfromBag = 0;
        try{
            dpIdfromBag = this.state.job.dep.job_dp_dept;
        }catch(e){
            return;
        }
        const el = $(e.target);
        if(e.target.id==undefined || !e.target.id){
            return;
        }
        if(departmentId==dpIdfromBag){
            el.toggleClass("highlight_drag");
        }
    }
    handleDragLeave(e,departmentId){
        let dpIdfromBag = 0;
        try{
            dpIdfromBag = this.state.job.dep.job_dp_dept;
        }catch(e){
            return;
        }
        const el = $(e.target);
        if(e.target.id==undefined || !e.target.id){
            return;
        }
        if(departmentId==dpIdfromBag){
            el.toggleClass("highlight_drag");
            // console.log('Department: ',departmentId,dpIdfromBag,this.state.job.dep);
        }
    }
    handleDragging(e,job,currentDayKey){
        $(e.target).removeClass("highlight_drag");
        this.setState((prevState, props) => ({
            job
        }));
        this.setState((prevState, props) => ({
            currentDayKey
        }));

    }
    handleDragEnd(e){
        $(e.target).removeClass("highlight_drag");
        this.setState((prevState, props) => ({
            job :{}
        }));

    }
    render(){
        const colspan       = (this.props.isParent)?this.props.calendar_page.days.length+1:0;
        const today         = this.props.calendar_page.today_date;


        if(this.state.isLoading){
            return(
                <tr>
                    <td>Loading...</td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                    <td ></td>
                </tr>);
        }else{

            return(
            <tr className={"programmer_row"}>
                <td >
                    {this.props.user.first_name} ({ this.props.user.login_id})
                </td>{this.props.calendar_page.days.map((item,i)=>{
                const thisCellDate = item.date;
                let tdClassName  = "tdCell";

                if(thisCellDate == today){
                    tdClassName = tdClassName+" today ";
                }
                if(colspan==8){
                    return;
                }
                return (
                    <td key={i}
                        id={this.props.departmentId}
                        className={tdClassName}
                        onDrop={(e)=>{
                            // On drop is the target element to call
                            e.preventDefault();
                            this.startDrop(e,item,i);
                        }}
                        onDragOver={(e)=>{
                            e.preventDefault();
                            // this.handleDragEnter(e,this.props.departmentId);
                        }}
                        onDragEnter={(e)=>{
                            e.preventDefault();
                            this.handleDragEnter(e,this.props.departmentId);
                        }}
                        onDragLeave={(e)=>{
                            e.preventDefault();
                            this.handleDragLeave(e,this.props.departmentId);
                        }}
                    >
                        <CalendarGroupCells
                            dayKey={i}
                            isViewDate = {this.props.isViewDate}
                            isProgrammersRow = {true}
                            departmentId={this.props.departmentId}
                            userId = {this.props.user.login_id}
                            initDrag={this.handleDragging}
                            initDragEnd = {this.handleDragEnd}
                            onDrop="return false"
                        />
                    </td>
                );
            })
            }</tr>);
        }
    }
}
function mapStateToProps(state,ownprops) {
    return ({
        calendar_page: state.calendar_page,
        calendar_jobs: state.calendar_page.calendar_jobs,
        settings: state.settings
    })
}
function mapDispatchToProps(dispatch){
    return({
        calendar_page_move_dep_side_by_side: (settings, info)=>{
            dispatch(calendar_page_move_dep_side_by_side(settings, info));
        }
    })
}
ProgrammerRow.propType = {
    jobs: PropTypes.array.isRequired
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProgrammerRow));
