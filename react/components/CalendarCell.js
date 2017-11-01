import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {calendar_page_move_dep_side_by_side} from '../actions/CalendarActions';


class CalendarCell extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
        this.actionChangeSideToSide = this.actionChangeSideToSide.bind(this);
    }
    componentDidUpdate(prevProps, prevState){
        $(".chevron").popup();
    }
    actionChangeSideToSide(jobId,day,toKey){
        let info = {
            jobId,
            day,
            toKey,
            deptId: this.props.jd.dep.job_dp_dept,
            dayKey: this.props.dayKey
        }
        this.props.calendar_page_move_dep_side_by_side(info);
    }
    componentDidMount(){
        this.setState(function(state,props){
            return ({state,isLoading: false});
        });
    }
    render(){
        const jd = this.props.jd.dep;
        const bg = this.props.jd.bag;

        const leftArrowClass = "chevron left icon";
        const rightArrowClass = "chevron right icon";

        if(this.state.isLoading){
            return(<div>Loading...</div>);
        }else{
            return(
                <div className="cell" id={jd.job_dp_id} style={{backgroundColor: "#8BC53E"}}>
                    <div className="contain">
                        <div className="cell_head">
                            <table width="100%" cellPadding={0} cellSpacing={0}>
                                <tbody>
                                    <tr>
                                        <td className="cell_left">
                                            <i className={leftArrowClass} data-content="Move previous day" data-variation="small" onClick={()=>{
                                                this.actionChangeSideToSide(jd.job_dp_id, this.props.prevDate, this.props.prevDayKey );
                                                }
                                            }></i>
                                        </td>
                                        <td className="cell_middle">{bg.job_prism_number}</td>
                                        <td className="cell_right">
                                            <i className={rightArrowClass} data-content="Move next day" data-variation="small" onClick={()=>{
                                                this.actionChangeSideToSide(jd.job_dp_id, this.props.nextDate, this.props.nextDayKey);
                                                }
                                            }></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="cell_title">{bg.job_title}</div>
                    </div>
                </div>
            );
        }
    }
}
function mapStateToProps(state,ownprops) {
    return({});
}
function mapDispatchToProps(dispatch){
    return({
        calendar_page_move_dep_side_by_side: (info)=>{
            dispatch(calendar_page_move_dep_side_by_side(info));
        }
    });
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarCell);
