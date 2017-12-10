import React,{ Component }  from 'react';
import {connect}            from 'react-redux';
import {Route}      from 'react-router-dom';
import PropTypes            from 'prop-types';

// User created module
import DaysView             from './manage/DaysView';
import DepartmentView       from './manage/DepartmentView';
import RouteWrapper from '../common/RouteWrapper';

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
                <RouteWrapper>
                    <Route exact path="/calendar/manage/"   render ={(props) => <DaysView web={this.props.web} dep={this.props.dep} {...props}  /> } />
                    <Route path="/calendar/manage/days/:date/:job_dp_id" render ={(props) => <DaysView web={this.props.web} dep={this.props.dep} {...props} /> } />
                    <Route path="/calendar/manage/departments/:id" render ={(props) => <DepartmentView web={this.props.web} {...props} /> } />
                </RouteWrapper>
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
    web: PropTypes.object, // web is storage for user_log information
    dep: PropTypes.object  // information about departments
}
export default connect(mapStateToProps,null,null,{pure: false})(Calendar_Manage);


