import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChildDepartment from './ChildDepartment';
import JobGroup from './JobGroup';


class ParentDepartment extends Component {
    renderContent(){
        const dep_id = this.props.department.id.toString();
        let jobs     = [];
        let content  = [];

        // Check if the parent department has a job on its own jobs, if it does render it
        if(dep_id in this.props.all_jobs){
            jobs = this.props.all_jobs[dep_id];
            // Key must be given to the JobGroup to prevent error form displaying
            content.push(<JobGroup jobs={jobs} key={(content.length + 1) + "_job_group"} />);
        } 

        // Then renders the following child departments
        this.props.department.kids.map(function(item,index){
            const dep_id = item.id.toString();
            let   jobs   = [];

            if(dep_id in this.props.all_jobs){
                jobs = this.props.all_jobs[dep_id];   
            }

            content.push(<ChildDepartment department={item} jobs={jobs} key={(content.length + 1) + "_child_department"} />);
        }.bind(this));

        return content;
    }
    render() {
        let department_class = "department_header_main";
        let countJobs        = "";
    
        if(this.props.count_jobs>0){
            countJobs = " (" + this.props.count_jobs + ") ";
        }

        // If there is a kid make the label style smaller
        if(this.props.department.kids.length > 0){
            department_class = "department_header";
        }

        return (
            <div className="department_container">
                <div className={department_class}>
                    {this.props.department.title}
                    <span className="job_count">{countJobs}</span>
                </div>
                <div className="department_body"> 
                    {
                        this.renderContent()
                    }
                </div>
            </div>
        );
    }
}
ParentDepartment.propTypes = {
    department: PropTypes.object,      
    all_jobs: PropTypes.object,
    count_jobs: PropTypes.number
}
export default ParentDepartment;