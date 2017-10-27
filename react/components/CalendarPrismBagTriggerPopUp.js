import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class CalendarPrismBagTriggerPopUp extends Component {
    constructor(props){
        super(props);
        this.state = {
           isLoading: true,
        }
    }
    componentDidMount(){
        this.setState(function(state,props){
            return ({state,isLoading: false});
        });
    }
    render(){
        let classname = "aside_jobs";
        if(this.props.isOpen){
            classname = classname+" selected";
        }
        if(this.props.isAlreadyScheduled){
            classname = classname+" scheduled";
        }

        if(this.state.isLoading){
            return(<div>Loading...</div>);
        }else{

            return(
                <div className={classname} ><span>{this.props.job_title}</span></div>
           );
        }
    }
}
function mapStateToProps(state,ownprops) {
    return{
        state: state
    }
}
function mapDispatchToProps(dispatch){
    return({

    })
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarPrismBagTriggerPopUp);
