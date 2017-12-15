import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Sidebar, Segment, Menu} from 'semantic-ui-react'

class ManageTasksPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            visible: false
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    toggleVisibility() {
        this.setState((prevState, props) => (
            {visible: !this.state.visible}
        ));
    }
	render(){

		return(
			<div className="ManageTasksPage">
                <div className="first">
                    <div className="left">
                        <header>
                            <i className="user circle icon"></i> Manage Task Page
                        </header>
                    </div>
                    <div className="right">
                        <button onClick={this.toggleVisibility}>Article Content here</button>
                    </div>
                </div>


				<article className="second">
                    <Sidebar.Pushable as={Segment} className="sidebar_container">
                        <Sidebar
                            as={Menu}
                            animation='overlay'
                            width='thin'
                            direction='right'
                            visible={this.state.visible}
                            icon='labeled'
                            vertical
                            className="sidebar"
                        >
                            Hello World
                        </Sidebar>
                        <Sidebar.Pusher className="main_content">
                            <Segment basic>
                                <div className="header">
                                    Hello Here
                                </div>
                                <div className="content">
                                    Content here
                                </div>
                            </Segment>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </article>
			</div>
		);
	}
}

function mapStateToProps(state,ownprops) {
    return{
        settings: state.settings
    }
}
export default connect(mapStateToProps,null,null,{pure: false})(ManageTasksPage);
