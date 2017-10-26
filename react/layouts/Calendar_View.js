import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

// Calendar Date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

// User define components
import CalendarRow from "../components/CalendarRow";
import CalendarPrismSidebar from "../components/CalendarPrismSidebar";

class Calendar_View extends Component {
	constructor(props){
		super(props);

        const calendar_page  = props.calendar_page;
        const sunday         = calendar_page.days[0];
        const saturday       = calendar_page.days[6];


        this.state = {
            calendar_page,
            calendar_jobs: [],
            departments: [],
            departmentsOrder: [],
            sunday,
            saturday,
            calendar_date: moment()
        };

        this.handleCalendarFunction = this.handleCalendarFunction.bind(this);
	}
	// Render rows for the calendar
    renderDepartments(){
        const calendarDays = this.state.calendar_page.days;
        let rowsCollection = [];

	    function inlineRecursive(item,rowcollection){

            const title     = item.title;
            const id        = item.id;
            const numkids   = item.kids.length;
            const isParent  = (numkids>0);

            if(numkids>0){
                rowcollection.push(<CalendarRow title={title} isParent={isParent} days={calendarDays} departmentId={id}/>);

                for(let value of item.kids){
                    inlineRecursive(value,rowcollection);
                }
            }else{
                rowcollection.push(<CalendarRow title={title} isParent={isParent} days={calendarDays} departmentId={id}/>);
            }

        }
        this.state.departmentsOrder.map(function(item){
            inlineRecursive(item,rowsCollection);
        })
        return (rowsCollection);

    }
    // Calendar Function on right side
    handleCalendarFunction(date){
        this.setState(function(state,props){
            return ({state,calendar_date: date});
        });
    }
	componentDidMount(){

	    // Get the departments from API Call from axios
        // This will build the rows and cells based on the departments and calendar_page.days
	    const calendar_department_api = this.props.settings.react_api_folder+"calendar_department_structure.php";
        const promiseDepartments = axios.get(calendar_department_api);

        promiseDepartments.then((res)=>{
            const depsInfo          = res.data;
            const departments       = depsInfo.departments;
            const departmentsOrder  = depsInfo.departmentsOrder;

            this.setState((prevState, props) => ({departments,departmentsOrder}));

        });
    }
	render(){
        return(
            <div className="calendar_view">
                <div className="first">
                    <div className="left">
                        <h2 className="title">
                            <img src="assets/img/scheduler_icon.svg" width="30" height="30" className="calendar_icon"/> Scheduler v1
                        </h2>
                        <div className="body">
                            <span className="previous"> <i className="chevron circle left icon"></i> </span>
                            <span className="range_date">
                                   {this.state.sunday.date} - {this.state.saturday.date}
                               </span>
                            <span className="next"> <i className="chevron circle right icon"></i> </span>

                            <span className="calendar_holder">
                                <i className="calendar outline icon"></i>
                                <span className="change_range_label">Change date range </span>
                                <span className="ui input">
                               <DatePicker
                                   selected={this.state.calendar_date}
                                   onChange={this.handleCalendarFunction}
                                   dateFormat="DD/MM/YYYY"
                                   className = "mini_calendar_text_field"
                               />
                            </span>
                        </span>
                        </div>
                    </div>
                    <div className="right">

                    </div>
                </div>
                <div className="second">
                    <div className="left">
                        <table className="ui purple celled table">
                            <thead>
                            <tr><th className="header_department_label"><i className="bicycle icon"></i> Department</th>{this.state.calendar_page.days.map(function(item){
                                let className = "header_date";

                                if(item.date == this.props.web.today){
                                    className = className+" today";

                                }
                                return (<th className={className}>
                                    <span className="day_label">{item.day}</span><br/>
                                    <span className="date_label">{item.date}</span></th>);
                            }.bind(this))}</tr>


                            </thead>
                            <tbody>
                            {this.renderDepartments()}
                            </tbody>
                        </table>
                    </div>
                    <div className="right">
                        <header>
                            <span className="label">Prism Job Bags Available</span><br/>
                            <span className="range">{this.state.sunday.date} - {this.state.saturday.date}</span>
                        </header>
                        <article>
                            <CalendarPrismSidebar days={this.state.calendar_page.days} calendar_jobs={this.state.calendar_jobs}/>
                        </article>
                    </div>
                </div>
            </div>
        );

	}
}
function mapStateToProps(state,ownprops) {
    return{
        settings: state.settings,
        calendar_page: state.calendar_page,
    }
}
export default connect(mapStateToProps,null,null,{pure: false})(Calendar_View);
