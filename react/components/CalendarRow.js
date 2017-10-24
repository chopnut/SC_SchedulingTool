import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class CalendarRow extends Component {
    constructor(props){
        super(props);

        // isDivider: props
        // title: props
        // department_id:props


    }

    componentDidMount(){}
    render(){
        const colspan = (this.props.isParent)?8:0;
        return(
            <tr>
                <td colSpan={colspan} className={this.props.isParent?"parent_row":"child_row"}>
                    <i className="cube icon"></i> {this.props.title}
                </td>{this.props.days.map((item)=>{
                    if(colspan==8){
                        return;
                    }
                    return (<td></td>);
                })
            }</tr>);
    }
}
function mapStateToProps(state,ownprops) {
    return{
        today: state.todays_date
    }
}
export default connect(mapStateToProps,null)(CalendarRow);
