import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JobGroup from './JobGroup';

class ChildDepartment extends Component {

    render() {
        const job_count = Object.keys(this.props.jobs).length;
        
        if(job_count > 0){
            return (
                <div>
                   <div className="department_header_main">{this.props.department.title} ({job_count})</div>
                   <JobGroup jobs={this.props.jobs} />
                </div>
            );
        }else{
            return (<div></div>);
        }
    }
}
ChildDepartment.propTypes = {
    jobs: PropTypes.array,         // All jobs for this child department 
    department: PropTypes.object    // The department information
}
export default ChildDepartment;