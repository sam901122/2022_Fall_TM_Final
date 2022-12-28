const fs = require('fs').promises


const sendData = ( data, ws ) => {
    ws.send( JSON.stringify( data ) )
}

const boardcastMessage = ( wss, data ) => {
    wss.clients.forEach( client => {
        sendData( data, client )
    } )
}

const readFile = async (path) => {
    return await fs.readFile(path, "utf-8");
}

const wsConnect = {
    test: (path) => {
        let prom = readFile(path);
        prom.then((res) => {
            console.log(res)
        })
    },

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

module.exports = {
    wsConnect: wsConnect
}