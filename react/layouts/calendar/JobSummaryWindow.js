import React, { Component } from 'react';
import {connect} from 'react-redux';

class JobSummaryWindow extends Component {
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
            <div className="window_job_container">
                <div className="main_content">
                    <div className="content">
                        MAIN CONTENT HERE
                    </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(JobSummaryWindow);
