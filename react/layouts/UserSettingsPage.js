import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class UserSettingsPage extends Component {
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
            <div className="UserSettingsPage">
                <header>
                    <i className="linkify icon"></i> User Settings Page
                </header>
                <article>
                    Content goes here
                </article>
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
export default connect(mapStateToProps,mapDispatchToProps)(UserSettingsPage);
