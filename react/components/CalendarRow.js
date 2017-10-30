import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class CalendarRow extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: true
        }

    }

    componentDidMount(){
        this.setState((prevState, props) => (   {
            isLoading: false
        }  ));
    }
    render(){
        const colspan = (this.props.isParent)?8:0;
        const today   = this.props.today_date;
        const rowClassName = this.props.isParent?"parent_row":"child_row";

        return(
            <tr>
                <td colSpan={colspan} className={rowClassName}>
                    <i className="cube icon"></i> {this.props.title}
                </td>{this.props.days.map((item,i)=>{
                    const thisCellDate = item.date;
                    let tdClassName  = "cell";

                    // console.log("Selected cell: ",today, thisCellDate);

                    if(thisCellDate == today){
                        tdClassName = tdClassName+" today";
                    }
                    if(colspan==8){
                        return;
                    }
                    return (
                        <td key={i} className={tdClassName}>

                        </td>
                    );
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
