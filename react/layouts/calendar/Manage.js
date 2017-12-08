import React,{ Component }  from 'react';
import {connect}            from 'react-redux';
import {NavLink,Route}      from 'react-router-dom';
import PropTypes            from 'prop-types';

// User created module
import DaysView             from './manage/DaysView';
import DepartmentView       from './manage/DepartmentView';

class Calendar_Manage extends Component {
	constructor(props){
		super(props);
		this.state = {
		    isLoading: true
        }
	}
	componentDidMount(){

	    // const routing = helper.getDaysOrDepartments();
        this.setState((prevState, props) => (
            {
                isLoading: false
            }
        ));
    }
	render(){
        if(this.state.isLoading){
            return (<div className="calendar_view center"><div className="ui active inline loader"></div></div>);
        }else{

            return(
                <div className="calendar_manage">
                    <div className="first">
                        <div className="left">
                            <h2 className="title">
                                <i className="settings icon"></i> Manage Scheduled Jobs
                            </h2>
                        </div>
                        <div className="right">
                            {/*<!-- Right goes here -->*/}
                        </div>
                    </div>
                    <div className="second">
                        <Route exact path="/calendar/manage/"   render ={(props) => <DaysView web={this.props.web} {...props} /> } />
                        <Route path="/calendar/manage/days/:date" render ={(props) => <DaysView web={this.props.web} {...props} /> } />
                        <Route path="/calendar/manage/departments/:id" render ={(props) => <DepartmentView web={this.props.web} {...props} /> } />
                    </div>
                </div>
            );
        }

	}
}
function mapStateToProps(state,ownprops) {
    return{
        calendar_page: state.calendar_page
    }
}
Calendar_Manage.propTypes = {
    web: PropTypes.object // web is storage for user_log information
}
export default connect(mapStateToProps,null,null,{pure: false})(Calendar_Manage);


