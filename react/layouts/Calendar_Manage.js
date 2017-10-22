import React, { Component } from 'react';
import {connect} from 'react-redux';


class Calendar_Manage extends Component {
	constructor(props){
		super(props);

        const state = props.store;
        const userlog  = state.user_detail;
        this.state = {userlog};

	}
	renderLinkManager(){

    }
	render(){

		return(
           <div className="Calendar_Manage">
               Manage calendar
           </div>
		);
	}
}
function mapStateToProps(state,ownprops) {
    return{
        store: state
    }
}
export default connect(mapStateToProps,null,null,{pure: false})(Calendar_Manage);
