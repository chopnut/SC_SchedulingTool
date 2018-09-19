import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function mapStateToProps(state) {
    return {
        api_folder: state.settings.setting.react_api_folder
    };
}

class EditDepartmentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            job_dep: null,
            message: "No Job department has been set yet."
        }
        this.renderContent = this.renderContent.bind(this);
    }
    componentDidMount() {
        this.prepopulateJobDepartment();
        
    }
    prepopulateJobDepartment(){
        const {match}         = this.props;
        const depId           = parseInt(match.params.depid);
 

        if(!isNaN(depId)){
            
            const stringApi = this.props.api_folder + "job_department/get.php?id=" + depId;
            const prom      = axios.get(stringApi);
 
            prom.then((res)=>{
                const data = res.data;
                if(data.returned){
                    this.setState({ job_dep: data.payload });
                } else {
                    this.setState({ message: data.message  });
                }
            });
        }
    }
    renderContent(){
        if(this.state.job_dep){
            // FORM
            return <div>
                    <form className="ui form" onSubmit={(e)=>{  e.preventDefault();  }} method="post">

                    </form>
            </div>

        }else{ 
            // ERROR
            return <div className="ui yellow message">
                Error: {this.state.message}
            </div>
        }
    }
    render() { 
        return <div className="edit_department">
            {this.renderContent()}
        </div>;
    }
}
 
export default withRouter(connect(
    mapStateToProps,
)(EditDepartmentPage)); 