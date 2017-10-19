import React, { Component } from 'react';
import {connect} from 'react-redux';


class SchedulingSettingsPage extends Component {
	render(){

		return(
			<div className="SchedulingSettingsPage">Scheduling Setting Page</div>
		);
	}
}

function mapStateToProps(state,ownprops) {
    return{
        store: state
    }
}
export default connect(mapStateToProps,null,null,{pure: false})(SchedulingSettingsPage);
