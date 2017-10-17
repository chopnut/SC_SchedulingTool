import React, { Component } from 'react';

export default class AddEditJobForm extends Component {
    constructor(props){
        super(props);
        this.state = { 
            job: [] ,
            isSaving: false, 
            isNew: true,
            jobsAdded: []
        };

        
    }
    componentDidMount(){
        $('#due_date').datepicker({dateFormat: "dd/mm/yy",setDate: new Date()});
        $('#print_date').datepicker({dateFormat: "dd/mm/yy",setDate: new Date()});
        $('#lodgement_date').datepicker({dateFormat: "dd/mm/yy",setDate: new Date()});
    }
    prepopulateFromPrism(){

    }

    saveOrEdit(){

    }
    render(){


        return (
            <div>
                <form className="ui form">
                    <table className="job_bag_add_edit">
                        <tbody>
                            <tr>
                                <td >
                                    <div className="field">
                                        <label>Pre-populate from Prism</label>
                                        <input type="text" name="job_title" placeholder="Job Title" />
                                    </div>
                                </td>
                       
                            </tr>
                            <tr>
                                <td>
                                    <div className="two fields">
                                        <div className="field">
                                            <label>Type Job bag number</label>
                                            <input type="text" name="job_number" placeholder="Job Number" />
                                        </div>
                                        <div className="field">
                                            <label>Quantity</label>
                                            <input type="text" name="job_qty" placeholder="Job Quantity" />
                                        </div>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="three fields">
                                        <div className="field">
                                            <label>Due date</label>
                                            <input type="text" name="due_date" placeholder="DD/MM/YY" id="due_date"/>
                                        </div>
                                        <div className="field">
                                            <label>Print date</label>
                                            <input type="text" name="print_date" placeholder="DD/MM/YY" id="print_date"/>
                                        </div>
                                        <div className="field">
                                            <label>Lodgement date</label>
                                            <input type="text" name="lodgement_date" placeholder="DD/MM/YY" id="lodgement_date"/>
                                        </div>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="inline fields">
                                        <div className="field">
                                            <label>Status</label>
                                            <input type="text" name="job_status" placeholder="DD/MM/YY" />
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
                                
                                    <button className={"positive ui button "+(this.state.isSaving?"loading":"")}><i className="save icon"></i> Save</button>
                               
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }

}
