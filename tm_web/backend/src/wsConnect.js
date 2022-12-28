const { toUSVString } = require('util')

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
        let txtPath;
        let prom = readFile(path);
        prom.then((res) => {
            txtPath = res.split("\n")
            let texts = []
            for(let i = 0 ; i < txtPath.length ; i++){
                let tmp = txtPath[i].replace(/\n|\r/g, "")
                readFile("../../../src_txt/" + tmp)
                .then((res) => {
                    texts.push(res)
                    console.log(texts)
                })
            }
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