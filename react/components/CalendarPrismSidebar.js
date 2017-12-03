import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import u from '../common/edlibrary';
import PopUpControl from '../components/CalendarPrismBagPopControl';
import moment from 'moment';

class CalendarPrismSidebar extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            jobsFound: [],
            timestamp: moment()
        }
        this.getPrismJobs = this.getPrismJobs.bind(this);
    }
    getPrismJobs(){

        // Grab prism job bags
        const from = this.props.days[0].date;
        const to   = this.props.days[6].date;

        const req  = this.props.settings.setting.react_api_folder+'calendar_prism_jobs_week.php?from='+from+'&to='+to;

        // Acquire from Prism get API
        axios.get(req).then(function(res){
            this.setState(function(state,props){
                return ({state,isLoading: false, jobsFound: res.data.jobs});
            });

        }.bind(this))
    }
    shouldComponentUpdate(){ return true; }
    componentWillReceiveProps(nextProps){
        console.log("updating prismsidebar: ",this.props);
        this.getPrismJobs();
    }
    componentDidUpdate(){}
    componentDidMount(){
        this.getPrismJobs();
    }
    renderJobs(){
        let cells       = []

        let i = 0;
        for(let d of this.props.days){

            const day   = d.day.toLowerCase();
            const date  = d.date;
            const jobs  = this.state.jobsFound[day];

            if(jobs!= undefined){
                cells.push(
                    <div className="aside_label" key={i}>
                        <span className="day"> {u.ucfirst(day)} </span>
                        <span className="date"> {date} </span>
                    </div>
                );
                i++;
                for(let job of jobs){
                    // console.log(job);
                    const id = job.job_prism_job_id;

                    // For storing the cell info itself
                    const cell = ()=>{
                        return (<div key={id}>
                                    <PopUpControl job={job} settings={this.props.settings}/>
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
            return(<div style={{display: 'table', margin: '0 auto'}}>Fetching data...</div>);
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
        settings: state.settings,
        calendar_page: state.calendar_page
    }
}
function mapDispatchToProps(dispatch){
    return({

    })
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarPrismSidebar);
