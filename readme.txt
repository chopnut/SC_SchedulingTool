========================================================================
This is a React/Redux Application tandem with PHP/MySql/Eloquent ORM
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Main Issues:
- How would this application, running on a server that must fetch data
  from the server gets updated frequently?
  Solution: http://notjoshmiller.com/ajax-polling-in-react-with-redux/

By using Polling to check for any changes on the data from time to time.

What tooling do you need.
-- Redirection
-- JsonApi Calls
-- Set timeout polling
-- Listening to dispatch
========================================================================
AHK Automation According to this project:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Open:
  Outlook.exe, C:\wamp64_2\wampmanager.exe, chrome.exe, webstorm64.exe
  ProjectFolder: C:\wamp64_2\www\webapps\schedulingtool\
Run cmd:
 git fetch
 git pull origin master
 webpack -w or npm start

For Development and Code Snippets
###########################################
Smart Component:
import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class __RENAME_ME___ extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    render(){

    }
}
function mapStateToProps(state,ownprops) {
    return{
        days: state.store
    }
}
export default connect(mapStateToProps,null)(__RENAME_ME___);
########################################
SetState:
this.setState((prevState,props)=>{
        return {prevState}
    }
);
------------------------------------------------------------------------
Bulk Inserto CSV into SQL Server:
https://stackoverflow.com/questions/15242757/import-csv-file-into-sql-server
