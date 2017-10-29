import React, { Component } from 'react';
import {connect} from 'react-redux';

// Calendar Date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import {showJobType} from "../common/JobBagCommonUI";



class CalendarPrismBagPopUps extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            jobType: "once",
            startDate: moment()

        }
        this.handleChange        = this.handleChange.bind(this);
        this.handleChangeJobType = this.handleChangeJobType.bind(this);

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

    render(){
        if(this.state.isLoading){
            return(<div>Loading...</div>);
        }else{
            let buttonSavingClass =  "ui mini button";
            if(this.props.isSaving){
                buttonSavingClass =  "ui mini loading button";
            }
            let buttonSaving      =  <button className={buttonSavingClass} onClick={()=>{ this.props.addToSchedule(this.state.startDate.format("DD/MM/YYYY"),this.state.jobType ) }}  >Schedule Job to</button>;
            if(this.props.isAlreadyScheduled){
                buttonSaving      =  <button className={buttonSavingClass} onClick={this.props.viewSchedule}  >View Job Schedule</button>;
            }

            return(
            <div style={{width: '300px'}} className="job_card">
                <header>
                    <div className="first">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="cell_prism_number">{this.props.job.job_prism_number} </td>
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
                                    </div>

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
    }
}
function mapDispatchToProps(dispatch){
    return({

    })
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarPrismBagPopUps);
