import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink,Route} from 'react-router-dom';
import {withRouter } from 'react-router-dom';

import app from '../modules/persistent';
import CalendarPage from './CalendarPage';
import ManageJobsPage from './ManageJobsPage';
import ManageTasksPage from './ManageTasksPage';
import SchedulingSettingsPage from './SchedulingSettingsPage';

// THE LAYOUT COMPONENT WILL BE THE ONE POLLING THE DATABASE FOR ANY CHANGES COMING FROM THE DATABASE

class Layout extends Component {

    // Do some initiliazing in the constructor
    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            web: {}
        };

        // console.log("Constructor from layout", props);

    }
    componentDidMount(){
        // Get the persistent/readonly data
        // userlog details , and todays date

        const promise = app(this.props.settings);
        promise.then((res)=>{
            console.log("From Layout Web: ",res.data);
            this.setState((state,prop)=>{
                return ({state,web: res.data,isLoading: false});
            });

        });

    }
    // This is for redirecting using history props pass from router
    // Otherwise the main menu wont update its state of selection.
    componentWillMount(){
        const path = this.props.location.pathname;
        const { history } = this.props;
        console.log("Layout comp props",this.props);
        if(path=='/'){
            history.push('/calendar');
        }
    }

    // Render the Pages Links Tabs
    renderTabs(){
        let tabs = JSON.parse(this.props.settings.setting.tabs);
        return (
          <div className="menu">{tabs.map( function (item , i)
              {
                  // console.log(item,i);
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

                    return (<NavLink key={i} to={defaultLinkto} activeClassName="RouterLinkSelected" className={"RouterLink "+className+" "+endClass}><i className={icon}></i> {item.label}</NavLink>);
                }else{
                    // This is for the base /home
                    return (<NavLink key={i} to={defaultLinkto} activeClassName="RouterLinkSelected" className={"RouterLink "+className}><i className={icon}></i> {item.label} </NavLink> );
                }
              }
          )}
          </div>
        );
    }
    render() {
        if(!this.state.isLoading){
            return (
                <div className="content_holder">
                    {this.renderTabs()}
                    <div className="page_holder">
                        <Route path="/calendar"  render ={(props) => <CalendarPage web={this.state.web} {...this.props} /> }/>
                        <Route path="/managejobs" render ={(props) => <ManageJobsPage web={this.state.web} {...this.props} /> } />
                        <Route path="/managetasks" render ={(props) => <ManageTasksPage web={this.state.web} {...this.props} /> }/>
                        <Route path="/usersettings" render ={(props) => <SchedulingSettingsPage web={this.state.web} {...this.props} /> }/>
                        <Route path="/schedulingsettings" render ={(props) => <SchedulingSettingsPage web={this.state.web} {...this.props} /> }/>
                    </div>
                </div>

            )
        }else{
            return (<div className="content_holder"></div>);
        }

    }
}
function mapStateToProps(state,ownprops) {
    return{
        settings: state.settings,
        calendar_jobs: state.calendar_jobs
    }
}
// make sure you use {pure:false} is included when using router or use withRouter(connect(mapStateToProps));
export default withRouter(connect(mapStateToProps,null,null,{pure:false})(Layout));

