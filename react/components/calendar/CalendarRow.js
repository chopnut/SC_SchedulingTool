import React, { Component } from 'react';
import {connect} from 'react-redux';
import {calendar_page_move_dep_side_by_side} from '../../actions/CalendarActions';
import CalendarGroupCells from "./CalendarGroupCells";
import {withRouter } from 'react-router-dom';
import NavLink from "react-router-dom/es/NavLink";
import util from "../../common/edlibrary";

class CalendarRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            job: {},
            currentDayKey:-1
        }
        this.startDrop              = this.startDrop.bind(this);
        this.handleDragging         = this.handleDragging.bind(this);
        this.handleDragEnter        = this.handleDragEnter.bind(this);
        this.handleDragLeave        = this.handleDragLeave.bind(this);
        this.handleDragOver         = this.handleDragOver.bind(this);
        this.handleDragEnd          = this.handleDragEnd.bind(this);
        this.handleViewDepartments  = this.handleViewDepartments.bind(this);

        this.getJobs                = this.getJobs.bind(this);
    }

    // Getting all jobs from current space
    getJobs(day_key){
        const departmentId      = this.props.departmentId;
        let jobs ={};

        if(this.props.isViewDate){
            const view_date_jobs = this.props.calendar_page.view_date_jobs;
            jobs = view_date_jobs.master[departmentId];
        }else{
            jobs = this.props.calendar_jobs[day_key][departmentId];

            // const keysLength = Object.keys(jobs).length;
            //
            // if(keysLength>0){
            //     console.log("GROUPCELLS:", day_key, Object.keys(jobs).length, this.props.calendar_jobs[day_key]);
            // }

        }
        if(util.isArray(jobs)){
            if(jobs.length<=0){
                jobs = {};
            }
        }

        return jobs;
    }
    startDrop(e,droppedDate,toKey){
        const el        = $(e.target);
        const dayKey    = this.state.currentDayKey;
        const job       = Object.assign({},this.state.job);

        el.removeClass("highlight_drag");

        this.setState((prevState, props) => ({
            job: {}, currentDayKey: -1
        }));
        console.log('dropped',droppedDate,dayKey, this.state.job);

        let info = {
            day: droppedDate,
            toKey : toKey,
            dayKey: dayKey,
            jobId: job.dep.job_dp_id,
            deptId: job.dep.job_dp_dept,
            userId: job.dep.job_dp_allocated_to
        }

        // Trigger the action creator side to side functionality with drag and drop
        this.props.calendar_page_move_dep_side_by_side(this.props.settings, info);
    }
    handleViewDepartments(deptId){
        const { history } = this.props;
        history.push('/calendar/manage/departments/'+deptId);
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
        this.setState((prevState, props) => (
            {job,currentDayKey}
            )
        )
    }
    handleDragEnd(e, userId){
        $(e.target).removeClass("highlight_drag");
        this.setState((prevState, props) => ({
            job :{}
        }));

    }

    // For optimizing speed
    shouldComponentUpdate(nextProps,nextState){
        // Let it change state when changing the component date.
        return true;
    }
    componentDidUpdate(){
        // initiate border only drag
        let cells = document.getElementsByClassName('cell_child');

        for (let i = 0 ; i < cells.length; i++) {

            cells[i].addEventListener('mousedown', function() {
                this.parentNode.setAttribute("draggable", false);

            });
            cells[i].addEventListener('mouseup', function() {
                this.parentNode.setAttribute("draggable", true);
            });
        }
    }
    componentDidMount(){
        this.setState((prevState, props) => (   {
            isLoading: false
        }  ));

    }
    render(){
        const daysLength    = this.props.calendar_page.days.length+1;
        const colspan       = (this.props.isParent)?daysLength:0;
        const rowClassName  = this.props.isParent?"parent_dept":"child_dept head_link";
        const today         = this.props.calendar_page.today_date;

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

                    if(thisCellDate == today){  tdClassName = tdClassName+" today ";  }
                    if(colspan==daysLength){ return; }


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
                                dayKey          = {i}
                                userId          = {0}
                                isProgrammersRow= {false}
                                isViewDate      = {this.props.isViewDate}
                                departmentId    = {this.props.departmentId}
                                initDrag        = {this.handleDragging}
                                initDragEnd     = {this.handleDragEnd}
                                jobs            = {this.getJobs(i)}
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
