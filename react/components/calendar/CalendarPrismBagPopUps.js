import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink,Route} from 'react-router-dom';
import {withRouter } from 'react-router-dom';

// Calendar Date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import {showJobType,showDropDown} from "../../common/CommonUI";

class CalendarPrismBagPopUps extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            jobType: "once",
            startDate: moment(),
            is_saving: false,
            added: false,
            checkError: { err: 0 , msg: []}
        }
        this.handleChange           = this.handleChange.bind(this);
        this.handleChangeJobType    = this.handleChangeJobType.bind(this);
        this.handleViewEdit         = this.handleViewEdit.bind(this);
    }
    componentDidMount(){
        this.setState(function(state,props){
            return ({state,isLoading: false});
        });
    }
    handleChangeJobType(e){
        const jobType = e.target.value;
        this.setState((prevState,props)=>{
            return({jobType});
        });
    }
    handleChange(date){
        this.setState(function(state,props){
            return ({state,startDate: date});
        });
    }
    // Redirect to the view/edit page.
    handleViewEdit(){
        const { history } = this.props;
        history.push('/managejobs/newedit/'+this.props.job.job_id);
    }
    render(){
        if(this.state.isLoading){
            return(<div>Loading...</div>);
        }else{
            let buttonSavingClass =  "ui small button";
            if(this.state.is_saving){
                buttonSavingClass =  "ui small loading button";
            }
            let buttonSaving      =  <button className={buttonSavingClass} onClick={
                (e)=>{
                    e.preventDefault();
                    const checkError = this.props.handleCheckError();
                    // If there is no error submit otherwise show error
                    if(checkError.err == 0){
                        this.setState((prevState, props) => (
                            {is_saving: true}
                        ), (e)=>{
                            this.props.addToSchedule(this.state.startDate.format("DD/MM/YYYY"),this.state.jobType );
                        });
                    }else{
                        // Update the state to show error and re-render
                        this.setState((prevState, props) => (
                            {checkError}
                        ));
                        alert("Add atleast one department.");
                    }
                }
            }  >Schedule Job to</button>;

            if(this.props.job.isAdded){
                buttonSaving      =  <button className={buttonSavingClass} onClick={this.handleViewEdit}  >View/Edit Job Bag</button>;
            }

            const addSchedule = ()=>{
                return(
                    <div className="schedule_to_container">
                        <div className="two fields">
                            {buttonSaving}
                            <span className="ui input">
                                              <DatePicker
                                                  selected={this.state.startDate}
                                                  onChange={this.handleChange}
                                                  shouldCloseOnSelect={false}
                                                  placeholderText="Pick a date to add to"
                                                  dateFormat="DD/MM/YYYY"
                                                  className="job_card_datepicker"
                                              />
                                            </span>
                        </div>
                        {showJobType(this.state.jobType,this.handleChangeJobType,true)}

                        <div className="departments">
                            <input type="hidden" name={"job_departments"} id={"job_departments"} value={this.props.departmentValues} />
                            {showDropDown(
                                this.props.departmentOptions,
                                this.props.departmentValues,
                                this.props.handleChangeDepartment,
                                "Pick departments",
                                "job_departments"
                            )}
                        </div>

                    </div>
                );
            }

            const viewSchedule = ()=>{
                return (
                    <div className="schedule_to_container">
                        {buttonSaving}
                    </div>
                );
            }
            return(
            <div style={{width: '300px'}} className="job_card">

                <header>
                    <div className="first">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="cell_prism_number">JOB NUMBER: {this.props.job.job_prism_number} </td>
                                    <td className="cell_qty"><span className="job_qty"> {Math.round(parseInt(this.props.job.job_qty))}</span></td>
                                </tr>
                                <tr><td colSpan="3" className="title">{this.props.job.job_title}</td></tr>
                                <tr><td colSpan="3" className="customer">{this.props.job.job_customer_name}</td></tr>
                            </tbody>
                        </table>
                    </div>

                </header>
                <div className="body">
                    <table>
                        <tbody>
                            <tr>
                                <td className="label">Lodgement </td>
                                <td className="val">{this.props.job.job_due_date} </td>
                            </tr>
                            <tr>
                                <td className="label">Added </td>
                                <td className="val">{this.props.job.job_added_date}</td>
                            </tr>
                            <tr>
                                <td className="label">Print </td>
                                <td className="val">{this.props.job.job_print_date}</td>
                            </tr>
                            <tr>
                                <td className="label" colSpan={2}>Information </td>
                            </tr>
                            <tr>
                                <td className="info" colSpan={2}>No information yet. </td>
                            </tr>
                            <tr>
                                <td className="info" colSpan={2}>

                                    {
                                        (this.props.job.isAdded? viewSchedule() : addSchedule())
                                    }

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>);
        }
    }
}
function mapStateToProps(state,ownprops) {
    return{
        departmentOptions: state.settings.departmentOptions
    }
}
function mapDispatchToProps(dispatch){
    return({

    })
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CalendarPrismBagPopUps));
