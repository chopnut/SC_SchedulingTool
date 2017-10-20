import React, { Component } from 'react';
import {connect} from 'react-redux';


class Calendar_Manage extends Component {
	constructor(props){
		super(props);

        const state = props.store;
        const userlog  = state.user_detail;
        this.state = {userlog};

	}
	renderLinkManager(){

    }
	render(){

		return(
           <div className="CalendarPage">
                <div className="header_text_control">
                    <div className="left">

                    </div>
                    <div className="middle">
                        <span><a href="javascript:;">&larr;</a></span> <span className="date"> 02 Feb - 09 Feb</span> <span><a href="javascript:;">&rarr;</a></span>

                    </div>
                    <div className="right"><span className="chooseDate"> <a href="">Change date</a></span> - 2017</div>
                </div>
                <table width="100%" className="ui definition table">
                    <thead>
                    <tr>
                        <th className="department">Department &#x21F5; </th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="label data">Data Programming</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>


                    </tr>
                    <tr>
                        <td className="label insert">Inserting</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    <tr>
                        <td className="label">K1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    <tr>
                        <td className="label">K2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    <tr>
                        <td className="label">K3</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    <tr>
                        <td className="label imaging">Imaging</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    <tr>
                        <td className="label">Mono</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    <tr>
                        <td className="label">Colour</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>

                    </tbody>
                </table>
           </div>
		);
	}
}
function mapStateToProps(state,ownprops) {
    return{
        store: state
    }
}
export default connect(mapStateToProps,null,null,{pure: false})(Calendar_Manage);
