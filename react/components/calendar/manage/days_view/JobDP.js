import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class DepartmentJobView extends Component {
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
            return(<li>Loading...</li>);
        }else{

            return(
            <li className="job_individual">
                <table className="job_table_row" cellPadding={0} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th className="jnu">{this.props.job.jobbag.job_prism_number}</th>
                            <th className="csr">CSR</th>
                            <th className="cli">CLIENT</th>
                            <th className="qty">{this.props.job.job_dp_qty}</th>
                            <th>{this.props.job.jobbag.job_title}</th>
                            <th className="dat">DATA</th>
                            <th className="pri">{this.props.job.job_dp_print_date}</th>
                            <th className="sto">{this.props.job.job_dp_stock_picked}</th>
                        </tr>
                    </thead>
                </table>
            </li>);
        }
    }
}
function mapStateToProps(state,ownprops) {
    return ({
        calendar_page: state.calendar_page,
        settings: state.settings
    })
}
function mapDispatchToProps(dispatch){
    return({

    })
}
export default connect(mapStateToProps,mapDispatchToProps)(DepartmentJobView);
