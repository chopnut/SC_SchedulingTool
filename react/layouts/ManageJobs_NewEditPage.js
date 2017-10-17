import React, { Component } from 'react';
import Form from '../components/AddEditJobForm';

export default class ManageJobsPage extends Component {
    constructor(props){
        super(props);
        const state = props.store.getState();
        const userlog  = state.user_detail;

        this.state = { userlog};
        
    }
    render(){
        return(
            <div className="edit">
                <Form />
            </div>
        );
    }
}
