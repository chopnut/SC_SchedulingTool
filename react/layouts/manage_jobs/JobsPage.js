import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

// Calendar Date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

// Semantic UI form input
import {Radio} from 'semantic-ui-react';

// User defined components
import {getLoader} from "../../common/CommonUI";
import JobBagRow   from "../../components/manage_jobs/job_bags/JobBag";

class ManageJobs_JobsPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            jobsFound: [],
            selectedDateFrom: moment(props.calendar_page.days[0].date,'DD/MM/YYYY'),
            selectedDateTo:   moment(props.calendar_page.days[6].date,'DD/MM/YYYY'),
            filterJobType: 'once'
        }
        this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
        this.handleChangeFilterType = this.handleChangeFilterType.bind(this);
        this.getJobBags             = this.getJobBags.bind(this);

    }
    handleChangeFilterType(e,{value}){
        this.setState((prevState, props) => (
            {filterJobType: value}
        ));
    }

    handleDatePickerChange(date,direction){
        if(direction == 'from'){

            this.setState((prevState, props) => (
                {selectedDateFrom: date }
            ));

        }else{

            this.setState((prevState, props) => (
                {selectedDateTo: date }
            ));
        }
    }
    getJobBags(){
        const calendar_department_api   = this.props.settings.setting.react_api_folder+"/manage_jobs_actions/mj_get_job_bags.php";
        const postData    = {
                date_from: this.state.selectedDateFrom.format('DD/MM/YYYY'),
                date_to: this.state.selectedDateTo.format('DD/MM/YYYY'),
                job_type: this.state.filterJobType
        };
        const prom        = axios.post(calendar_department_api,postData);

        prom.then((res)=>{
            const jobsDp          = res.data.payload;
            console.log("Jobs Page: ",res.data);

            this.setState((prevState, props) => ({jobsFound: jobsDp, isLoading: false }));

        });
    }
    renderContent(){
           if(this.state.isLoading){
               return <div style={{textAlign: "center", marginTop: "25px"}}>{getLoader()}</div>
           }else{
               return this.state.jobsFound.map((item , index)=>{
                   return <JobBagRow key={index} job={item} />;
               })
           }
    }
    componentDidMount(){
        this.getJobBags();
    }
    render(){
        return(
            <div className="jobs">
               <div className="main_container">
                   <div className="left">
                       <div className="header">
                           <div className="top">
                                Jobs Available from and to
                           </div>
                           <div className="bottom">
                                <span className="date_from">{this.state.selectedDateFrom.format("DD/MM/YYYY")}</span> -
                                <span className="date_to">{this.state.selectedDateTo.format("DD/MM/YYYY")}</span>
                           </div>
                       </div>
                       <div id="datepicker" className="datepicker">
                           From: <br/>
                           <DatePicker
                               inline
                               selected={this.state.selectedDateFrom}
                               onChange={(newDate)=>{
                                   this.handleDatePickerChange(newDate,'from');
                               }}
                               todayButton={"Today"}
                           /><br/><br/>
                           To: <br/>
                           <DatePicker
                               inline
                               selected={this.state.selectedDateTo}
                               onChange={(newDate)=>{
                                   this.handleDatePickerChange(newDate,'to');
                               }}
                               todayButton={"Today"}
                           />
                       </div>
                   </div>
                   <div className="right">
                       <div className="header jobbags">
                           <div className="content">
                               <div className="left">
                                   <i className="shopping bag icon"></i> Job Bags
                               </div>
                               <div className="right">
                                   <strong>Job Type Filter </strong>&nbsp;&nbsp;
                                   <Radio
                                       label='Once'
                                       name='job_type'
                                       value='once'
                                       checked={this.state.filterJobType === 'once'}
                                       onChange={this.handleChangeFilterType}
                                   />&nbsp; &nbsp;
                                   <Radio
                                       label='Recurring'
                                       name='job_type'
                                       value='recurring'
                                       checked={this.state.filterJobType === 'recurring'}
                                       onChange={this.handleChangeFilterType}
                                   />
                               </div>
                           </div>
                       </div>
                       <div className="body">
                           <div className="info"> Information goes here </div>
                           <div className="content">
                               {
                                    this.renderContent()
                               }
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
        manage_jobs: state.manage_jobs,
        calendar_page: state.calendar_page,
        settings: state.settings
    }
}
export default connect(mapStateToProps,null)(ManageJobs_JobsPage);
