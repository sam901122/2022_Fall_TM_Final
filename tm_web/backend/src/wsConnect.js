const { toUSVString } = require('util')

const fs = require('fs').promises

const testPath = "../data/test_array.csv"


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
        let returnArray = getNewsOfGroup(path);
    },

    clusterTest: () => {
        let texts = [];
        for(let i = 0 ; i < 3 ; i++){
            readFile("../../../src_txt/"+(i)+".txt")
            .then((res) => {
                let t = res.split("\n")
                let obj = {}
                obj.topic = t[0]
                obj.url = t[1]
                obj.body = t[2]
                console.log(obj)
                texts.push(res)
            })
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

                case "get_news": {
                    let returnArray = getNewsOfGroup(testPath);
                    console.log(returnArray)
                }
            }
        })
    }
}

module.exports = {
    wsConnect: wsConnect
}