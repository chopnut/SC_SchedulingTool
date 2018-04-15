
/*
  realtime_server: The function that will connect to the realtime server to call this function
  Required state:
        realtime_server_trigger_data: object
        realtime_server_online: bool
 */
import "../common/autobahn";
export function realtimeServer(port){
    const url = 'ws://127.0.0.1:' + port;
    ab.debug(true,true);
    var conn = new ab.Session(url,
        function() {
            conn.subscribe('kittensCategory', function(data) {
                // This is where you would add the new article to the DOM (beyond the scope of this tutorial)
                console.log("New data available: ",data);
            });
        },
        function() {
            console.warn('WebSocket connection closed');
        },
        {'skipSubprotocolCheck': true}
    );
}
