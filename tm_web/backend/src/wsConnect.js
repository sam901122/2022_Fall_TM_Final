const fs = require('fs')

const testPath = "../data/test_array.csv"

const sendData = ( data, ws ) => {
    ws.send( JSON.stringify( data ) )
}

// functions
const getArrayOfFiles = (inputString) => {
    let array = inputString.split("\n")
    for (let i = 0 ; i < array.length ; i++){
        array[i] = array[i].replace(/\n|\r/g, "")
        let tmpBackPath = "../../../src_txt/" + array[i]
        let tmp = require('path').resolve(__dirname, tmpBackPath)
        array[i] = tmp
    }
    return array
}

const getNews = (arrayOfNames) => {
    let returnArray = []
    for (let i = 0 ; i < arrayOfNames.length ; i++){
        let text = fs.readFileSync(arrayOfNames[i], "utf-8")
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
        console.log(require('path').resolve(__dirname, testPath))
        const allFilesNameString = fs.readFileSync(testPath, "utf-8")
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
                    const path = require('path').resolve(__dirname, testPath)
                    const allFilesNameString = fs.readFileSync(path, "utf-8")
                    const allFilesNameArray = getArrayOfFiles(allFilesNameString)
                    const objArray = getNews(allFilesNameArray)
                    sendData(["rp_beta_get_news", objArray], ws)
                    break;
                }

                case "get_news": {
                    const tmpPath = "../data/" + payload + ".csv"
                    const path = require('path').resolve(__dirname, tmpPath)
                    console.log(path)
                    const allFilesNameString = fs.readFileSync(path, "utf-8")
                    const allFilesNameArray = getArrayOfFiles(allFilesNameString)
                    const objArray = getNews(allFilesNameArray)
                    sendData(["rp_get_news", objArray], ws)
                    break;
                }
            }
        })
    }
}

module.exports = {
    wsConnect: wsConnect
}