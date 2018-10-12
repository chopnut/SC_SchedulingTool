import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

// User defined components
import JobGroupView from './JobGroup';
import {getLoader} from '../../../../common/CommonUI';

// Prop-types
import PropTypes from 'prop-types';

class DepartmentKid extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            job_departments: {}
        }
        this.prepareJobs = this.prepareJobs.bind(this);
    }
    componentDidMount(){
        this.prepareJobs();
    }
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
        // console.log("Department KID", nextProps);
        
    }
    prepareJobs(){
        this.setState(function(state,props){
            return ({
                state,isLoading: false
            });
        });
        
    }
    render(){
        let kidClass = "kid_header";

        if(this.state.isLoading){
            return(<div className="department_container_kid">{getLoader()}</div>);
        }else{
            return(
            <div className="department_container_kid">
                <div className={kidClass}>
                    {this.props.department.title} <span className="job_count">({Object.keys(this.props.jobs).length})</span>
                </div>
                <div className="kid_body">
                    <JobGroupView department = {this.props.department} jobs={this.props.jobs}/>
                </div>
            </div>
            );
        }
    }
}
function mapStateToProps(state,ownprops) {
    return ({
    })
}
function mapDispatchToProps(dispatch){
    return({

    })
}
DepartmentKid.propTypes = {

}
export default connect(mapStateToProps,mapDispatchToProps)(DepartmentKid);
