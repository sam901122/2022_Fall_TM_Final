import { useState, createContext, useContext, useEffect } from "react";


const client = new WebSocket('ws://localhost:4000/')

const sendData = async (data) => {
    await client.send(JSON.stringify(data));
}

const NewsContext = createContext(
    {
        labels: [],
        setLabels: () => {},

        news: [],
        setNews: () => {},

        curLabel: "",
        setCurLabel: () => {},

        beta_get_news: () => {},
    }
)

const NewsProvider = ( props ) => {

    const [labels, setLabels] = useState(["Pusung, Rain, John, Liang, Alistone"]);
    const [news, setNews] = useState([]);
    const [ curLabel, setCurLabel ] = useState("");

    // sending request
    const beta_get_news = () => {
        sendData(["beta_get_news"])
    }

    const get_news = (type) => {
        sendData(["get_news", type]);
    }

    // receiving data
    client.onmessage = ( byteString ) => {
        const { data } = byteString
        const [task, payload] = JSON.parse( data )
        switch (task) {
            case "rp_beta_get_news": {
                setNews(payload)
                break
            }
        }
    }

    return (
        <NewsContext.Provider
            value={{
                labels,
                news,
                curLabel,
                beta_get_news,
                setCurLabel,
            }}
            {...props}
        />
    )
}

const useNews = () => useContext(NewsContext);

export { useNews, NewsProvider };