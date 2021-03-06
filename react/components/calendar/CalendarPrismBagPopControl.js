import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Popup} from 'semantic-ui-react';

// For triggering popups
import CalendarPrismBagPopUps from './CalendarPrismBagPopUps';
import CalendarPrismBagTriggerPopUp from './CalendarPrismBagTriggerPopUp';

// Get actions for calendar page
import {calendar_page_add_schedule_to} from '../../actions/CalendarActions';


class CalendarPrismBagPopControl extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            isSaving: false,
            isAlreadyScheduled: false,
            recurrence: "once",
            departmentValues: []

        }
        this.handleClose    = this.handleClose.bind(this);
        this.handleOpen     = this.handleOpen.bind(this);
        this.addToSchedule  = this.addToSchedule.bind(this);// add to schedule if it is not scheduledyet
        this.changeRecurrence = this.changeRecurrence.bind(this);
        this.handleChangeDepartment = this.handleChangeDepartment.bind(this); // this is for updating departments to schedule
        this.handleCheckError   = this.handleCheckError.bind(this);
    }
    componentDidMount(){
    }
    // Adding job to the scheduled date
    //---------------------------------
    addToSchedule(date,jobType){

        this.setState((prevState, props) => (
            {prevState,isSaving: true }
        ));

        const postJob = Object.assign({}, this.props.job,{
            job_type: jobType,
            job_dp_date: date,
            job_departments: this.state.departmentValues,
            job_status: this.props.default_status[0].text
        });

     
        this.props.calendar_page_add_schedule_to(
            this.props.settings,
            postJob
        );
        this.setState((prevState, props) => (
            {prevState,isSaving: false }
        ));
    }

    // Function that set states
    handleCheckError(){
        // Pass this function to check if all the value is set and have at least amount of the valut to the popup card itself
        // return object of msg
        let msgs = [];
        let err  =  0;
        if(this.state.departmentValues.length<=0){
            msgs.push("You need atleast 1 department to schedule a job bag.");
            err  =  1;
        }
        return {err: err , msg: msgs }
    }
    handleChangeDepartment(e,{value}){

        this.setState((prevState, props) => (
            {departmentValues: value}
        ));


    }
    changeRecurrence(recurrence){
        this.setState((prevState,props)=>{
            return({recurrence});
        });
    }
    handleOpen(e){
        this.setState({ isOpen: true })
    }
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

        if(tagName=='i'){
            this.setState({ isOpen: true });
            return;
        }
        this.setState({ isOpen: false });

    }

    render(){
        if(this.state.isLoading){
            return(<div>Loading...</div>);
        }else{

            return(

            <Popup trigger={<div><CalendarPrismBagTriggerPopUp job_title={this.props.job.job_title} isOpen={this.state.isOpen} isAlreadyScheduled = {this.props.job.isAdded} /></div>}
                   className="prism_popup"
                   position="left center"
                   flowing
                   offset={245}
                   basic={true}
                   hoverable
                   id={this.props.job.job_title}
                   on="hover" open={this.state.isOpen}
                   onClose={this.handleClose}
                   onOpen={this.handleOpen}>
                   <CalendarPrismBagPopUps job={this.props.job}
                                           days                  ={this.props.days}
                                           addToSchedule         ={this.addToSchedule}
                                           changeRecurrence      ={this.changeRecurrence}
                                           isSaving              ={this.state.isSaving}
                                           isRecurrence          ={this.state.recurrence}
                                           handleChangeDepartment={this.handleChangeDepartment}
                                           handleCheckError      ={this.handleCheckError}
                                           departmentValues      ={this.state.departmentValues}
                   />
            </Popup>
            );
        }
    }
}
function mapStateToProps(state, ownprops) {
    return{
        days: state.calendar_page.days,
        default_status: JSON.parse(state.settings.setting.job_prod_status)
    }
}
function mapDispatchToProps(dispatch){
    return({
        calendar_page_add_schedule_to: (settings,job)=>{
            dispatch(calendar_page_add_schedule_to(settings, job));
        }
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarPrismBagPopControl);
