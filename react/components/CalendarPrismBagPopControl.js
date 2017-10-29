import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Popup} from 'semantic-ui-react';

// For triggering popups
import CalendarPrismBagPopUps from '../components/CalendarPrismBagPopUps';
import CalendarPrismBagTriggerPopUp from '../components/CalendarPrismBagTriggerPopUp';

// Get actions for calendar page
import {calendar_page_add_schedule_to} from '../actions/CalendarActions';


class CalendarPrismBagPopControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            isSaving: false,
            isAlreadyScheduled: false,
            recurrence: "once"
        }
        this.handleClose    = this.handleClose.bind(this);
        this.handleOpen     = this.handleOpen.bind(this);
        this.addToSchedule  = this.addToSchedule.bind(this);// add to schedule if it is not scheduledyet
        this.viewSchedule   = this.viewSchedule.bind(this); // View schedule instead of creating from button
        this.changeRecurrence = this.changeRecurrence.bind(this);
    }
    // Function that set states
    // Adding job to the scheduled date
    //---------------------------------
    addToSchedule(date,jobType){
        this.setState((prevState, props) => (
            {prevState,isSaving: true }
        ));

        const promise = this.props.calendar_page_add_schedule_to(
            this.props.settings,
            this.props.job,
            date,
            jobType);
    }

    changeRecurrence(recurrence){
        this.setState((prevState,props)=>{
            return({recurrence});
        });
    }
    handleOpen(){
        this.setState({ isOpen: true })
    }
    handleClose(){
        this.setState({ isOpen: false })
    }
    //
    viewSchedule(){
    }
    render(){
        if(this.state.isLoading){
            return(<div>Loading...</div>);
        }else{

            return(

            <Popup trigger={<div><CalendarPrismBagTriggerPopUp job_title={this.props.job.job_title} isOpen={this.state.isOpen} isAlreadyScheduled = {this.state.isAlreadyScheduled} /></div>}
                   className="popup" position="left center" flowing offset={245} basic={true}
                   hoverable
                   on="hover" open={this.state.isOpen}
                   onClose={this.handleClose}
                   onOpen={this.handleOpen}>
                   <CalendarPrismBagPopUps job={this.props.job} days={this.props.days}
                                           addToSchedule={this.addToSchedule} viewSchedule={this.viewSchedule}
                                           changeRecurrence={this.changeRecurrence}
                                           isSaving={this.state.isSaving}
                                           isAlreadyScheduled = {this.state.isAlreadyScheduled}
                                           isRecurrence={this.state.recurrence}
                   />
            </Popup>
            );
        }
    }
}
function mapStateToProps(state,ownprops) {
    return{
        days: state.calendar_page.days
    }
}
function mapDispatchToProps(dispatch){
    return({
        calendar_page_add_schedule_to: (settings,job,date,jobType)=>{
            dispatch(calendar_page_add_schedule_to(settings, job, date,jobType));
        }
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarPrismBagPopControl);
