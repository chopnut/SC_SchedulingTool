import React, { Component } from 'react';
import {connect} from 'react-redux';

import CalendarPrismBagPopUps from '../components/CalendarPrismBagPopUps';
import CalendarPrismBagTriggerPopUp from '../components/CalendarPrismBagTriggerPopUp';
import {Popup} from 'semantic-ui-react';

class CalendarPrismBagPopControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen  = this.handleOpen.bind(this);
    }
    handleOpen(){
        this.setState({ isOpen: true })
    }
    handleClose(){
        this.setState({ isOpen: false })
    }

    render(){
        if(this.state.isLoading){
            return(<div>Loading...</div>);
        }else{

            return(

            <Popup trigger={<div><CalendarPrismBagTriggerPopUp job_title={this.props.job.job_title} isOpen={this.state.isOpen}/></div>}
                   className="popup" position="left center" flowing offset={245} basic={true}
                   hoverable
                   on="hover" open={this.state.isOpen}
                   onClose={this.handleClose}
                   onOpen={this.handleOpen}>
                <CalendarPrismBagPopUps job={this.props.job} days={this.props.days} />
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

    })
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarPrismBagPopControl);
