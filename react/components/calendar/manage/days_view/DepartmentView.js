import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import DeptKid from './DepartmentKidView';
import JobGroupView from './JobGroupView';
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
    renderContent(){
        if(this.props.department.kids.length>0){
            return (this.props.department.kids.map(
                function (item,index) {
                    return (
                        <DeptKid key={index} department={item} />
                    )
                }
            ))
        }else{
            return <JobGroupView />
        }
    }
    render(){
        let department_class ="department_header";
        if(this.props.department.kids.length<=0) department_class ="department_header_main";

        if(this.state.isLoading){
            return(<div className="department_container">{getLoader()}</div>);
        }else{

            return(
            <div className="department_container">
                <div className={department_class}>
                    {
                        this.props.department.title
                    }
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
export default connect(mapStateToProps,mapDispatchToProps)(DepartmentView);
