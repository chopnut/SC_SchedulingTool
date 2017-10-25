import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

// User define components
import CalendarRow from "../components/CalendarRow";
import CalendarPrismSidebar from "../components/CalendarPrismSidebar";

class Calendar_View extends Component {
	constructor(props){
		super(props);

        const calendar_page  = props.calendar_page;
        const user_detail    = props.user_detail;
        const sunday         = calendar_page.days[0];
        const saturday       = calendar_page.days[6];


        this.state = {user_detail,
            calendar_page,
            calendar_jobs: [],
            departments: [],
            departmentsOrder: [],
            sunday,
            saturday
        };

        this.renderDepartments = this.renderDepartments.bind(this);
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
	    let today = this.props.today;

		return(
               <div className="calendar_view">
                   <div className="first">
                       <div className="left">
                           <div className="body">
                               <span className="previous"> <i className="chevron circle left icon"></i> </span>
                               <span className="range_date">
                                   {this.state.sunday.date} - {this.state.saturday.date}
                               </span>
                               <span className="next"> <i className="chevron circle right icon"></i> </span>
                           </div>
                       </div>
                       <div className="right">
                            Change date in here
                       </div>
                   </div>
                   <div className="second">
                       <div className="left">
                            <table className="ui purple celled table">
                                <thead>
                                    <tr><th className="header_department_label"><i className="bicycle icon"></i> Department</th>{this.state.calendar_page.days.map(function(item){
                                            let className = "header_date";
                                            if(item.date == today){
                                                className = className+" today";
                                            }
                                            return (<th className={className}>
                                                    <span className="day_label">{item.day}</span><br/>
                                                    <span className="date_label">{item.date}</span></th>);
                                        })}</tr>
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
        user_detail: state.user_detail,
        calendar_page: state.calendar_page,
        today: state.todays_date
    }
}
export default connect(mapStateToProps,null,null,{pure: false})(Calendar_View);
