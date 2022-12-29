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

        type1News: [],
        setType1News: () => {},

        type2News: [],
        setType2News: () => {},

        type3News: [],
        setType3News: () => {},

        curLabel: "",
        setCurLabel: () => {},

        beta_get_news: () => {},
    }
)

const NewsProvider = ( props ) => {

    const [labels, setLabels] = useState(["選情", "事件", "政見"]);
    const [news, setNews] = useState([]);
    const [ curLabel, setCurLabel ] = useState("");
    const [type1News, setType1News] = useState([]);
    const [type2News, setType2News] = useState([]);
    const [type3News, setType3News] = useState([]);

    // sending request
    const beta_get_news = () => {
        console.log("sent")
        sendData(["beta_get_news"])
    }

    const get_news = (type) => {
        sendData(["get_news", type]);
    }

    const get_all_news = () => {
        sendData(["get_all_news"])
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

            case "rp_get_news": {
                setNews(payload)
                break
            }

            case "rp_get_all_news": {
                console.log(payload)
                setType1News(payload[0])
                setType2News(payload[1])
                setType3News(payload[2])
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
                type1News,
                type2News,
                type3News,
                beta_get_news,
                setCurLabel,
                get_news,
                get_all_news,
            }}
            {...props}
        />
    )
}

const useNews = () => useContext(NewsContext);

export { useNews, NewsProvider };