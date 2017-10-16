import React, { Component } from 'react';
import { NavLink ,IndexLink} from 'react-router-dom';


export default class Layout extends Component {
    // Do some initiliazing in the constructor
    constructor(props){
        super(props);
        const state     = props.store.getState();
        const settings  = state.settings;
        const userlog   = state.user_detail;

        this.state = {settings, userlog};

       

    }
    // Render the Pages Links Tabs
    renderTabs(){
        let tabs = JSON.parse(this.state.settings.tabs);
        return (
          <div className="menu">{tabs.map( function (item , i)
              {
                // Make the first one link to /
                let defaultLinkto = '/';
                if(i>0){
                    defaultLinkto = defaultLinkto+item.id;
                }
                return (<NavLink exact to={defaultLinkto} activeClassName="RouterLinkSelected" className="RouterLink">{item.label}</NavLink>);
              }
          )}
          </div>);
    }
    render() {
        return (
                <div className="content_holder">
                    {this.renderTabs()}
                   <div className="page_holder">
                        {this.props.children}
                    </div>
                </div>

        );
    }
}
