import React, { Component } from 'react';
import {connect} from 'react-redux';

class Calendar_View extends Component {
	constructor(props){
		super(props);

        const calendar_page  = props.calendar_page;
        const user_detail    = props.user_detail;

        const sunday         = calendar_page.days[0];
        const saturday       = calendar_page.days[6];
        const today          = props.todays_date;

        this.state = {user_detail,
            calendar_page,
            calendar_page_jobs: [],
            sunday,
            saturday
        };

	}
	componentWillMount(){

    }
	renderLinkManager(){

    }
	render(){

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

                       </div>
                   </div>
                   <div className="second">
                       <div className="left">
                            <table className="ui purple celled table">
                                <thead>
                                    <th>Department</th>
                                    {
                                        this.state.calendar_page.days.map(function(item){
                                            return (
                                                <th>
                                                    <span>{item.day}</span><br/>
                                                    <span>{item.date}</span><br/>
                                                </th>
                                            );
                                        })
                                    }
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                       </div>
                       <div className="right">
                           <header>
                               <span className="label">Prism Job Bags Available</span><br/>
                               <span className="range">{this.state.sunday.date} - {this.state.saturday.date}</span>
                           </header>
                           <article>

                           </article>
                       </div>
                   </div>
               </div>
		);
	}
}
function mapStateToProps(state,ownprops) {
    return{
        user_detail: state.user_detail,
        calendar_page: state.calendar_page,
        todays_date: state.todays_date
    }
}
export default connect(mapStateToProps,null,null,{pure: false})(Calendar_View);
