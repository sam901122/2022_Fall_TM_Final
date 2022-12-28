const sendData = ( data, ws ) => {
    ws.send( JSON.stringify( data ) )
}

const boardcastMessage = ( wss, data ) => {
    wss.clients.forEach( client => {
        sendData( data, client )
    } )
}

export default {
    do: ( ws, wss ) => {
        return ( async ( byteString ) => {
            const {data} = byteString;
            const [task, payload] = JSON.parse( data );

            switch (task) {
                case "init": {
                    
                    break;
                }
            }
        })
    }
}