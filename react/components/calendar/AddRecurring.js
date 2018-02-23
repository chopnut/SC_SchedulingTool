import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Popup} from 'semantic-ui-react';
import AddRecurringWindow from '../../layouts/calendar/AddRecurringWindow';
import {calendar_page_add_recurring_to_date} from '../../actions/CalendarActions';


class CalendarAddRecurring extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            isAdding: false,
            isOpen: false,
            jobsRecurring: [],
            jobsSelected: [],
            buttonLabel: "Add",
            className: "ui small button"
        }
        this.getJobs            = this.getJobs.bind(this);
        this.handleOpen         = this.handleOpen.bind(this);
        this.handleClose        = this.handleClose.bind(this);
        this.handleChangeJobs   = this.handleChangeJobs.bind(this);
        this.handleAdd          = this.handleAdd.bind(this);
    }
    /*
     Get jobs not currently in the calendar yet. And refresh everything once everything is added.
     */
    getJobs(){
        // Grab recurring jobs not yet scheduled.
        const req  = this.props.settings.setting.react_api_folder+'calendar_actions/calendar_page_recurring.php?date='+ this.props.day.date;

        axios.get(req).then(function(res){
            const ds = res.data;
            this.setState(function(state,props){
                const buttonLabel = (ds.jobs.length<=0)?"No daily jobs to schedule":"Add";

                return ({...state, isLoading: false, jobsRecurring: ds.jobs, buttonLabel});
            });
        }.bind(this))
    }
    componentWillReceiveProps(nextprops){


        // When finished adding
        if(nextprops.calendar_page_add_recurring_to_date){
            console.log("Recurring will receive props triggered.");
            this.getJobs();

            this.setState((prevState, props) => (
                {isAdding: false, className: "ui small button"}
            ));
        }
    }
    componentDidMount(){
        this.getJobs();
    }
    handleAdd(){
        if(this.state.isAdding== false){
            if(this.state.jobsSelected.length<=0){
                alert("Select atleast one job");
            }else{
                this.props.calendar_page_add_recurring_to_date(this.props.settings,this.state.jobsSelected,this.props.day.date);
                this.setState((prevState,props)=>{
                    return({isAdding:true, className: "ui small loading button",jobsSelected: [] });
                });
            }
        }
    }
    handleOpen(e){ this.setState({ isOpen: true }) }
    handleClose(e, data){
        // Do not close it if the target tagname is coming from I tag
        // I tag is from the dropdown box
        let tagName = false;
        try{
            tagName = e.target.tagName.toLowerCase();
        }catch(x){
            this.setState({ isOpen: false });
            return;
        }

        // if(tagName=='i'){
        //     this.setState({ isOpen: true });
        //     return;
        // }
        this.setState({ isOpen: false });

    }
    handleChangeJobs(e,{value}){
        console.log("Jobs Selected: ", this.state);
        this.setState((prevState, props) => (
            {jobsSelected: value}
        ));

    }
    render(){
        if(this.state.isLoading){
            return(<span className="head_link"><i className="add circle icon"></i></span>);
        }else{
            return(
            <span className="head_link">
                <Popup trigger={<i className="add circle icon"></i>}
                       className="add_recurring"
                       position="right center"
                       flowing
                       offset={35}
                       basic={true}
                       hoverable
                       id={this.props.day.day}
                       on="click"
                       open={this.state.isOpen}
                       onClose={this.handleClose}
                       onOpen ={this.handleOpen}>
                    <AddRecurringWindow
                        handleSelect = {this.handleChangeJobs}
                        handleAdd    = {this.handleAdd}
                        buttonLabel  = {this.state.buttonLabel}
                        jobsOption   = {this.state.jobsRecurring}
                        jobsSelected = {this.state.jobsSelected}
                        className    = {this.state.className}
                        day          = {this.props.day}
                    />
                </Popup>
            </span>);
        }
    }
}
function mapStateToProps(state,ownprops) {
    return{
        settings: state.settings,
        action: state.calendar_page.action
    }
}
function mapDispatchToProps(dispatch){
    return({
        calendar_page_add_recurring_to_date : (settings,job_ids, dateTo)=>{
            dispatch(calendar_page_add_recurring_to_date(settings,job_ids ,dateTo));
        }
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarAddRecurring);
