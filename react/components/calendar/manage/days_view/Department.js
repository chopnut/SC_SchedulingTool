import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import DeptKid from './DepartmentKid';
import JobGroupView from './JobGroup';
import {getLoader} from '../../../../common/CommonUI';
import PropTypes from 'prop-types';

class Department extends Component {
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
    renderContent(){
        if(this.props.department.kids.length>0){
            const parent  = this;


            return (this.props.department.kids.map(
                function (item,index) {
                    // console.log(parent.props.department.title, parent.props.jobs);
                    return (
                        <DeptKid key={index} department={item} jobs ={parent.props.jobs} />
                    )
                }
            ))

        }else{
            return <JobGroupView jobs= {this.state.job_departments}/>
        }
    }
    render(){
        let department_class = "department_header";
        let countJobs        = "";

        if(this.props.department.kids.length<=0) {
            department_class = "department_header_main";
            countJobs        =  "("+this.state.job_departments.length+")";
        }


        if(this.state.isLoading){
            return(<div className="department_container">{getLoader()}</div>);
        }else{

            return(
            <div className="department_container">
                <div className={department_class}>
                    {
                        this.props.department.title
                    }

                    <span className="job_count">
                        &nbsp;{countJobs}
                    </span>
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
Department.propTypes = {
    jobs: PropTypes.object
}
export default connect(mapStateToProps,mapDispatchToProps)(Department);
