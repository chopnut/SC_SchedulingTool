import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class __RENAME_ME___ extends Component {
    constructor(props){
        super(props);
        this.state = {
            days: props.days,
            prismJobs: []
        }
    }
    componentDidMount(){

    }
    render(){

    }
}
function mapStateToProps(state,ownprops) {
    return{
        days: state.calendar_page.days
    }
}
export default connect(mapStateToProps,null)(__RENAME_ME___);
