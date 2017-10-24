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
                <td colSpan={colspan} className={this.props.isParent?"parent_row":""}>
                    <i className="cube icon"></i> {this.props.title}
                </td>
                {// if colspan is 0 that means department is a child
                    (colspan==0)?this.props.days.map((item)=>{
                    return(
                        <td>
                            DATA
                        </td>
                    );
                    }):""
                }
            </tr>
        );
    }
}
function mapStateToProps(state,ownprops) {
    return{
    }
}
export default connect(mapStateToProps,null)(CalendarRow);
