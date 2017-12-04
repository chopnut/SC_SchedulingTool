import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showDropDown} from '../common/JobBagCommonUI';


class Calendar_AddRecurringWindow extends Component {
    constructor(props){
        super(props);
        this.state = {
           isLoading: true
        }
    }
    componentDidMount(){
        this.setState(function(state,props){
            return ({state,isLoading: false});
        });
    }
    render(){

        if(this.state.isLoading){
            return(<div className="add_recurring_window">Loading...</div>);
        }else{
            return(
            <div className="add_recurring_window">
                <table>
                    <tbody>
                        <tr>
                            <td className="head"><i className="repeat icon"></i>Add Daily Jobs</td>
                        </tr>
                        <tr>
                            <td className="day">{this.props.day.day}</td>
                        </tr>
                        <tr>
                            <td className="date">{this.props.day.date}</td>
                        </tr>
                        <tr>
                            <td className="body">
                                {showDropDown(
                                    this.props.jobsOption,
                                    this.props.jobsSelected,
                                    this.props.handleSelect,
                                    "Add daily jobs",
                                    "add_recurring"
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td className="button">
                                <button className={this.props.className} onClick={this.props.handleAdd}>{this.props.buttonLabel}</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            );
        }
    }
}
function mapStateToProps(state,ownprops) {
    return ({

    })
}
function mapDispatchToProps(dispatch){
    return({

    })
}
export default connect(mapStateToProps,mapDispatchToProps)(Calendar_AddRecurringWindow);
