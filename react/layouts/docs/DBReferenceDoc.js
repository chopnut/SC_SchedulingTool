import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class DBReferenceDoc extends Component {
    constructor(props){
        super(props);
        this.state = {
           isLoading: true,
            data: {}
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
            <div className="reference_doc">
                <div className="header">Database Reference</div>
                <div className="content">

                </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(DBReferenceDoc);
