/*
  realtime_server: The function that will connect to the realtime server to call this function
  Required state:
        realtime_server_trigger_data: object
        realtime_server_online: bool
 */
export function realtimeServer(port){
    const autobahn = require('autobahn');
    const url = 'ws://127.0.0.1:'+ port;
    let conn = new autobahn.Connection(
        {
            url,
            realm: 'realm1'
        }
    );

    // Register function for feedback
    conn.onopen = function (session){
        // React to any changes from the server
        session.subscribe('calendar_page', (page_activity, data)=>{
            // When the server sent data back , get the message type and the data itself
            // pass it to any components that will need it, and update their state

            //          * * DATA FORMAT * *
            // page_activity: is the page where the message originated from
            // data: is an object with more details

            /*
                ACTIONS: Name of the action
                PAYLOAD: The raw data thats been sent via the action
                USER:    The user that created the action
             */

            const all_data = {page_activity, data, time: moment()};
            this.setState((prevState, props) => (
                {realtime_server_trigger_data: all_data}
            ));

        })

        // Tell that you are connected
        console.log("Connection established by ", caller, " on port ", port);
        this.setState((prevState, props) => (
            {realtime_server_online: true}
        ));
    }
    conn.onclose = function (reason , details){
        console.log("Connection lost ("+ reason +") details as: ", details);
        this.setState((prevState, props) => (
            {realtime_server_online: false}
        ));
    }

    // Open the connection to the realtime server
    conn.open();

}
