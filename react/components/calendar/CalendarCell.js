import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {calendar_page_move_dep_side_by_side} from '../../actions/CalendarActions';


class CalendarCell extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            background_color: '#eee'
        }
        this.actionChangeSideToSide = this.actionChangeSideToSide.bind(this);
        this.hover_in_job_bag      = this.hover_in_job_bag.bind(this);
        this.hover_out_job_bag     = this.hover_out_job_bag.bind(this);

    }
    componentDidUpdate(prevProps, prevState){
        $(".chevron").popup();
    }
    hover_in_job_bag(){
        this.setState((prevState, props) => (
            {background_color: this.props.colours_setting.hover_calendar_job}
        ));
    }
    hover_out_job_bag(){
        this.setState((prevState, props) => (
            {background_color: '#eee'}
        ));
    }
    actionChangeSideToSide(jobId,day,toKey){
        let info = {
            jobId,
            day,
            toKey,
            deptId: this.props.jd.dep.job_dp_dept,
            dayKey: this.props.dayKey,
            userId: this.props.userId
        }
        console.log("Move to side: ",info);

        // Call the action creator to update state
        this.props.calendar_page_move_dep_side_by_side(this.props.settings, info);
    }
    componentDidMount(){
        this.setState(function(state,props){
            return ({state,isLoading: false});
        });
        console.log("COLOR: ", this.props.colours_setting);
    }
    render(){

        const jd = this.props.jd.dep;
        const bg = this.props.jd.bag;
        const leftArrowClass  = "chevron left icon";
        const rightArrowClass = "chevron right icon";


        if(this.state.isLoading){
            return(<div>Loading...</div>);
        }else{
            return(
                <div className="cell"
                     style={{backgroundColor: this.state.background_color}}
                     draggable={true}
                     onDragStart={(e)=>{
                         // pass the job department to the handler from row
                         this.props.initDrag(e,this.props.jd,this.props.dayKey);
                     }}
                     onDragEnd={(e)=>{ this.props.initDragEnd(e) }}
                     onMouseEnter = {()=>{  this.hover_in_job_bag() }}
                     onMouseLeave = {()=>{  this.hover_out_job_bag()}}
                >
                    <div className="contain">
                        <div className="cell_head">
                            <table width="100%" cellPadding={0} cellSpacing={0}>
                                <tbody>
                                    <tr>
                                        <td className="cell_left">
                                            <i className={leftArrowClass} data-content="Move previous day" data-variation="tiny" onClick={()=>{
                                                this.actionChangeSideToSide(jd.job_dp_id, this.props.prevDate, this.props.prevDayKey );
                                                }
                                            }></i>
                                        </td>
                                        <td className="cell_middle">{bg.job_prism_number}</td>
                                        <td className="cell_right">
                                            <i className={rightArrowClass} data-content="Move next day" data-variation="tiny" onClick={()=>{
                                                this.actionChangeSideToSide(jd.job_dp_id, this.props.nextDate, this.props.nextDayKey);
                                                }
                                            }></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="cell_title">
                            {bg.job_title}
                        </div>
                    </div>
                </div>
            );
        }
    }
}
function mapStateToProps(state,ownprops) {
    return({
        settings: state.settings,
        colours_setting: JSON.parse(state.settings.setting.colours_setting)
    });
}
function mapDispatchToProps(dispatch){
    return({
        calendar_page_move_dep_side_by_side: (settings,info)=>{
            dispatch(calendar_page_move_dep_side_by_side(settings,info));
        }
    });
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarCell);
