import express from "express";
import http from 'http';
import WebSocket from 'ws';
import wsConnect from "./wsConnect"

const SERVER_IP = '192.168.1.111'

const app = express()
const server = http.createServer( app )
const serverWS = new WebSocket.Server( { server } )

serverWS.on( "connection", ( ws ) => {
    ws.onmessage = wsConnect.do( ws, serverWS)
} )

const PORT = 4000
server.listen( PORT, SERVER_IP, () => {
    console.log( `server is on ${PORT}` )
} )