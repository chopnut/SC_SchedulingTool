import React, { Component } from 'react';

export default class Layout extends Component {
    // Do some initiliazing in the constructor
    constructor(props){
        super(props);
    }

    render() {
        return (
                <div className="content_holder">
                   
                    {this.props.children}
                </div>

        );
    }
}

