import React, { Component } from 'react';
import {connect} from 'react-redux';
import {reorder, reorderImmutable, reorderFromTo, reorderFromToImmutable } from 'react-reorder';

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
        const rowClassName = this.props.isParent?"parent_row":"child_row";
        const today   = this.props.calendar_page.today_date;

        return(
            <tr>
                <td colSpan={colspan} className={rowClassName}>
                    <i className="cube icon"></i> {this.props.title}
                </td>{this.props.calendar_page.days.map((item,i)=>{
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
                            {i}
                        </td>
                    );
                })
            }</tr>);
    }
}
function mapStateToProps(state,ownprops) {
    return{
        calendar_page: state.calendar_page
    }
}
export default connect(mapStateToProps,null)(CalendarRow);
