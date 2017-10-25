import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import u from '../common/edlibrary';
import CalendarPrismBagPopUps from '../components/CalendarPrismBagPopUps';
import CalendarPrismBagTriggerPopUp from '../components/CalendarPrismBagTriggerPopUp';

import {Popup} from 'semantic-ui-react';

class CalendarPrismSidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
           isLoading: true,
            jobsFound: [],
            prismBagsPopID: []
        }

    }
    componentDidMount(){
        // Grab prism job bags
        const from = this.props.days[0].date;
        const to   = this.props.days[6].date;
        const req  =this.props.settings.react_api_folder+"calendar_prism_jobs_week.php?from="+from+"&to="+to;

        // Acquire from Prism get API
        const prismbagPromise = axios.get(req);
        prismbagPromise.then(function(res){
            const data = res.data;
            this.setState(function(state,props){
                return ({state,isLoading: false,jobsFound: data});
            });
            // console.log("from prism aside ",data);

        }.bind(this))

        // Trigger pop up if finished loading
        if(!this.state.isLoading){
            console.log("setting up pop up",this.state.prismBagsPopID);

        }

    }

    renderJobs(){
        let cells       = []


        for(let v of this.props.days){

            const day   = v.day.toLowerCase();
            const date  = v.date;
            const jobs  = this.state.jobsFound[day];

            if(jobs!= undefined){
                cells.push(
                    <div className="aside_label">
                        <span className="day"> {u.ucfirst(day)} </span>
                        <span className="date"> {date} </span>
                    </div>
                );
                for(let vv of jobs){
                    // For storing the cell info itself

                    const cell = ()=>{
                        const title = vv.title;

                        return (<div>
                                    <Popup trigger={<CalendarPrismBagTriggerPopUp></CalendarPrismBagTriggerPopUp>   } className="popup" position="left center" flowing offset={250} basic={true} on="click">
                                        <CalendarPrismBagPopUps  {...this.props} job={vv}  />
                                    </Popup>
                                </div>
                        );
                    }


                    cells.push(cell());
                }
            }


        }
        // Get the trigger ids
        return cells;
    }
    render(){

        if(this.state.isLoading){
            return(<div style={{display: 'table', margin: '0 auto'}}>Loading...</div>);
        }else{

            return(
            <div>
                {
                   this.renderJobs()
                }
            </div>);
        }
    }
}
function mapStateToProps(state,ownprops) {
    return{
        settings: state.settings
    }
}
function mapDispatchToProps(dispatch){
    return({

    })
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarPrismSidebar);
