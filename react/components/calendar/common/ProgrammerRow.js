import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

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

        console.log("Programmers jobs: ", this.props.jobs);
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

        let info = {
            jobId: job.dep.job_dp_id,
            day: droppedDate,
            toKey : toKey,
            deptId: job.dep.job_dp_dept,
            dayKey: dayKey
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
            // console.log('Department: ',departmentId,dpIdfromBag,this.state.job.dep);

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
        const colspan       = (this.props.isParent)?8:0;
        const rowClassName  = this.props.isParent?"parent_dept":"child_dept head_link";
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
                <td >{this.props.user.first_name} ({ this.props.user.login_id})</td>
                <td ></td>
                <td ></td>
                <td ></td>
                <td ></td>
                <td ></td>
                <td ></td>
                <td ></td>
            </tr>);
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

    })
}
ProgrammerRow.propType = {
    jobs: PropTypes.array.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(ProgrammerRow);
