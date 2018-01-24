import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class JobBag extends Component {
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
        console.log('Job console: ', this.props.job);

        // ROW 1

        // ROW 2

        // ROW 3
        if(this.state.isLoading){
            return(<div>Loading...</div>);
        }else{

            return(
                <div className="job_row">
                    <div className="wrapper">
                        <div className="card">
                            <div className="row_1">
                                <div className="left">
                                    <span className="job_number">{this.props.job.job_prism_number}</span>
                                    <span className="job_customer_name">{this.props.job.job_customer_name}</span>

                                </div>
                                <div className="right">
                                    <span className="job_id_number">{this.props.job.job_prism_job_id}</span>
                                </div>
                            </div>
                            <div className="row_2">
                                <div className="left">{this.props.job.job_title}</div>
                                <div className="right"></div>
                            </div>
                            <div className="row_3">
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            );
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
export default connect(mapStateToProps,mapDispatchToProps)(JobBag);
