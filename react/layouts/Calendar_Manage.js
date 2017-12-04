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
               <div className="first">
                   <div className="left">
                       <h2 className="title">
                           <i className="settings icon"></i> Manage Scheduled Jobs
                       </h2>
                       <div className="body">

                       </div>
                   </div>
                   <div className="right">
                        RIGHT
                   </div>
               </div>
               <div className="second">

               </div>
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


