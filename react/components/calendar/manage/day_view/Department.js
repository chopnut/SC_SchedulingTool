import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Department extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
    }
    componentDidMount(){
        this.setState((prevState,props)=>{
            return({isLoading: false});
        });
    }
    render(){
       if(this.state.isLoading){
            return(
            <div>Loading</div>
            );
       }
       return(
          <div>Component Here</div>
       );
    }
}
function mapStateToProps(state,ownprops) {
    return({

    })
}
function mapDispatchToProps(dispatch){
    return({

    })
}
Department.PropTypes = {
    item: PropTypes.object,
    hasKid: PropTypes.bool
}
export default connect(mapStateToProps,mapDispatchToProps)(Department);
