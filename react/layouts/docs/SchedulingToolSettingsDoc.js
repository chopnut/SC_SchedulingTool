import React, { Component } from 'react';
import {connect} from 'react-redux';

class ToolSettingDoc extends Component {
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
            <div className="important_note">
                <strong>Important Note:</strong> Any changes made on this setting can render the software unusable. Only Administrators are allowed to change the configuration.
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
export default connect(mapStateToProps,mapDispatchToProps)(ToolSettingDoc);
