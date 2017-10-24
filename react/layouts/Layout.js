import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink,Route} from 'react-router-dom';
import {withRouter } from 'react-router-dom';

import CalendarPage from './CalendarPage';
import ManageJobsPage from './ManageJobsPage';
import ManageTasksPage from './ManageTasksPage';
import SchedulingSettingsPage from './SchedulingSettingsPage';
// THE LAYOUT COMPONENT WILL BE THE ONE POLLING THE DATABASE FOR ANY CHANGES COMING FROM THE DATABASE

class Layout extends Component {

    // Do some initiliazing in the constructor
    constructor(props){
        super(props);


        const settings  = props.store.settings;
        const userlog   = settings.user_detail;

        this.state = {
            settings,
            userlog,
            isLoading: true
        };

        // console.log("Constructor from layout", props);

    }
    componentWillMount(){
        const path = this.props.location.pathname;
        const { history } = this.props;

        if(path=='/'){
            history.push('/calendar');
        }
    }

    // Render the Pages Links Tabs
    renderTabs(){
        let tabs = JSON.parse(this.state.settings.tabs);
        return (
          <div className="menu">{tabs.map( function (item , i)
              {
                  // Make the first one link to /
                  let className     = item.id;
                  let defaultLinkto = '/'+className;
                  let icon                = item.icon;
                  let endClass            = "";

                if(tabs.length == i+1){
                    endClass = "end";
                }
                if(i>0){
                    // This is for the rest of the links

                    return (<NavLink to={defaultLinkto} activeClassName="RouterLinkSelected" className={"RouterLink "+className+" "+endClass}><i className={icon}></i> {item.label}</NavLink>);
                }else{
                    // This is for the base /home
                    return (<NavLink to={defaultLinkto} activeClassName="RouterLinkSelected" className={"RouterLink "+className}><i className={icon}></i> {item.label} </NavLink> );
                }
              }
          )}
          </div>
        );
    }
    render() {
        return (
                <div className="content_holder">
                    {this.renderTabs()}
                   <div className="page_holder">
                       <Route exact path="/" render ={(props) => <CalendarPage /> } />
                       <Route path="/calendar"  render ={(props) => <CalendarPage /> }/>
                       <Route path="/managejobs" render ={(props) => <ManageJobsPage /> } />
                       <Route path="/managetasks" render ={(props) => <ManageTasksPage  /> }/>
                       <Route path="/schedulingsettings" render ={(props) => <SchedulingSettingsPage /> }/>
                    </div>
                </div>

        );
    }
}
function mapStateToProps(state,ownprops) {
    return{
        store: state
    }
}
// make sure you use {pure:false} is included when using router or use withRouter(connect(mapStateToProps));
export default withRouter(connect(mapStateToProps,null,null,{pure:false})(Layout));

