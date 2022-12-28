const http = require( 'http' )
const express = require( 'express' )
const SocketServer = require( 'ws' ).Server
const wsConnect = require( './wsConnect' ).wsConnect
const fs = require('fs').promises

const SERVER_IP = '192.168.1.111'
const csvPath = "../data/test_array.csv"

const app = express()
const server = http.createServer( app )
const serverWS = new SocketServer( { server } )

wsConnect.clusterTest()

serverWS.on( "connection", ( ws ) => {
    ws.onmessage = wsConnect.do( ws, serverWS)
} )

const PORT = 4000
server.listen( PORT, SERVER_IP, () => {
    console.log( `server is on ${PORT}` )
} )