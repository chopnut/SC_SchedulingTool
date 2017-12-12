import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import JobGroupView from './JobGroup';
import {getLoader} from '../../../../common/JobBagCommonUI';

class DepartmentView extends Component {
    constructor(props){
        super(props);
        this.state = {
           isLoading: true
        }
    }
    componentDidMount(){
        this.setState(function(state,props){
            return ({state,isLoading: false});
        });
    }
    render(){
        let kidClass = "kid_header";

        if(this.state.isLoading){
            return(<div className="department_container">{getLoader()}</div>);
        }else{
            return(
            <div className="kid">
                <div className={kidClass}>{this.props.department.title}</div>
                <div className="kid_body">
                    <JobGroupView />
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
export default connect(mapStateToProps,mapDispatchToProps)(DepartmentView);
