import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class CalendarPrismBagPopUps extends Component {
    constructor(props){
        super(props);
        this.state = {
           isLoading: true
        }
    }
    componentDidMount(){
        this.setState(function(state,props){
            return ({state,isLoading: false});
        });

    }
    render(){
        if(this.state.isLoading){
            return(<div>Loading...</div>);
        }else{

            return(
            <div style={{width: '300px',height: '300px'}} className="popups">
                My Component here {this.props.job.jobNum}
            </div>);
        }
    }
}
function mapStateToProps(state,ownprops) {
    return{
        user_detail: state.user_detail
    }
}
function mapDispatchToProps(dispatch){
    return({

    })
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarPrismBagPopUps);
