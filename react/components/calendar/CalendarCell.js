import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {calendar_page_move_dep_side_by_side} from '../../actions/CalendarActions';
import {Button, Header, Image, Modal, Icon} from 'semantic-ui-react';

// Custom component
import JobSummaryWindow from '../../layouts/calendar/JobSummaryWindow';
import util from '../../common/edlibrary';

class CalendarCell extends Component {
    constructor(props){
        super(props);
        this.state = {
            background_color: '#6BACDE',
            // Job Summary Window Options
            is_window_open: false
        }
        this.actionChangeSideToSide = this.actionChangeSideToSide.bind(this);
        this.hover_in_job_bag      = this.hover_in_job_bag.bind(this);
        this.hover_out_job_bag     = this.hover_out_job_bag.bind(this);

        // Window job summary functions below
        this.handleWindowClose      = this.handleWindowClose.bind(this);
        this.handleWindowOpen       = this.handleWindowOpen.bind(this);
        this.renderJobBagInfo       = this.renderJobBagInfo.bind(this);
        this.renderJobDepInfo       = this.renderJobDepInfo.bind(this);
        this.renderJobFooter        = this.renderJobFooter.bind(this);
    }
    handleWindowClose(){
        this.setState((prevState, props) => (
            {is_window_open: false}
        ));
    }
    handleWindowOpen(){
        this.setState((prevState, props) => (
            {is_window_open: true}
        ));
    }
    hover_in_job_bag(){
        this.setState((prevState, props) => (
            {background_color: this.props.colours_setting.hover_calendar_job}
        ));
        this.handleWindowOpen();
    }
    hover_out_job_bag(){
        if(this.state.is_window_open){
            this.setState((prevState, props) => (
                {background_color: 'red'}
            ));
            this.handleWindowClose();
        }
    }
    actionChangeSideToSide(jobId,day,toKey){
        let info = {
            jobId,
            day,
            toKey,
            deptId: this.props.jd.dep.job_dp_dept,
            dayKey: this.props.dayKey,
            userId: this.props.userId
        }
        console.log("Move to side: ",info);

        // Call the action creator to update state
        this.props.calendar_page_move_dep_side_by_side(this.props.settings, info);
    }
    shouldComponentUpdate(nextProps,nextState){

        if(nextState.background_color!=this.state.background_color)  return true;
        if(this.props.jd.dep.job_dp_id== nextProps.jd.dep.job_dp_id) return false;
        return true;
    }
    componentDidUpdate(prevProps, prevState){
        $(".chevron").popup();

    }
    componentDidMount(){}
    renderJobFooter(jd,bg,gp){
        return <table className="job_bag_footer">
            <thead>
                <tr>
                    <td>
                        FOOTER
                    </td>
                </tr>
            </thead>
        </table>
    }
    renderJobHeader(jd,bg,gp){
        return <table className="job_bag_header">
            <thead>
            <tr>
                <th className="job_prism_number">
                    <span className="label">JOB NUMBER </span><span className="value">{ (bg.job_prism_number || "0")}</span>
                </th>
                <th className="job_prism_job_id">PRISM ID {bg.job_prism_job_id}</th>
            </tr>
            <tr>
                <th className="job_title" colSpan={2}>{bg.job_title}</th>
            </tr>
            <tr>
                <th className="job_customer_name">{bg.job_customer_name}</th>
                <th className="job_departments">{jd.dept.job_dept_desc}</th>
            </tr>
            </thead>
        </table>
    }
    renderJobDepInfo(jd,bg,gp){
        return <table className="job_dep_info">
            <tbody>
            <tr>
                <th colSpan={4}>DEPARTMENT SUMMARY</th>
            </tr>
            <tr>
                <td>Scheduled Date</td>
                <td>{jd.job_dp_date}</td>
                <td>Created Date</td>
                <td>{jd.job_dp_created_date}</td>
            </tr>
            <tr>
                <td>Job Proof Date</td>
                <td>he</td>
                <td>Print Date</td>
                <td>he</td>
            </tr>
            <tr>
                <td>Department Status</td>
                <td>{jd.job_dp_status}</td>
                <td>Job Allocated to</td>
                <td>___</td>
            </tr>
            <tr>
                <td colSpan={4}>
                    <Button color='grey' size={"mini"}>
                        <Icon name='write' /> EDIT DEPARTMENT
                    </Button>
                </td>
            </tr>
            </tbody>
        </table>;
    }
    renderJobBagInfo(jd,bg,gp){
        let job_due_date    = bg.job_due_date;
        let job_lodge_date  = bg.job_lodge_date;
        let job_print_date  = bg.job_print_date;
        let job_type        = bg.job_type;
        let job_qty         = bg.job_qty;
        let job_status      = bg.job_status;

        return <table className="job_bag_info">
            <tbody>
            <tr>
                <th colSpan={4}>JOB SUMMARY</th>
            </tr>
            <tr>
                <td>Due</td>
                <td>{bg.job_due_date}</td>
                <td>Lodgement</td>
                <td>{bg.job_lodge_date || "Not set yet"}</td>
            </tr>
            <tr>
                <td>Print Date</td>
                <td>{bg.job_print_date}</td>
                <td>Job Type</td>
                <td>{bg.job_type}</td>
            </tr>
            <tr>
                <td>Job Qty</td>
                <td>{bg.job_qty}</td>
                <td>Job Status</td>
                <td>{bg.job_status}</td>
            </tr>
            <tr>
                <td colSpan={4}>
                    <Button color='grey' size={"mini"}>
                        <Icon name='write' /> EDIT JOB BAG
                    </Button>
                </td>
            </tr>
            </tbody>
        </table>;

    }
    render(){

        const jd = this.props.jd.dep;
        const bg = this.props.jd.bag;
        const gp = this.props.jd.grp;


        const leftArrowClass  = "chevron left icon";
        const rightArrowClass = "chevron right icon";

        // Cell class name on hover
        let class_cell = "cell";
        if(this.state.is_window_open){
            class_cell = class_cell+ " open";
        }

            return(
                <div className={class_cell}
                     draggable={true}
                     onDragStart={(e)=>{
                         // pass the job department to the handler from row
                         e.stopPropagation()
                         this.props.initDrag(e,this.props.jd,this.props.dayKey);
                     }}
                     onDragEnd    = {(e)=>{ this.props.initDragEnd(e) }}
                     onMouseEnter = {()=>{  this.hover_in_job_bag() }}
                     onMouseLeave = {()=>{  this.hover_out_job_bag()}}
                >
                    <div className="cell_head" style={{backgroundColor: this.state.background_color}}>
                        <table width="100%" cellPadding={0} cellSpacing={0}>
                            <tbody>
                            <tr>
                                <td className="cell_left">
                                    <i className={leftArrowClass} data-content="Move previous day" data-variation="tiny" onClick={()=>{
                                            this.actionChangeSideToSide(jd.job_dp_id, this.props.prevDate, this.props.prevDayKey );
                                        }
                                    }></i>
                                </td>
                                <td className="cell_middle">{bg.job_prism_number}</td>
                                <td className="cell_right">
                                    <i className={rightArrowClass} data-content="Move next day" data-variation="tiny" onClick={()=>{
                                        this.actionChangeSideToSide(jd.job_dp_id, this.props.nextDate, this.props.nextDayKey);
                                    }
                                    }></i>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="contain cell_child">
                        <Modal
                            trigger={<div className="cell_title">{bg.job_title}</div>}
                            dimmer={"blurring"}
                            size = {"tiny"}
                            className= {"window_job_card"}
                        >
                            <Modal.Header
                                className={"modal_header"}
                            >
                                {this.renderJobHeader(jd,bg,gp)}
                            </Modal.Header>
                            <Modal.Content className={"modal_body"}>
                                { this.renderJobBagInfo(jd,bg,gp) }
                                { this.renderJobDepInfo(jd,bg,gp) }
                            </Modal.Content>
                            <Modal.Actions>
                                { this.renderJobFooter(jd,bg,gp) }
                            </Modal.Actions>
                        </Modal>
                    </div>
                </div>
            );

    }
}
function mapStateToProps(state,ownprops) {
    return({
        settings: state.settings,
        colours_setting: JSON.parse(state.settings.setting.colours_setting)
    });
}
function mapDispatchToProps(dispatch){
    return({
        calendar_page_move_dep_side_by_side: (settings,info)=>{
            dispatch(calendar_page_move_dep_side_by_side(settings,info));
        }
    });
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarCell);
