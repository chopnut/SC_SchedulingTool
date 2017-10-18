import React, { Component } from 'react';
import axios from 'axios';

export default class AddEditJobForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            job: undefined ,
            jobsFound: [],
            isSaving: 0,
            isSearching: 0,
            isNew: true,
            id: 0
        };

        // DEVELOPER FUNCTIONS

        this.prepopulateFromPrism = this.prepopulateFromPrism.bind(this);
        this.saveOrEdit = this.saveOrEdit.bind(this);
        this.showSearching = this.showSearching.bind(this);
        this.prepopulateSelect = this.prepopulateSelect.bind(this);
        this.prepopulateClear  = this.prepopulateClear.bind(this);

    }
    componentDidMount(){
        $('#due_date').datepicker({dateFormat: "dd/mm/yy",setDate: new Date()});
        $('#print_date').datepicker({dateFormat: "dd/mm/yy",setDate: new Date()});
        $('#lodgement_date').datepicker({dateFormat: "dd/mm/yy",setDate: new Date()});
    }

    //-------------------------------------
    // User created function below
    //-------------------------------------
    saveOrEdit(){

    }
    showSearching(){}

    // clear the search result
    prepopulateClear() {
        this.setState({jobsFound: []});
    }
    // Select and prepopulate the form with the selected jobbag
    prepopulateSelect(jobsKey){
        let job = this.state.jobsFound[jobsKey];
        this.setState({job});
        console.log("From onclick",job);
    }
    prepopulateFromPrism(event){
        this.setState({ isSearching: 1});
        let typeSearch = event.target.value;
        const reactApiFolder = this.props.store.getState().settings.react_api_folder;
        let jobsFound = this.state.jobsFound;


        // Create a delay whenever sometime on something for a few milliseconds
        var timer;
        if(typeSearch.length>4){
            clearTimeout(timer);
            var ms = 500;
            timer =setTimeout(()=>{

                const reactApiPrePop = reactApiFolder+'manage_jobs_prepopulate.php?q='+typeSearch;
                const promiseJobResult = axios.get(reactApiPrePop);

                promiseJobResult.then((res)=>{
                    let jobs = res.data;
                    this.setState ( { jobsFound: jobs});
                    // console.log(this.state.jobsFound);
                    }
                )
            },ms);


        }else if(jobsFound.length>0){
            if(typeSearch.length<=4){
                this.setState ( { jobsFound: []});

            }
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
                        <a href="javascript:;" onClick={() => this.prepopulateSelect(i)}>{element.jobNum}{" - "}{element.title} - {element.addDate}</a>
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

        let settings = this.props.store.getState().settings;
        let job_status = JSON.parse(settings.job_status);

        let SelectJobStatus = () =>{
            return (
                <select>
                    <option>Choose job status</option>
                    { job_status.map(function(item,i){
                        return (
                            <option>{item}</option>
                        );
                    })}
                </select>
            );
        }

        return (

            <div>
                <form className="ui form">
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
                                        <input type="text" name="job_title" placeholder="Job Title" id="job_title" value={this.state.job?this.state.job.title:''}/>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <div className="two fields">
                                        <div className="field">
                                            <label>Job bag number</label>
                                            <input type="text" name="job_number" placeholder="Job Number" id="job_number" value={this.state.job?this.state.job.jobNum:''}/>
                                        </div>
                                        <div className="field">
                                            <label>Quantity</label>
                                            <input type="text" name="job_qty" placeholder="Job Quantity" id="job_qty" value={this.state.job?this.state.job.jobQty:''}/>
                                        </div>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="three fields">
                                        <div className="field">
                                            <label>Due date</label>
                                            <input type="text" name="due_date" placeholder="DD/MM/YY" id="due_date" value={this.state.job?this.state.job.lodgeDate:''}/>
                                        </div>
                                        <div className="field">
                                            <label>Print date</label>
                                            <input type="text" name="print_date" placeholder="DD/MM/YY" id="print_date" value={this.state.job?this.state.job.printDate:''}/>
                                        </div>
                                        <div className="field">
                                            <label>Lodgement date</label>
                                            <input type="text" name="lodgement_date" placeholder="DD/MM/YY" id="lodgement_date" value={this.state.job?this.state.job.lodgeDate:''}/>
                                        </div>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="inline fields">
                                        <div className="field">
                                            <label>Status</label>
                                           <SelectJobStatus />
                                        </div>
                                        <div className="field">
                                              <label>Job Type</label>
                                              <div className="ui radio checkbox">
                                                <input type="radio" name="job_type" tabIndex="0" />
                                                <label>Once</label>
                                              </div>
                                        </div>
                                        <div className="field">
                                              <div className="ui radio checkbox">
                                                <input type="radio" name="job_type" tabIndex="0" />
                                                <label>Recurrence</label>
                                              </div>
                                        </div>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="field">
                                        <label>Comments</label>
                                        <textarea name="job_comments">

                                        </textarea>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>

                                    <button className={"positive ui button "+(this.state.isSaving?"loading":"")} onClick={this.saveOrEdit}><i className="save icon"></i> Save</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </form>
            </div>
        );
    }

}
