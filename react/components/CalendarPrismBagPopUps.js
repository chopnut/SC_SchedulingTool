import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

// Calendar Date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

// Get actions for calendar page
import {calendar_page_add_schedule_to} from '../actions/CalendarActions';

class CalendarPrismBagPopUps extends Component {
    constructor(props){
        super(props);
        this.state = {
           isLoading: true,
            isSaving: false,
            startDate: moment()

        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        this.setState(function(state,props){
            return ({state,isLoading: false});
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
                        </tbody>
                    </table>
                </div>
                <footer>
                    <div className="two fields">
                        <button className="ui mini button" onClick={()=>{this.props.calendar_page_add_schedule_to({test:"Hello world!"})}}  >Schedule Job to</button>

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
                </footer>
            </div>);
        }
    }
}
function mapStateToProps(state,ownprops) {
    return{
        user_details: state.user_details
    }
}
function mapDispatchToProps(dispatch){
    return({
        calendar_page_add_schedule_to
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarPrismBagPopUps);
