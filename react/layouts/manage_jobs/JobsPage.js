import React, { Component } from 'react';
import {connect} from 'react-redux';

// Calendar Date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class ManageJobs_JobsPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            jobsFound: []
        }
    }
    componentDidMount(){
    }
    render(){
        return(
            <div className="jobs">
               <div className="main_container">
                   <div className="left">
                       <div className="header">

                           <div className="top">
                                Jobs Available on
                           </div>
                           <div className="bottom">
                                <span className="day">{"DAY"}</span><br/>
                                <span className="date">{"DATE HERE"}</span>
                           </div>
                       </div>
                       <div id="datepicker" className="datepicker"></div>
                   </div>
                   <div className="right">
                       <div className="header jobbags">
                           <div className="content">
                               <div className="left">
                                   <i className="shopping bag icon"></i> Job Bags
                               </div>
                               <div className="right">
                                    some here
                               </div>
                           </div>
                       </div>
                       <div className="body">
                           <div className="content">
                               No Content Yet
                           </div>
                       </div>
                   </div>

               </div>
            </div>
        );
    }
}
function mapStateToProps(state,ownprops) {
    return{
        store: state
    }
}
export default connect(mapStateToProps,null)(ManageJobs_JobsPage);
