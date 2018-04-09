import React, { Component } from 'react';
import {connect} from 'react-redux';

class ReportsPage extends Component {
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
            <div className="ReportsPage">
                My Component here
                <i className="assistive listening systems icon" ></i>
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
export default connect(mapStateToProps,mapDispatchToProps)(ReportsPage);
