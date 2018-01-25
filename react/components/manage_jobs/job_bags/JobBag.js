import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import util from '../../../common/edlibrary';

class JobBag extends Component {
    constructor(props){
        super(props);
        this.state = {
           isLoading: true
        }

        // DISPLAY FUNCTIONS
        this.getCards.bind(this);
    }
    componentDidMount(){
        this.setState(function(state,props){
            return ({state,isLoading: false});
        });
    }
    getCards(label, value, align, borderRight= ""){

        return (
            <div className="job_card" style={{textAlign: align, borderRight: borderRight}}>
                <span className="job_card_label">{label}</span><br />
                <span className="job_card_value">{value}</span>
            </div>
        );
    }
    render(){
        console.log('Job console: ', this.props.job);

        // ----------------------------------------------
        // ROW 1
        // ----------------------------------------------

        let jobNumberCard   = this.props.job.job_prism_number;
        let prismIDCard       = this.props.job.job_prism_job_id;
        let clientCard      = this.props.job.job_customer_name;

        if(jobNumberCard)   jobNumberCard   = this.getCards("JOB NUMBER", util.pad("000000",jobNumberCard,"left"),"left");
        if(prismIDCard)     prismIDCard     = this.getCards("JOB ID", util.pad("000000",prismIDCard,"left"), "right");
        if(clientCard)      clientCard      = this.getCards("CLIENT", clientCard, "right","1px solid #ccc");



        // ----------------------------------------------
        // ROW 2
        // ----------------------------------------------

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
                                    {jobNumberCard}
                                    <span className="job_title">{this.props.job.job_title}</span>
                                </div>
                                <div className="right">
                                    {prismIDCard} {clientCard}
                                </div>
                            </div>
                            <div className="row_2">
                                <div className="left">&nbsp;</div>
                                <div className="right">Icons goes here</div>
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
