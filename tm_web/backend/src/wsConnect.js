const { toUSVString } = require('util')

const fs = require('fs')

const testPath = "../data/test_array.csv"
const dataFilePath = "../../../src_txt/"

const sendData = ( data, ws ) => {
    ws.send( JSON.stringify( data ) )
}

const boardcastMessage = ( wss, data ) => {
    wss.clients.forEach( client => {
        sendData( data, client )
    } )
}


// functions
const getArrayOfFiles = (inputString) => {
    let array = inputString.split("\n")
    for (let i = 0 ; i < array.length ; i++){
        array[i] = array[i].replace(/\n|\r/g, "")
    }
    return array
}

const getNews = (arrayOfNames) => {
    let returnArray = []
    for (let i = 0 ; i < arrayOfNames.length ; i++){
        let text = fs.readFileSync(String(dataFilePath) + arrayOfNames[i], "utf-8")
        text = text.split("\n")
        let obj = {}
        obj.title = text[0]
        obj.url = text[1]
        obj.body = text[2]
        returnArray.push(obj)
    }
    return returnArray
}


// wsConnect
const wsConnect = {
    test: (path) => {
        const allFilesNameString = fs.readFileSync(path, "utf-8")
        const allFilesNameArray = getArrayOfFiles(allFilesNameString)
        const objArray = getNews(allFilesNameArray)
        console.log(objArray)
    },

    do: ( ws, wss ) => {
        return ( async ( byteString ) => {
            const {data} = byteString;
            const [task, payload] = JSON.parse( data );

            switch (task) {
                case "beta_get_news": {
                    const allFilesNameString = fs.readFileSync(testPath, "utf-8")
                    const allFilesNameArray = getArrayOfFiles(allFilesNameString)
                    const objArray = getNews(allFilesNameArray)
                    sendData(["rp_beta_get_news", objArray])
                    break;
                }

                case "get_news": {
                    // const allFilesNameString = fs.readFileSync(path, "utf-8")
                    // const allFilesNameArray = getArrayOfFiles(allFilesNameString)
                    // const objArray = getNews(allFilesNameArray)
                }
            }
        })
    }
}

module.exports = {
    wsConnect: wsConnect
}