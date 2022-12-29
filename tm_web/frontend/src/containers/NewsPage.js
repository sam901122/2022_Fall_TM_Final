import styled from "styled-components";
import { HomeFilled, RightCircleOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Table } from "antd";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewsTitle from "./NewsTitle";
import { useNews } from "./hooks/useNews";

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

const NewsWrapper = styled.div`
    width: 100%;
    height: fit-content;
    background-color: aliceblue;
`
const TableStyle = styled(Table)`
    width: 90%;
    height:80%;
    border-radius:20px;
`

const RowStyle =styled(Row)`
    height: 90%;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
`

const ColStyle = styled(Col)`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    th{
        font-family: serif;
        font-size: 20px;
        font-weight: 10px;
        padding-top: 0px;
        padding-bottom: 0px;
    }
    td{
        font-size: 16px;
        font-weight: bold;

        &:hover{
            text-decoration: underline;
        }
    }
`

const CateStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const RightCircleOutlinedStyle = styled(RightCircleOutlined)`
    opacity:0.5;

    &:hover{
        opacity: 1;
    }
`

const NewsPage = () => {
    const { labels, curLabel, setCurLabel, get_news, news,  type1News, type2News, type3News } = useNews();
    const navigate = useNavigate();
    const [home, setHome] = useState(false)
    const [title, setTitle] = useState(false)
    const [type1, setType1] = useState([])
    const [type2, setType2] = useState([])
    const [type3, setType3] = useState([])

    const { Column } = Table;

    const onClickHome = () => {
        setHome(true)
    }

    const onClick = (label) => {
        setTitle(true)
        setCurLabel(label);
        get_news(3);
        console.log("2",news)
    } 

    useEffect(() => {
        if (home === true) {
            navigate('/');
        }
        if (title === true) {
            navigate('/title')
        }
    }, [home, title])

    useEffect(()=>{
        setType1(type1News.slice(0,4))
        setType2(type2News.slice(22,26))
        setType3(type3News.slice(10,14))
    },[type1News, type2News, type3News])


    return ( 
        <>
            <HeaderStyle>
                <p>政治新聞整理系統</p>
                <Button onClick={onClickHome}><HomeFilled /></Button>
            </HeaderStyle>
            <NewsWrapper>
                <h2 style={{marginTop: "50px",
                    marginLeft: "5%"
                }}>新聞分類</h2>
                <RowStyle gutter={[8, 24]} id="row">
                
                    <ColStyle span={8} id="col">
                        <TableStyle  dataSource={type1} pagination={false}>
                            <Column title={
                                <CateStyle>
                                    <p>{labels[0]}</p>
                                    <RightCircleOutlinedStyle onClick={()=>(onClick(labels[0]))}/>
                                </CateStyle>} 
                            dataIndex="title"/>
                        </TableStyle>
                    </ColStyle>  
                    <ColStyle span={8} id="col">
                        <TableStyle  dataSource={type2} pagination={false}>
                            <Column title={
                                <CateStyle>
                                    <p>{labels[1]}</p>
                                    <RightCircleOutlinedStyle onClick={()=>(onClick(labels[1]))}/>
                                </CateStyle>} 
                                dataIndex="title" id="insideCol"/>
                        </TableStyle>
                    </ColStyle>
                    <ColStyle span={8} id="col">
                        <TableStyle  dataSource={type3} pagination={false}>
                            <Column title={
                                <CateStyle>
                                    <p>{labels[2]}</p>
                                    <RightCircleOutlinedStyle onClick={()=>(onClick(labels[2]))}/>
                                </CateStyle>} 
                                dataIndex="title" id="insideCol"/>
                        </TableStyle>
                    </ColStyle>                                          

                </RowStyle>
            </NewsWrapper>
        </>
        
    );
}
 
export default NewsPage;
