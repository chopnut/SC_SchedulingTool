import React, { Component } from 'react';
import {connect} from 'react-redux';
import {calendar_page_move_dep_side_by_side} from '../../actions/CalendarActions';
import {Button, Modal, Icon, Popup} from 'semantic-ui-react';
import {withRouter } from 'react-router-dom';


// Custom component
import JobSummaryWindow from '../../layouts/calendar/JobSummaryWindow';
import util from '../../common/edlibrary';

class CalendarCell extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            background_color: null,
            background_color_default: null,

            // Job Summary Window Options

            is_window_open: false,
            is_working: false,
            is_editing: true
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
        this.handleEditJobBag       = this.handleEditJobBag.bind(this);
        this.handleEditJobDepartment= this.handleEditJobDepartment.bind(this);
    }
    handleEditJobBag(){
        const { history } = this.props;
        history.push('/managejobs/newedit/'+this.props.jd.bag.job_id+'/'+ this.props.jd.dep.job_dp_id);
    }
    handleEditJobDepartment(){
        const { history } = this.props;
        history.push('/managejobs/editdep/'+ this.props.jd.dep.job_dp_id);
    }
    handleAddJobDepartment(){

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
        const ind = util.getArrayValueIndex(this.props.colours_setting, "key","hover_calendar_job");
        this.setState((prevState, props) => (
            {background_color: this.props.colours_setting[ind].color}
        ));
    }
    hover_out_job_bag(){
        // if(this.state.is_window_open){
            this.setState((prevState, props) => (
                {background_color: prevState.background_color_default}
            ));
        // }
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
        if(nextState.is_window_open!=this.state.is_window_open)      return true;
        if(this.props.jd.dep.job_dp_id== nextProps.jd.dep.job_dp_id) return false;
        return true;
    }
    componentDidUpdate(prevProps, prevState){
        $(".chevron").popup();

    }
    componentDidMount(){
        
        // Get the production status colour scheme as the main background colour in the calendar
        const dep       = this.props.jd.dep;
        const depStatus = dep.job_dp_status;
        const ind       = util.getArrayValueIndex(this.props.job_prod_status, "text",depStatus);
        const defBG     = this.props.job_prod_status[ind].color;

        this.setState((prevState, props) => (
            {
                background_color: defBG,
                background_color_default: defBG
            }
        ));
    }
    renderJobFooter(jd,bg,gp){
        return <table className="job_bag_footer">
            <thead>
                <tr>
                    <td style={{textAlign: "left"}}>
                        <Button color="red" size="mini" onClick ={()=>{
                            let conf = confirm("This will remove all once off job and departments. If this is a recurring job, it will only delete all departments but not the job bag itself. Are you sure you want to continue?");
                        }
                        }>
                            <i className="delete icon"></i>Delete
                        </Button>
                    </td>
                    <td>
                        <Button color="blue" size="mini" onClick ={this.handleWindowClose}>
                            <i className="close icon"></i>Close
                        </Button>
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
                <th className="job_departments">
                    { (jd.job_dp_dept == this.props.global_department_id && 'programmer' in jd && jd.programmer!=null)?"Programmer: "+ jd.programmer.first_name:jd.dept.job_dept_desc }
                </th>
            </tr>
            </thead>
        </table>
    }
    renderJobDepInfo(jd,bg,gp){
        return <table className="job_dep_info">
            <tbody>
            <tr>
                <th colSpan={2}>DEPARTMENT SUMMARY</th>
                <th colSpan={2} className="buttons">
                    <Button basic size="tiny" className="edit_button" onClick={this.handleEditJobDepartment}>
                        <Icon name='write' /> 
                    </Button>
                    <Popup 
                        trigger={<Button basic size="tiny" className="edit_button"><Icon name='plus' /></Button>}
                        content={<div style={{zIndex: 990 }}>HELLOassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</div>}
                        on='click' 
                        position='top center'
                    />
                    
                    
                </th>
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
                <th colSpan={2}>JOB SUMMARY</th>
                <th colSpan={2} className="buttons">
                    <Button basic size="tiny" className="edit_button" onClick={this.handleEditJobBag}>
                        <Icon name='write' />
                    </Button>
                </th>
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
                            trigger={<div className="cell_title" onClick={this.handleWindowOpen}>{bg.job_title}</div>}
                            dimmer={"blurring"}
                            size = {"tiny"}
                            className= {"window_job_card"}
                            open = {this.state.is_window_open}
                            onClose = {this.handleWindowClose}
                            style = {{
                                marginTop: '150',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }}
                        >
                            <Modal.Header
                                className={"modal_header"}
                                style={{backgroundColor: bg.job_colour}}
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
        colours_setting: JSON.parse(state.settings.setting.colours_setting),
        job_prod_status: JSON.parse(state.settings.setting.job_prod_status),
        global_department_id: state.settings.setting.programming_dept_id
    });
}
function mapDispatchToProps(dispatch){
    return({
        calendar_page_move_dep_side_by_side: (settings,info)=>{
            dispatch(calendar_page_move_dep_side_by_side(settings,info));
        }
    });
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CalendarCell));
