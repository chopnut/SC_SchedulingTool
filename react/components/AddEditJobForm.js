import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

// UI Common functionality
import {showJobType,showDropDownDepartments} from "../common/JobBagCommonUI";

// Get actions to save/new/edit
import {manage_job_add_new_edit} from '../actions/ManageJobsActions';

class AddEditJobForm extends Component {
    constructor(props){
        super(props);

        let settings        = this.props.settings;

        this.api_folder = settings.setting.react_api_folder;
        this.job_status = settings.setting.job_status;


        this.state = {
            job: {
                job_prism_job_id: 0,
                job_prism_number: 0,
                job_title: "",
                job_print_date: "",
                job_due_date: "",
                job_lodge_date: "",
                job_reports_ids:"",
                job_qty: "",

                job_colour: "",
                job_status: "",
                job_comments: "",
                job_type: "once",

                job_departments: []
            } ,
            jobsFound: [],
            isSaving: 0,
            isSearching: 0,
            id: 0
        };


        // console.log("From addeditjobform ",settings);
        // DEVELOPER FUNCTIONS

        this.prepopulateFromPrism   = this.prepopulateFromPrism.bind(this);
        this.saveOrEdit             = this.saveOrEdit.bind(this);
        this.prepopulateSelect      = this.prepopulateSelect.bind(this);
        this.prepopulateClear       = this.prepopulateClear.bind(this);
        this.changeValue            = this.changeValue.bind(this);
        this.jobTypeChanged         = this.jobTypeChanged.bind(this);
        this.jobDepartmentChange    = this.jobDepartmentChange.bind(this);

    }
    // Initlialization happens below
    componentDidUpdate(){
        // do your validation down  here
        // use semantic-ui validation
    }
    // Departments on change
    jobDepartmentChange(e,{value}){
        const job = Object.assign({},this.state.job,{job_departments: {value}.value });
        // Do more processing so not to delete any departments that is already in the database

        if(this.state.id==0){
            this.setState((prevState, props) => ({job}));
        }

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

    //-------------------------------------
    // User created function below
    //-------------------------------------
    saveOrEdit(e){

        e.preventDefault(); // Prevent form to be submitted naturally
        const jobData = Object.assign({},this.state.job,{id: this.state.id});
        this.setState((prevState, props) => ({isSaving: 1}) );

        this.props.manage_job_add_new_edit(this.props.settings,jobData);
    }
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
    // clear the search result
    prepopulateClear() {
        this.setState(function(prevState,props){
            return ({jobsFound: [] });
        });
    }
    // Select and prepopulate the form with the selected jobbag
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

        // job_status: "",
        //     job_comments: "",
        //     job_type: "once",
        //
        //     job_departments: []
        // console.log("From onclick",job);
    }
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
    componentDidMount(){
        // Jquery DatePicker on change has to fire twice to update the ui
        let changeCalendar = this.changeValue;
        $('#job_due_date').datepicker({dateFormat: "dd/mm/yy",setDate: new Date()}).on("input change",function(e){
            changeCalendar(e);
        });
        $('#job_print_date').datepicker({dateFormat: "dd/mm/yy",setDate: new Date()}).on("input change",function(e){
            changeCalendar(e);
        });
        $('#job_lodge_date').datepicker({dateFormat: "dd/mm/yy",setDate: new Date()}).on("input change",function(e){
            changeCalendar(e);
        });
    }
    render(){
        let elements = this.state.jobsFound.map(
            (element,i) =>{
                if(element.left){
                    return "";
                }
                return (<div className="search_selected">
                    <span>
                        <a href="javascript:;" onClick={() => this.prepopulateSelect(i)}>{element.job_prism_number}{" - "}{element.job_title} - {element.job_due_date}</a>
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

        let job_status = JSON.parse(this.job_status);
        let SelectJobStatus = (props) =>{
            const selected = props.selected;

            return (
                <select name="job_status" value={selected} onChange={this.changeValue}>
                    <option value="">Choose job status</option>
                    { job_status.map(function(item,i){
                        return (<option value={item} key={i}>{item}</option>);
                    })}
                </select>
            );
        }




        let SelectAndRadio = (props) => {
            let selected = props.type;
            let jobstatus   = props.status;

            return(
                <div className="inline three fields">
                    <div className="field">
                        <label><i className="fa fa-heart" aria-hidden="true"></i> Status</label>
                        <SelectJobStatus selected = {jobstatus}/>
                    </div>
                    {showJobType(selected,this.jobTypeChanged,true)}
                </div>

            );
        }


        return (

            <div>
                <form className="ui form" onSubmit={(e)=>{ e.preventDefault(); }}>
                    <input type="hidden" name="job_id" value={this.state.id || 0} />
                    <table className="job_bag_add_edit">
                        <tbody>
                        <tr>
                            <td >
                                <div className="field">
                                    <label>
                                        Search for Job by Number or Title from PRISM to link and pre-populate the fields [OPTIONAL]
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
                                <div className="two fields">
                                    <div className="field">
                                        <label><i className="fa fa-shopping-bag" aria-hidden="true"></i> Job bag number</label>
                                        <input type="text" name="job_prism_number" placeholder="Job Number" id="job_prism_number" value={this.state.job.job_prism_number}  onChange={this.changeValue}/>
                                    </div>
                                    <div className="field">
                                        <label>Quantity</label>
                                        <input type="text" name="job_qty" placeholder="Job Quantity" id="job_qty" value={this.state.job.job_qty} onChange={this.changeValue}/>
                                    </div>

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="three fields">
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
                                <SelectAndRadio type={this.state.job.job_type} status={this.state.job.job_status} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="field">
                                    <label><i className="fa fa-tasks" aria-hidden="true"></i> Create Department Tasks</label>
                                    {showDropDownDepartments(this.props.settings.departmentOptions,
                                        this.state.job.job_departments,
                                        this.jobDepartmentChange)}
                                </div>
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
                                        onClick={this.saveOrEdit}><i className="save icon"></i> Save</button>
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
    }
}
function maptDispatchToProps(dispatch){
    return{
        manage_job_add_new_edit: (settings, job)=>{
            dispatch(manage_job_add_new_edit(settings, job));
        }
    }
}
export default connect(mapStateToProps,maptDispatchToProps)(AddEditJobForm);
