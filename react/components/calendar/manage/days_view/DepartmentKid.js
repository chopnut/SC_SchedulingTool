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
            job_departments: []
        }
    }
    componentDidMount(){
        // This is a super parents with no kids like the data programming department
        let dpId        = this.props.department.id;
        let jobs        = [];
        const propJobs  = this.props.jobs;

        if(typeof propJobs != 'undefined' && dpId.toString() in this.props.jobs){
            jobs  = this.props.jobs[dpId];

        }
        this.setState(function(state,props){
            return ({
                state,isLoading: false,
                job_departments: jobs
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
                    {this.props.department.title} <span className="job_count">({this.state.job_departments.length})</span>
                </div>
                <div className="kid_body">
                    <JobGroupView department = {this.props.department} jobs={this.state.job_departments}/>
                </div>
            </div>
            );
        }
    }
}
function mapStateToProps(state,ownprops) {
    return ({
        calendar_page: state.calendar_page
    })
}
function mapDispatchToProps(dispatch){
    return({

    })
}
DepartmentKid.propTypes = {
    jobs: PropTypes.object,
    department: PropTypes.object
}
export default connect(mapStateToProps,mapDispatchToProps)(DepartmentKid);
