import React, { Component } from 'react';
import {Route,NavLink,connect} from "../common/Modules"
import RouteWrapper from './RouteWrapper';

import Calendar_Manage from './Calendar_Manage';
import Calendar_View from './Calendar_View';

class CalendarPage extends Component {
	constructor(props){
		super(props);

        const state = props.store;
        const userlog  = state.user_detail;
        this.state = {userlog};

        // console.log("From calendar page: ",props.location);

	}
	renderLinkManager(){
        return (
            <div className="menu_sub">
                <div className="left">
                    LEFT
                </div>
                <div className="right">
                    <NavLink to="/calendar/view" activeClassName="selected" className="links"><i className="shopping bag icon"></i> View </NavLink>
                    <NavLink to="/calendar/manage" activeClassName="selected" className="links"><i className="checked calendar icon"></i> Manage</NavLink>
                </div>
            </div>
        );
    }
	render(){

		return(
           <article className="CalendarPage">
               {this.renderLinkManager()}

                <div className="body">
                <RouteWrapper>
                   <Route exact path="/" render ={(props) => <Calendar_View /> } />
                   <Route path="/calendar/view" render ={(props) => <Calendar_View  /> }  />
                   <Route path="/calendar/manage" render ={(props) => <Calendar_Manage /> } />

               </RouteWrapper>
                </div>
           </article>
		);
	}
}
function mapStateToProps(state,ownprops) {
    return{
        store: state
    }
}
export default connect(mapStateToProps,null,null,{pure: false})(CalendarPage);
