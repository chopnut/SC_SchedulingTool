import React, { Component } from 'react';
import {Route,NavLink,connect} from "../common/Modules"
import RouteWrapper from './RouteWrapper';
import {withRouter } from 'react-router-dom';

import Calendar_Manage from './Calendar_Manage';
import Calendar_View from './Calendar_View';

class CalendarPage extends Component {
	constructor(props){
		super(props);

        this.state = {
        };

        // console.log("From calendar page: ",props.location);

	}
	renderLinkManager(){
        return (
            <div className="menu_sub">
                <div className="left">
                    &nbsp;
                </div>
                <div className="right">
                    <NavLink exact to="/calendar" activeClassName="selected" className="links"><i className="grid layout icon"></i> View </NavLink>
                    <NavLink to="/calendar/manage" activeClassName="selected" className="links"><i className="checked calendar icon"></i> Manage</NavLink>
                </div>
            </div>
        );
    }
	render(){

		return(
           <article className="CalendarPage">
               {/*.menu_sub*/}
               {this.renderLinkManager()}

                <div className="body">
                    <RouteWrapper>
                       <Route exact path="/calendar" render ={(props) => <Calendar_View {...this.props}/> } />
                       <Route path="/calendar/manage" render ={(props) => <Calendar_Manage {...this.props} /> } />
                   </RouteWrapper>
                </div>
           </article>
		);
	}
}
function mapStateToProps(state,ownprops) {
    return{
        settings: state.settings
    }
}
export default withRouter(connect(mapStateToProps,null,null,{pure: false})(CalendarPage));
