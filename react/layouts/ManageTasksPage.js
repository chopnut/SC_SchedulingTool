import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class ManageTasksPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }

    }
	render(){

		return(
			<div className="ManageTasksPage">
                <header>
                    <i className="user circle icon"></i> Manage Task Page
                </header>
				<article>
                    Article Content here
                </article>
			</div>
		);
	}
}

function mapStateToProps(state,ownprops) {
    return{
        settings: state.settings
    }
}
export default connect(mapStateToProps,null,null,{pure: false})(ManageTasksPage);
