
/*
  realtime_server: The function that will connect to the realtime server to call this function
  Required state:
        realtime_server_trigger_data: object
        realtime_server_online: bool
 */
const ab = require("autobahn");

export function realtimeServer(port){
    const url = 'ws://localhost:' + port;
    const connection = new ab.Connection({
        url: url,
        realm: "votesapp"
    });
    connection.open();
}
