import { useState, createContext, useContext, useEffect } from "react";

const client = new WebSocket('ws://172.20.10.3:4000/')

const sendData = async (data) => {
    await client.send(JSON.stringify(data));
}

const NewsContext = createContext(
    {

    }
)

const NewsProvider = ( props ) => {

    return (
        <NewsContext.Provider
            value={{
    
            }}
            {...props}
        />
    )
}

const useNews = () => useContext(NewsContext);

export { useNews, NewsProvider };