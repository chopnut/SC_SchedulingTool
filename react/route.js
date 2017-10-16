import React, { Component } from 'react';
import {Route,HashRouter as Router,hashHistory,IndexRoute} from 'react-router-dom'

// Main Layouts and Pages
import Layout from './layouts/Layout';
import CalendarPage from './layouts/CalendarPage';
import ManageJobsPage from './layouts/ManageJobsPage';
import ManageTasksPage from './layouts/ManageTasksPage';
import SchedulingSettingsPage from './layouts/SchedulingSettingsPage';

export default function(store){
	return (
		<Router history={hashHistory}>
		<Layout store={store}>
				<Route exact path="/" render ={(props) => <CalendarPage store={store} /> } />
				<Route path="/calendar"  render ={(props) => <CalendarPage store={store} /> }/>
				<Route path="/manageJobs" render ={(props) => <ManageJobsPage store={store} /> } />
				<Route path="/manageTasks" render ={(props) => <ManageTasksPage store={store} /> }/>
				<Route path="/schedulingSettings" render ={(props) => <SchedulingSettingsPage store={store} /> }/>
		</Layout>
		</Router>
	);
}