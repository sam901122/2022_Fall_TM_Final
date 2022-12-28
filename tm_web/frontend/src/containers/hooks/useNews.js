import { useState, createContext, useContext, useEffect } from "react";

const client = new WebSocket('ws://172.20.10.3:4000/')

const sendData = async (data) => {
    await client.send(JSON.stringify(data));
}

const NewsContext = createContext(
    {
        labels: [],
        setLabels: () => {},

        news: [],
        setNews: () => {},
    }
)

const NewsProvider = ( props ) => {

    const [labels, setLabels] = useState(["Pusung, Rain, John, Liang, Alistone"]);
    const [news, setNews] = useState([]);

    // sending request
    

    // receiving data


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