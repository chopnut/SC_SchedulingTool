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

        if(this.state.isLoading){
            return(<div>Loading...</div>);
        }else{

            return(
                <div>
                    My Component here
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
