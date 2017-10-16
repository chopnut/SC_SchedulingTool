import React, { Component } from 'react';

export default class RouteWrapper extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="wrapper">
                {this.props.children}
            </div>
        );
    }
}
