import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class __RENAME_ME___ extends Component {
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
        const jd = this.props.jd.dep;
        const bg = this.props.jd.bag;
        if(this.state.isLoading){
            return(<div>Loading...</div>);
        }else{

            return(
                <div className="cell" id={jd.job_dp_id}>
                    {bg.job_title}
                </div>);
        }
    }
}
function mapStateToProps(state,ownprops) {
    return{
        state: state
    }
}
function mapDispatchToProps(dispatch){
    return({

    })
}
export default connect(mapStateToProps,mapDispatchToProps)(__RENAME_ME___);
