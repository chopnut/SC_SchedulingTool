import React, { Component } from 'react';
import {connect} from 'react-redux';


class Calendar_Manage extends Component {
	constructor(props){
		super(props);

        const calendar_page  = props.calendar_page;
        this.state = {calendar_page};

	}
	render(){

		return(
           <div className="calendar_manage">
               Manage calendar
           </div>
		);
	}
}
function mapStateToProps(state,ownprops) {
    return{
        calendar_page: state.calendar_page
    }
}
export default connect(mapStateToProps,null,null,{pure: false})(Calendar_Manage);


