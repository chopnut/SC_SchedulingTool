import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// User define components
import {getLoader} from '../../../../common/JobBagCommonUI';
import DeptView from './DepartmentView';
import HeaderLabels from '../../../../layouts/common/calendar/manage/JobHeaderLabels';

class DayView extends Component {
    constructor(props){
        super(props);
        this.state = {
           isLoading: true,
           job_departments: []
        }
    }
    componentWillReceiveProps(){
        console.log("Triggered");
    }
    componentDidMount(){

        // Query the database to get all the job departments
        const data          = {job_dp_date: this.props.moment.format('YYYY-MM-DD')}
        const job_dep_api   = this.props.settings.setting.react_api_folder+"calendar_actions/calendar_manage_jobs_days.php";
        const prom          = axios.post(job_dep_api,data);

        console.log("DayView & Sending ", this.props,data);
        prom.then((res)=>{
            const jobs = res.data.payload;
            console.log("MY JOBS",jobs);
            this.setState(function(state,props){
                return ({isLoading: false,job_departments: jobs});
            });
        });
    }
    render(){
        if(this.state.isLoading){
            return(
                <div className="container" id={"#DAY"}>
                    <div className="header">
                        <div className="left_of_all_days">
                            <div className="content">
                                <span className="day">{this.props.moment.format('dddd')}</span>
                                <span className="date">{this.props.moment.format('Do of MMMM YYYY')}</span>
                            </div>
                        </div>
                        <div className="right_of_all_days">&nbsp;</div>
                    </div>
                    <div className="labels">
                        <HeaderLabels/>
                    </div>
                    <div className="body">
                        {getLoader()}
                    </div>
                </div>
            );
        }else{
            const parent = this;
            return(
            <div className="container" id={"#DAY"}>
               <div className="header">
                   <div className="left_of_all_days">
                       <div className="content">
                           <span className="day">{this.props.moment.format('dddd')}</span>
                           <span className="date">{this.props.moment.format('Do of MMMM YYYY')}</span>
                       </div>
                   </div>
                   <div className="right_of_all_days">&nbsp;</div>
               </div>
                <div className="labels">
                    <HeaderLabels/>
                </div>
               <div className="body">
                   {
                       this.props.dep.departmentsOrder.map(
                           function (item,index) {
                               return (
                                   <DeptView key={index} department={item} jobs={parent.state.job_departments} />
                               );
                           }
                       )
                   }
               </div>
            </div>);
        }
    }
}
DayView.propTypes = {
    web: PropTypes.object,      // web is storage for user_log information
    dep: PropTypes.object,      // information about departments
    moment: PropTypes.object    // the moment date instance to pass
}
function mapStateToProps(state,ownprops) {
    return ({
        calendar_page: state.calendar_page,
        settings: state.settings
    })
}
function mapDispatchToProps(dispatch){
    return({

    })
}
export default connect(mapStateToProps,mapDispatchToProps)(DayView);
