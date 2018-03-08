import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {calendar_page_move_dep_side_by_side} from '../../actions/CalendarActions';
import {Button, Header, Image, Modal } from 'semantic-ui-react';

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
        this.handleWindowClose = this.handleWindowClose.bind(this);
        this.handleWindowOpen  = this.handleWindowOpen.bind(this);
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
    renderJobBagInfo(jd,bg,gp){
        if(bg.job_type){

        }
        return
        (<tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>);
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
                                <table className="job_bag_header">
                                    <thead>
                                        <tr>
                                            <th className="job_prism_number">
                                                <span className="label">Job Number: </span><span className="value">{ (bg.job_prism_number || "0")}</span>
                                            </th>
                                            <th className="job_prism_job_id">{bg.job_prism_job_id}</th>
                                        </tr>
                                        <tr>
                                            <th className="job_title" colSpan={2}>{bg.job_title}</th>
                                        </tr>{
                                            (
                                                bg.job_customer_name!=""?
                                                <tr>
                                                    <th className="job_customer_name" colSpan={2}>{bg.job_customer_name}</th>
                                                </tr>: ""
                                            )
                                        }
                                    </thead>
                                </table>
                            </Modal.Header>
                            <Modal.Content
                                className={"modal_body"}>
                                <table className="job_bag_info">
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="job_dep_info">
                                    <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Modal.Content>
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
