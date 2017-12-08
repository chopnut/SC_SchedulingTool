import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class DaysView extends Component {
    constructor(props){
        super(props);
        this.state = {
           isLoading: true
        }
    }
    componentDidMount(){
        console.log("DAYSVIEW", this.props);
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
    return ({
        state: state
    })
}
function mapDispatchToProps(dispatch){
    return({

    })
}
DaysView.propTypes = {
    web: PropTypes.object // web is storage for user_log information
}
export default connect(mapStateToProps,mapDispatchToProps)(DaysView);
