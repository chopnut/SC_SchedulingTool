import React, { Component } from 'react';
import Form from '../../components/manage_jobs/AddEditJobForm';
import {connect} from 'react-redux';

class ManageJobs_NewEditPage extends Component {
    constructor(props){
        super(props);
        this.state = { };
    }
    render(){
        return(
            <div className="edit">
                <Form />
            </div>
        );
    }
}
function mapStateToProps(state,ownprops) {
    return{
        store: state
    }
}
export default connect(mapStateToProps,null)(ManageJobs_NewEditPage);
