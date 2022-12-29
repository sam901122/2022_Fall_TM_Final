import styled from "styled-components";
import { Button, Card, Col, Row, Table, Modal} from "antd";
import { useState,useEffect } from "react";
import { HomeFilled } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useNews } from "../containers/hooks/useNews";
import NewsDetail from "../components/NewsDetial"

const HeaderStyle = styled.div`
box-sizing: border-box;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
font-family:serif;
font-size: 30px;
font-weight: 400;
height: 60px;
letter-spacing: normal;
line-height: 0px;
margin-left: 0px;
margin-right: 0px;
max-width: none;
padding-left: 30px;
padding-right: 30px;
text-align: justify;
width: 100%;
background-color: cadetblue;
opacity: 0.3;
`

const TitleWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const CardWrapper=styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background-color: aliceblue;
    padding-bottom: 70px;
`

const NewsTitle = () => {
    const { curLabel, news } = useNews()
    const navigate = useNavigate();
    const [home, setHome] = useState(false)
    const { Column } = Table;

    const onClickHome = () => {
        setHome(true)
    }

    useEffect(() => {
        if (home === true) {
            navigate('/');
        }
    }, [home])


    console.log("news",news)

    return ( 
        <>
            <HeaderStyle>
                <p>政治新聞整理系統</p>
                <Button onClick={onClickHome}><HomeFilled /></Button>
            </HeaderStyle>
            <TitleWrapper> 
                <h2 style={{marginLeft: "5%", marginTop: "50px", alignSelf: "flex-start"}}>完整新聞</h2>  
                <CardWrapper>
                    {
                        news.map((oneNews)=>(
                            <NewsDetail oneNews={oneNews}/>
                        ))
                    }
                </CardWrapper>
            </TitleWrapper>
        </>
    );
}
 
export default NewsTitle;