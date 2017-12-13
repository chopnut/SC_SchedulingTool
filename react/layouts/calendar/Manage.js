import React,{ Component }  from 'react';
import {connect}            from 'react-redux';
import {Route,NavLink}      from 'react-router-dom';
import PropTypes            from 'prop-types';
import {withRouter }        from 'react-router-dom';

// User created module
import DaysView             from './manage/DaysView';
import DepartmentView       from './manage/DepartmentView';
import {getLoader} from '../../common/CommonUI';

// Javascript Helpers and modules
import '../../../public/assets/js/jquery.sortable.min.js';


class Calendar_Manage extends Component {
	constructor(props){
		super(props);
		this.state = {
		    isLoading: true
        }
        this.redirectTo = this.redirectTo.bind(this);
	}
	redirectTo(loc){
	    this.props.history.push(loc);
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
            return (<div className="calendar_view center">{getLoader()}</div>);
        }else{
            return(
                <div>
                    <Route exact path="/calendar/manage/" render ={(props) => <DaysView web={this.props.web} dep={this.props.dep} redirectTo={this.redirectTo} {...props} /> } />
                    <Route path="/calendar/manage/days/:date?/:job_dp_id?" render ={(props) => <DaysView web={this.props.web} dep={this.props.dep} redirectTo={this.redirectTo} {...props} /> } />
                    <Route path="/calendar/manage/departments/:id"         render ={(props) => <DepartmentView web={this.props.web} dep={this.props.dep} redirectTo={this.redirectTo}  /> } />
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
    web: PropTypes.object, // web is storage for user_log information
    dep: PropTypes.object  // information about departments
}
export default withRouter(connect(mapStateToProps,null,null,{pure: false})(Calendar_Manage));


