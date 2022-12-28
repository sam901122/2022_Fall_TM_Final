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

const getNewsOfGroup = (path) => {
    let txtPath;
    let texts = []
    let prom = readFile(path);
    prom.then((res) => {
        txtPath = res.split("\n")
        for(let i = 0 ; i < txtPath.length ; i++){
            let tmp = txtPath[i].replace(/\n|\r/g, "")
            readFile("../../../src_txt/" + tmp)
            .then((res) => {
                texts.push(res)
            })
        }
    })
    .then(() => {
        return texts;
    })
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

    clusterTest: () => {
        let texts = [];
        for(let i = 0 ; i < 10 ; i++){
            if( i == 2 || i == 3 || i == 5 || i == 7){
                readFile("../../../src_txt/林耕仁"+(i+i)+".txt")
                .then((res) => {
                    texts.push(res)
                    console.log(i+1)
                    console.log(texts)
                })
            }
        }
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