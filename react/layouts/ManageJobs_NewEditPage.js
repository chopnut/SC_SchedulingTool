import React, { Component } from 'react';
import Form from '../components/AddEditJobForm';
import {connect} from 'react-redux';

class ManageJobs_NewEditPage extends Component {
    constructor(props){
        super(props);
        const userlog  = props.store.user_details;
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
function mapStateToProps(state,ownprops) {
    return{
        store: state
    }
}
export default connect(mapStateToProps,null)(ManageJobs_NewEditPage);
