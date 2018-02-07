import React, { Component } from 'react';
import {connect} from 'react-redux';
import  {calendar_page_move_dep_side_by_side} from '../../actions/CalendarActions';
import CalendarGroupCells from "./CalendarGroupCells";
import {withRouter } from 'react-router-dom';
import NavLink from "react-router-dom/es/NavLink";

class CalendarRow extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            job: {},
            currentDayKey:-1
        }
        this.startDrop       = this.startDrop.bind(this);
        this.handleDragging  = this.handleDragging.bind(this);
        this.handleDragEnter = this.handleDragEnter.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleDragOver  = this.handleDragOver.bind(this);
        this.handleDragEnd   = this.handleDragEnd.bind(this);

        this.handleViewDepartments = this.handleViewDepartments.bind(this);
    }
    handleViewDepartments(deptId){
        const { history } = this.props;
        history.push('/calendar/manage/departments/'+deptId);

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
    /*
    * You are not allowed to drop to a different department
    * */
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
    /*
    * When the user starts dragging, set the job bag being drag*/
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
    componentDidMount(){

        this.setState((prevState, props) => (   {
            isLoading: false
        }  ));
    }
    render(){
        const colspan = (this.props.isParent)?8:0;
        const rowClassName = this.props.isParent?"parent_dept":"child_dept head_link";
        const today   = this.props.calendar_page.today_date;

        let classProgramming = "";
        if(this.props.departmentId == this.props.programmingDeptId){
            classProgramming = "programming_main_row";
        }

        const dLink = ()=>{
            if(colspan==0){
                return (<NavLink to={"/calendar/manage/departments/"+this.props.departmentId}>{this.props.title}</NavLink>)
            }else{
                return this.props.title
            }
        }
        return(
            <tr className={classProgramming}>
                <td colSpan={colspan} className={rowClassName}>
                    <i className="cube icon"></i>
                    {
                        dLink()
                    }

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
                                departmentId={this.props.departmentId}
                                userId = {0}
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

function mapStateToProps(state,ownprops) {
    return ({
        calendar_page: state.calendar_page,
        calendar_jobs: state.calendar_page.calendar_jobs,
        programmingDeptId: state.settings.programmingUsers.deptId,
        settings: state.settings
    });
}
function mapDispatchToProps(dispatch){
    return({
        calendar_page_move_dep_side_by_side: (settings, info)=>{
            dispatch(calendar_page_move_dep_side_by_side(settings, info));
        }
    });
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CalendarRow));
