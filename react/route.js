import React, { Component } from 'react';
import {Route,HashRouter as Router,hashHistory,IndexRoute,Switch} from 'react-router-dom'
import {Provider} from 'react-redux';

// Main Layouts and Pages
import Layout from './layouts/Layout';
import CalendarPage from './layouts/CalendarPage';
import ManageJobsPage from './layouts/ManageJobsPage';
import ManageJobsPage_JobsPage from './layouts/ManageJobs_JobsPage';
import ManageJobsPage_NewEditPage from './layouts/ManageJobs_NewEditPage';
import ManageTasksPage from './layouts/ManageTasksPage';
import SchedulingSettingsPage from './layouts/SchedulingSettingsPage';

export default function(store){
	return (
	    <Provider store={store}>
            <Router history={hashHistory}>
            <Layout>
                    <Route exact path="/" render ={(props) => <CalendarPage /> } />
                    <Route path="/calendar"  render ={(props) => <CalendarPage /> }/>
                    <Route path="/managejobs" render ={(props) => <ManageJobsPage /> } />
                    <Route path="/managetasks" render ={(props) => <ManageTasksPage  /> }/>
                    <Route path="/schedulingsettings" render ={(props) => <SchedulingSettingsPage /> }/>
            </Layout>
            </Router>
        </Provider>
	);
}
