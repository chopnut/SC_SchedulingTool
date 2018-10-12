import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from "semantic-ui-react";
import { showDropDown} from "../../common/CommonUI";
import _ from "lodash";

export class CalendarCellAddDep extends Component {
  constructor(props){
    super(props);
    this.state = {
      department_selected: ""
    }
    this.renderDropDown = this.renderDropDown.bind(this);
  }
  handleSelect(e,{value}){
      this.setState({ department_selected : value });
  }
  handleAddDepartment(){
    //  TO BE IMPLEMENTED FOR REAL TIME COMMUNICATION
  }
  renderDropDown(){
      
      const departments     = this.props.departments;
      const job_departments = this.props.job_departments;
      const job_department_kids = departments.departmentsKids;
      const departments_options = [];

      // Get all the job department id currently in the job you are viewing

      const dep_keys = _.keyBy(job_departments,"job_dp_dept");  // The dept key becomes the key of the object
     
      // Set the options for the dropdown

      job_department_kids.map(e =>{
        const id = e.id;

        // Only include departments that is not already set yet
        if(!(id in dep_keys)){
          departments_options.push({
            key: e.id,
            text: e.title,
            value: e.id
          });
        }
      });
      
     return showDropDown(departments_options, this.state.department_selected,this.handleSelect.bind(this),"Select a department","add_department",1);
      
  }
  render() {
    return (<div className="add_department_window">
        <header>Add department manually</header>
        <div className="container">
            <div className="dropdown">{this.renderDropDown()}</div>
            <div className="submit">
              <Button color="green" onClick={this.handleAddDepartment.bind(this)}>Add</Button>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarCellAddDep)
