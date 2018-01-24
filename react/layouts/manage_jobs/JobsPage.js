import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

// Calendar Date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

// Semantic UI form input
import {Radio} from 'semantic-ui-react';
import {Dropdown} from 'semantic-ui-react';

// User defined components
import {getLoader} from "../../common/CommonUI";
import JobBagRow   from "../../components/manage_jobs/job_bags/JobBag";

// Get actions for calendar page
import {manage_job_update_views} from '../../actions/ManageJobsActions';

class ManageJobs_JobsPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            jobsFound: [],
            selectedDateFrom: moment(props.calendar_page.days[0].date,'DD/MM/YYYY'),
            selectedDateTo:   moment(props.calendar_page.days[6].date,'DD/MM/YYYY'),


            optionsDateType: [
                {key:'created_at', value:'created_at', text: 'Created at'},
                {key:'job_due_date', value:'job_due_date', text: 'Due Date'}
            ],
            dateType: "created_at",
            searchTerm: "",
            filterJobType: 'once'
        }
        this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
        this.handleChangeFilterType = this.handleChangeFilterType.bind(this);
        this.handleDateType         = this.handleDateType.bind(this);
        this.handleSearchTerm       = this.handleSearchTerm.bind(this);
        this.getJobBags             = this.getJobBags.bind(this);

    }
    handleSearchTerm(e){
        const typeSearch = $(e.target).val();
        this.setState((prevState, props) => (
            {searchTerm: typeSearch}
        ));

        // Create a delay when typing
        var timer;
        if(typeSearch.length>4){
            clearTimeout(timer);
            var ms = 1000;
            timer = setTimeout(()=>{
                this.getJobBags();
            },ms);
        }else if(this.state.jobsFound.length>0){
            if(typeSearch.length<=4){
                this.setState((prevState,props)=>{
                        return {    jobsFound: []   }
                    }
                );
            }
        }

    }
    handleDateType(e, {value}){
        this.setState((prevState, props) => (
            {dateType: value}
        ),this.getJobBags);


    }
    handleChangeFilterType(e,{value}){
        this.setState((prevState, props) => (
            {filterJobType: value}
        ), this.getJobBags);

    }
    handleDatePickerChange(date,direction){
        if(direction == 'from'){
            this.setState((prevState, props) => (
                {selectedDateFrom: date }
            ), this.getJobBags);
        }else{

            this.setState((prevState, props) => (
                {selectedDateTo: date }
            ), this.getJobBags);
        }
    }
    getJobBags(){
        this.setState((prevState, props) => (
            {
                isLoading: true
            }
        ));
        const calendar_department_api   = this.props.settings.setting.react_api_folder+"/manage_jobs_actions/mj_get_job_bags.php";
        const postData    = {
                date_from: this.state.selectedDateFrom.format('DD/MM/YYYY'),
                date_to: this.state.selectedDateTo.format('DD/MM/YYYY'),
                job_type: this.state.filterJobType,
                date_field: this.state.dateType,
                search_terms: this.state.searchTerm
        };
        const prom        = axios.post(calendar_department_api,postData);
        console.log("getJobBags: ", postData);
        prom.then((res)=>{
            console.log("Jobs Page: ",res.data);
            const jobsDp          = res.data.payload;
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
    componentWillReceiveProps(nextprops){
        if(nextprops.manage_job_update_views){
            this.getJobBags();
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
                                       name='job_type1'
                                       value='once'
                                       checked={this.state.filterJobType === 'once'}
                                       onChange={this.handleChangeFilterType}
                                   />
                                   &nbsp; &nbsp;
                                   <Radio
                                       label='Recurring'
                                       name='job_type2'
                                       value='recurring'
                                       checked={this.state.filterJobType === 'recurring'}
                                       onChange={this.handleChangeFilterType}
                                   />
                                   &nbsp;&nbsp;&nbsp;&nbsp;
                                   <div className="ui input">
                                       <input type="text" placeholder="Search..." onChange={this.handleSearchTerm}></input>
                                        &nbsp;&nbsp;&nbsp;
                                       <Dropdown placeholder='Select Date Type'
                                                 inline
                                                 selection
                                                 options={this.state.optionsDateType}
                                                 className="dateType"
                                                 value={this.state.dateType}
                                                 onChange={this.handleDateType} />
                                   </div>
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
function mapDispatchToProps(dispatch){
    return({
        manage_job_update_views: (settings)=>{
            dispatch(manage_job_update_views(settings));
        }
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(ManageJobs_JobsPage);
