import React, { Component } from 'react';
import axios from 'axios';


export default class ManageJobsPage extends Component {
	constructor(props){
		super(props);
        const state = props.store.getState();
        const userlog  = state.user_detail;

        this.state = {settings, userlog};
      
	}
	render(){
		return(
			<div className="ManageJobsPage">
				Manage Job Pages 
			</div>
		);
	}
}