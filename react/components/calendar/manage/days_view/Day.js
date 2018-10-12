import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// User define components
import ParentDepartment from './ParentDepartment';
import {getLoader} from '../../../../common/CommonUI';
import HeaderLabels from '../../../../layouts/common/calendar/manage/JobHeaderLabels';

class Day extends Component {
    constructor(props){
        super(props);
        this.state = {
           isLoading: true,
           job_departments: {},
           momentDate: props.moment

        }
        this.prepareData = this.prepareData.bind(this);
    }

    componentDidMount(){
        this.prepareData();
    }
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
        const curr_date = this.state.momentDate.format('YYYY-MM-DD');
        const next_date = nextProps.moment.format('YYYY-MM-DD');


        if( curr_date != next_date){
            // console.log("Day.js WillReceiveProps",curr_date, next_date);
            this.setState({ momentDate: nextProps.moment },()=>{
                this.prepareData();
            }
            );
            
        }

    }
    prepareData(){

        // ----------------------------------------   *   -------------------------------------------//
        //              Query the database to get all the job departments
        // ----------------------------------------   *   -------------------------------------------//

        const data          = {job_dp_date: this.state.momentDate.format('YYYY-MM-DD')}
        const job_dep_api   = this.props.settings.setting.react_api_folder+"calendar_actions/calendar_manage_jobs_days.php";
        const prom          = axios.post(job_dep_api,data);

        prom.then((res)=>{

            const jobs = res.data.payload;
            console.log("Jobs result",  res.data, this.props);
            // console.log("Jobs department", this.props.dep);

            this.setState(function(state,props){

                this.props.loaded();
                return ({
                    isLoading: false,job_departments: jobs});
            });

        });
    }
    render(){
        if(this.state.isLoading){
            return(
                <div className="container">
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
            <div className="container" id={this.props.moment.format("DD-MM-YYYY")}>
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
                       // This LOOP is going through the main category/department
                       // Programming, Printing, Inserting machine

                       this.props.dep.departmentsOrder.map(
                           function (item, index) {
                         
                               const department_id = item.id.toString();
                               let count_jobs = 0;
                               if(department_id in parent.state.job_departments){
                                  count_jobs = Object.keys(parent.state.job_departments[department_id]).length;
                               }
                                // Display the department
                                return <ParentDepartment key={index} department={item} all_jobs={parent.state.job_departments} count_jobs={count_jobs} />
                           }
                       )
                   }
               </div>
            </div>);
        }
    }
}
Day.propTypes = {
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
export default connect(mapStateToProps,mapDispatchToProps)(Day);
