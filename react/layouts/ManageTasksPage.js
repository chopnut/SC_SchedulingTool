import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class ManageTasksPage extends Component {
	render(){

		return(
			<div className="ManageTasksPage">
				Manage Task Page
			</div>
		);
	}
}

function mapStateToProps(state,ownprops) {
    return{
        store: state
    }
}
export default connect(mapStateToProps,null,null,{pure: false})(ManageTasksPage);
