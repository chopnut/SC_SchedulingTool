import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import axios from 'axios';
import {NavLink,Route} from 'react-router-dom';
import {withRouter } from 'react-router-dom';

// UI Common functionality
import {showJobType,showDropDown} from "../../common/CommonUI";

// Get actions to save/new/edit
import {manage_job_add_new_edit} from '../../actions/ManageJobsActions';
let c = 0;
class AddEditJobForm extends Component {
    constructor(props){
        super(props);

        let settings        = this.props.settings;
        this.api_folder     = settings.setting.react_api_folder;
        this.job_status     = settings.setting.job_status;

        this.state = {
            job: {
                job_id: 0,
                job_prism_job_id: 0,
                job_prism_number: 0,
                job_title: "",
                job_colour: "",
                job_print_date: "",
                job_due_date: "",
                job_lodge_date: "",
                job_reports_ids:"",
                job_comments: "",
                job_status: "stand by",
                job_qty: 0,
                job_type: "once",
                job_departments: [],
                job_dp_date: "",
                job_customer_name: ""
            },
            isSearching: 0,
            isSaving: 0,
            jobsFound: [],
            err: 0,
            msg: "",

            // For programming section allocation

            programmers_selection:[],
            programmers_options:[],
            programmers_job_departments: []
        };

        // console.log("From addeditjobform ",settings);
        // DEVELOPER FUNCTIONS

        this.prepopulateFromPrism   = this.prepopulateFromPrism.bind(this);
        this.saveOrEdit             = this.saveOrEdit.bind(this);
        this.changeValue            = this.changeValue.bind(this);
        this.jobTypeChanged         = this.jobTypeChanged.bind(this);
        this.jobDepartmentChange    = this.jobDepartmentChange.bind(this);

        this.prepopulateSelect      = this.prepopulateSelect.bind(this);
        this.prepopulateJobBag      = this.prepopulateJobBag.bind(this);
        this.prepopulateClear       = this.prepopulateClear.bind(this);

        // Render Functions for other parts
        this.renderAssignProgrammer     = this.renderAssignProgrammer.bind(this);
        this.getApiProgrammersSection   = this.getApiProgrammersSection.bind(this);
        this.getApiJobDepartments       = this.getApiJobDepartments.bind(this);
        this.getApiProgrammers          = this.getApiProgrammers.bind(this);
    }
    // This will trigger when receiving a state change from global
    componentWillReceiveProps(nextProps){

        if (nextProps.manage_job_add_new_edit && nextProps.manage_jobs.resp) {
            const newData    = nextProps.manage_jobs.resp;
            const currentJob = this.state.job;

            console.log("Component will received from api: ",nextProps);
            const job  = newData.job;
            const msg  = newData.msg;
            const err  = newData.err;


            // UPDATE THE STATE NOW TO THE NEWLY CREATED JOB
            this.setState((prevState, props) => (
                {
                    job: job ,
                    isSaving: 0,
                    msg,
                    err
                }
            ));

        }
    }
    componentDidMount(){
        // Get job bag from url ID
        this.prepopulateJobBag();

        // Jquery DatePicker on change has to fire twice to update the ui
        let changeCalendar = this.changeValue;
        $('#job_due_date').datepicker({dateFormat: "dd/mm/yy",setDate: new Date(),changeYear: true, changeMonth: true }).on("input change",function(e){
            changeCalendar(e);
        });
        $('#job_print_date').datepicker({dateFormat: "dd/mm/yy",setDate: new Date(),changeYear: true, changeMonth: true }).on("input change",function(e){
            changeCalendar(e);
        });
        $('#job_lodge_date').datepicker({dateFormat: "dd/mm/yy",setDate: new Date(),changeYear: true, changeMonth: true }).on("input change",function(e){
            changeCalendar(e);
        })
        ;$('#job_dp_date').datepicker({dateFormat: "dd/mm/yy",setDate: new Date(),changeYear: true, changeMonth: true }).on("input change",function(e){
            changeCalendar(e);
        });
        // ----------------------------------------------------------------------------
        // Note: Creating and Editing a job is different.
        // Creating a job: When creating a job you need to allocate department date,
        // for the department tasks needs to be  present.
        // Editing a job: You dont need scheduled date
        // Apply the validation rule when creating a new job turn into editing mode.
        // ----------------------------------------------------------------------------

        // VALIDATION INITIALIZATION 1: FOR CREATING
        $('.ui.form')
            .form({
                on: 'blur',
                fields: {
                    job_title: {
                        identifier: 'job_title',
                        rules: [
                            {
                                type   : 'empty',
                                prompt : 'Please enter job title'
                            }
                        ]
                    },
                    job_departments: {
                        identifier: 'job_departments',
                        rules: [
                            {
                                type   : 'empty',
                                prompt : 'Please choose at least one department.'
                            }
                        ]
                    },
                    job_dp_date: {
                        identifier: 'job_dp_date',
                        rules: [
                            {
                                type   : 'empty',
                                prompt : 'You must enter a scheduled date.'
                            }
                        ]
                    }
                }
            });

    }
    // API QUERY: For multiple API queries for programming section
    getApiProgrammersSection(){

        const job_departments = this.state.job.job_departments;

        // Only get assign programmers section when the department selected has programming as one of its department

        if($.inArray(job_departments, this.props.programming_dept_id)<0){
            this.getApiJobDepartments();
            this.getApiProgrammers();
        }
    }


    // API QUERY: For the assign programmers section
    getApiProgrammers(){

        const req  = this.props.settings.setting.react_api_folder+'/misc_actions/get_programmers.php';
        const prom_programmers = axios.get(req);
        prom_programmers.then((res)=>{
                let programmers = res.data.payload;
                this.setState((prevState, props) => (
                    {programmers_options: programmers}
                ));
            }
        )
    }

    // API QUERY: To get all the departments associate with the job bag
    getApiJobDepartments(){


        // Check if the job is recurring cause they will be multiple programming section for a recurring job
        // And if you are creating a job dont show the job departments as you dont have a job department created yet.

        if(this.state.job.job_type=='recurring' && this.state.job.job_id!=0){

            //
            const req  = this.props.settings.setting.react_api_folder+'/misc_actions/get_jobbags_departments.php';
            const prom_programmers = axios.get(req);
            prom_programmers.then((res)=>{
                    let programmers_job = res.data.payload;
                    this.setState((prevState, props) => (
                        {programmers_job_departments: programmers_job}
                    ));
                }
            )
        }
    }

    // Render the assign programmers section of the form
    renderAssignProgrammer(){

        const job_departments = this.state.job.job_departments;

        // --------------------------------------------------------
        // Job departments drop down for Editing a recurring job
        // --------------------------------------------------------


        let RecurringDepartmentsDropDown = () => {
            return (<div></div>);
        }

        if(this.state.job.job_type == 'once'){
            RecurringDepartmentsDropDown = () => {
                return (
                    <div className="field"><br/>
                        <label><i className="file text outline icon"></i> Edit Job Bag Department</label>

                    </div>
                );
            }
        }
        // --------------------------------------------------------
        // Programmers drop down
        // --------------------------------------------------------

        const ProgrammersDropdown = ()=>{
            return(
                <div className="field">
                    <label><i className="user circle icon" aria-hidden="true"></i> Assign Programmer(s) to a Job</label>
                    <input type="hidden" name="job_dp_allocated_to" id="job_dp_allocated_to" value={this.state.job.job_departments}/>
                    {showDropDown(
                        this.state.programmers_options,
                        this.state.programmers_selection,
                        this.handleProgrammersAssign,
                        "Pick Programmers",
                        "job_departments"
                    )}
                </div>
            );
        }


        // Only show the programming department is selected.
        if($.inArray(job_departments, this.props.programming_dept_id)<0){
            return (
                <div className="job_bag_programmer_assignment">
                    <RecurringDepartmentsDropDown />
                    <ProgrammersDropdown/>
                </div>
            );
        }
    }
    // Save the job created/edited

    saveOrEdit(e){

        // e.preventDefault(); // Prevent form to be submitted naturally
        const jobData = Object.assign({},this.state.job);

        // Validate your Job creation here
        if($('.ui.form').form("is valid")){
            this.setState((prevState, props) => ({isSaving: 1}) );
            this.props.manage_job_add_new_edit(this.props.settings,jobData);
        }

    }

    // Change value from form element to the state of the component

    changeValue(e){
        let input_name = e.target.name;
        let input_value= e.target.value;

        let job = Object.assign(this.state.job,{});
        job[input_name] = input_value;


        this.setState((prevState,props)=>{
                return ({job});
            }
        ); // Update the fields of the data
    }

    // Get the jobbag from database and start editing

    prepopulateJobBag(){
        console.log("Edit form initialize: ",this.props);
        const {history,location} = this.props;

        const splitPathname = location.pathname.split('/');
        const jobId         = parseInt(splitPathname[splitPathname.length-1]);

        // Check if the job number id

        if(jobId!="NaN" && jobId>0){
            const req  = this.props.settings.setting.react_api_folder+'/manage_jobs_actions/manage_jobs_get.php?job_id='+jobId;

            // Acquire from Prism get API
            axios.get(req).then(function(res){
                const job = res.data.job;

                // CONTINUE WITH EDITING EXISTING
                if(res.data.error==0 ){
                    this.setState((prevState, props) => (
                        {
                            job: job
                        }
                    ), ()=>
                        {
                            // Initialize when Editing a job
                            this.getApiProgrammersSection();
                        }
                    );

                    console.log("THIS IS JOB: ",job);


                    // VALIDATION INITIALIZATION 2: FOR EDITING
                    $('.ui.form')
                        .form({
                            on: 'blur',
                            fields: {
                                job_title: {
                                    identifier: 'job_title',
                                    rules: [
                                        {
                                            type   : 'empty',
                                            prompt : 'Please enter job title'
                                        }
                                    ]
                                },
                                job_departments: {
                                    identifier: 'job_departments',
                                    rules: [
                                        {
                                            type   : 'empty',
                                            prompt : 'Please choose at least one department.'
                                        }
                                    ]
                                }
                            }
                        });
                }else{
                // NO AVAILABLE JOB WITH THE PARTICULAR JOB ID REDIRECT
                    history.push('/managejobs/newedit/');
                }

            }.bind(this))

        // If length of the path name is 4, somebody is trying to edit something that doesnt exist.
        // redirect them
        }

    }
    // Departments on change
    jobDepartmentChange(e,{value}){
        const prevJobDepartments = _.cloneDeep(this.state.job.job_departments);
        const curJobDepartments  = {value}.value;
        const job = Object.assign({},this.state.job,{job_departments: curJobDepartments });

        this.setState((prevState, props) => ({
            job
        }), this.getApiProgrammersSection); // Initialize assign programmers on change

    }
    // Job type recurrence or once
    jobTypeChanged(e){
        let value = e.target.value;
        // alert(value);
        const job     = Object.assign(this.state.job,{job_type: value});
        this.setState((prevState,props)=>{
                return ({job});
            }
        );

    }
    // Select and prepopulate the form with the selected jobbag from prism
    prepopulateSelect(jobsKey){
        let jobs = JSON.parse(JSON.stringify( this.state.jobsFound));
        let job  = jobs[jobsKey];
        const newJob = Object.assign({},job,{
            job_comments: this.state.job.comments,
            job_type: this.state.job.job_type,
            job_departments: this.state.job.job_departments
        });

        this.setState((prevState,props)=>{
                return ({job: newJob})
            }
        );
    }
    componentDidUpdate(){   console.log("AddEditJobForm componentDidUpdate ", this.state.job); }
    // Grab jobs already in prism
    prepopulateFromPrism(event){

        this.setState({ isSearching: 1});
        let typeSearch = event.target.value;
        let jobsFound = this.state.jobsFound;


        // Create a delay when typing
        var timer;
        if(typeSearch.length>4){
            clearTimeout(timer);
            var ms = 200;
            timer = setTimeout(()=>{

                const reactApiPrePop = this.api_folder+'manage_jobs_prepopulate.php?q='+typeSearch;
                const promiseJobResult = axios.get(reactApiPrePop);

                promiseJobResult.then((res)=>{
                        let jobs = res.data;

                        console.log("Prepopulate: ",jobs);
                        this.setState((prevState,props)=>{
                                return {jobsFound: jobs,isSearching: 0}
                            }
                        );
                    }
                )
            },ms);
        }else if(jobsFound.length>0){
            if(typeSearch.length<=4){
                this.setState((prevState,props)=>{
                        return {jobsFound: [],isSearching: 0}
                    }
                );
            }
        }

    }
    // Clear the jobs from the search prism job
    prepopulateClear() {
        this.setState(function(prevState,props){
            return ({jobsFound: [] });
        });
    }

    showHeader(){
        if(this.state.job.job_id>0){
            return (
                <header className="manage_page_ce_header">
                    <span className="head manage_edit">
                       <i className="edit icon"></i> Editing <span className="title">{this.state.job.job_title}</span>
                    </span>
                </header>
            );
        }else{
            return (
                <header className="manage_page_ce_header">
                    <span className="head manage_new">
                       <i className="folder outline icon"></i> Creating new job
                    </span>
                </header>
            );
        }
    }



    render(){

        let elements = this.state.jobsFound.map(
            (element,i) =>{
                if(element.left){
                    return "";
                }
                return (<div className="search_selected">
                    <span>
                        <a href="javascript:;" onClick={() => this.prepopulateSelect(i)}>{element.job_prism_number} {element.job_title}</a>
                    </span>
                </div>);
            }
        );

        // Another way to create a component and must be first letter Cap
        let SearchResult = null;
        if(this.state.jobsFound.length>0){
            SearchResult = () => {
                return (
                    <div>
                        <strong>Search Results</strong> <a onClick={this.prepopulateClear} ><i className="ui remove icon" style={{color: 'black', cursor: 'pointer'}}></i></a><br/>
                        {elements}
                    </div>
                )
            }
        }

        // Get status for the job
        let job_status      = JSON.parse(this.job_status);
        let SelectJobStatus = (props) =>{
            return (
                <select name="job_status" value={this.state.job.job_status} onChange={this.changeValue}>
                    <option value="">Choose job status</option>
                    { job_status.map(function(item,i){
                        return (<option value={item} key={i}>{item}</option>);
                    })}
                </select>
            );
        }

        let SelectAndRadio = () => {
            return(
                <div className="inline three fields">
                    <div className="field">
                        <label><i className="fa fa-heart" aria-hidden="true"></i> Status</label>
                        <SelectJobStatus />
                    </div>
                    {showJobType(this.state.job.job_type,this.jobTypeChanged,true)}
                </div>

            );
        }
        // If job is recurring get the all recent programming job and select it to be assigned

        return (
            <div className="manage_job_ce_container">
                <form className="ui form" onSubmit={(e)=>{  e.preventDefault();  }} method="post">
                    <input type="hidden" name="job_id" value={this.state.job.job_id} />
                    {
                        this.showHeader()
                    }
                    <table className="job_bag_add_edit">
                        <tbody>
                        <tr>
                            <td >
                                <div className="ui error message"></div>
                                <div className="field">
                                    <label>
                                        Search for Job bag by Number or Title from PRISM to link and pre-populate the fields [OPTIONAL]
                                    </label>
                                    <input type="text" name="job_search" placeholder="Type Job Number or Title to pre-populate or leave empty." id="job_search" onChange={this.prepopulateFromPrism} />
                                </div>
                                {(SearchResult)?<SearchResult />:""}
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <div className="field">
                                    <label>
                                        Job Title
                                    </label>
                                    <input type="text" name="job_title" placeholder="Job Title" id="job_title" value={this.state.job.job_title} onChange={this.changeValue}/>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div className="three fields">
                                    <div className="field">
                                        <label><i className="fa fa-shopping-bag" aria-hidden="true"></i> Job bag number</label>
                                        <input type="text" name="job_prism_number" placeholder="Job Number" id="job_prism_number" value={this.state.job.job_prism_number}  onChange={this.changeValue}/>
                                    </div>
                                    <div className="field">
                                        <label><i className="calculator icon"></i> Quantity</label>
                                        <input type="text" name="job_qty" placeholder="Job Quantity" id="job_qty" value={this.state.job.job_qty} onChange={this.changeValue}/>
                                    </div>
                                    <div className="field">
                                        <label><i className="calculator icon"></i> Customer Name</label>
                                        <input type="text" name="job_customer_name" placeholder="Customer Name" id="job_customer_name" value={this.state.job.job_customer_name} onChange={this.changeValue}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="four fields">
                                    <div className="field">
                                        <label><i className="calendar icon"></i> Scheduled Date </label>
                                        <input type="text" name="job_dp_date" placeholder="DD/MM/YY" id="job_dp_date" value={this.state.job.job_dp_date}/>
                                    </div>
                                    <div className="field">
                                        <label><i className="calendar icon"></i> Due date </label>
                                        <input type="text" name="job_due_date" placeholder="DD/MM/YY" id="job_due_date" value={this.state.job.job_due_date}   />
                                    </div>
                                    <div className="field">
                                        <label><i className="calendar icon"></i> Print date </label>
                                        <input type="text" name="job_print_date" placeholder="DD/MM/YY" id="job_print_date" value={this.state.job.job_print_date}  />
                                    </div>
                                    <div className="field">
                                        <label><i className="calendar icon"></i> Lodgement date </label>
                                        <input type="text" name="job_lodge_date" placeholder="DD/MM/YY" id="job_lodge_date" value={this.state.job.job_lodge_date} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <SelectAndRadio />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="field">
                                    <label><i className="fa fa-tasks" aria-hidden="true"></i> Create Department Tasks</label>
                                    <input type="hidden" name="job_departments" id="job_departments" value={this.state.job.job_departments}/>
                                        {
                                            showDropDown(
                                            this.props.settings.departmentOptions,
                                            this.state.job.job_departments,
                                            this.jobDepartmentChange,
                                            "Pick departments",
                                            "job_departments")
                                        }
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                { this.renderAssignProgrammer()}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="field">
                                    <label><i className="fa fa-comment" aria-hidden="true"></i> Comments</label>
                                    <textarea name="job_comments" onChange={this.changeValue} value={this.state.job.job_comments}></textarea>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <br/>
                                <button className={"positive ui button "+(this.state.isSaving?"loading":"")}
                                        onClick={this.saveOrEdit} ><i className="save icon"></i> Save</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }


}
function mapStateToProps(state,ownprops) {
    return{
        settings: state.settings,
        manage_jobs: state.manage_jobs,
        programming_dept_id: state.settings.setting.programming_dept_id
    }
}
function mapDispatchToProps(dispatch){
    return{
        manage_job_add_new_edit: (settings, job)=>{
            dispatch(manage_job_add_new_edit(settings, job));
        }
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AddEditJobForm));
