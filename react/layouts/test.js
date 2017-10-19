import React, { Component } from 'react';
import {connect} from 'react-redux';


class Test extends Component {
    // Do some initiliazing in the constructor
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>TESTPAGE</div>
        );
    }

}
function mapStateToProps(state,ownprops) {
    return{
        store: state
    }
}
export default connect(mapStateToProps,null)(Test);
