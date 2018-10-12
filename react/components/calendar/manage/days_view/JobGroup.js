import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

// User defined components
import JobIndividual from './JobDP';


class JobGroup extends Component {
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

        if(this.state.isLoading){
            return(<div>Loading...</div>);
        }else{

            return(
            <div className="job_group">
                <ul className="sortable list">
                {
                    Object.keys(this.props.jobs).map((item,index)=>{
                        return (<JobIndividual key={index} job={this.props.jobs[item]}/>);
                    })
                }
                </ul>
            </div>);
        }
    }
}
function mapStateToProps(state,ownprops) {
    return ({
        settings: state.settings
    })
}
function mapDispatchToProps(dispatch){
    return({

    })
}
export default connect(mapStateToProps,mapDispatchToProps)(JobGroup);
