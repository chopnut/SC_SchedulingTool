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
           isLoading: true
        }
    }
    componentDidMount(){

        this.setState(function(state,props){
            return ({
                state,isLoading: false
            });
        });
    }
    renderContent(){
        if(this.props.department.kids.length>0){
            const parent  = this;


            return (this.props.department.kids.map(
                function (item,index) {
                    // Get jobs in particular department ID
                    let dpId        = item.id;
                    let jobs        = parent.props.jobs;

                    if(dpId.toString() in parent.props.jobs){
                        jobs  = parent.props.jobs[dpId];
                        return (<DeptKid key={index} department={item} jobs ={jobs} />);
                    }
                }
            ))

        }else{
            // If the category has no kids like the PROGRAMMING category
           // return <JobGroupView department={this.props.department} jobs= {this.props.jobs}/>
        }
    }
    render(){
        let department_class = "department_header_main";
        let countJobs        = "";

        // Only show the counts if the category has jobs
        if(this.props.mainCatJobCount > 0) {
            countJobs        =  "("+ this.props.mainCatJobCount+")";
        }else{
            department_class = "department_header";
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
    })
}
function mapDispatchToProps(dispatch){
    return({

    })
}
Department.propTypes = {
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Department);
