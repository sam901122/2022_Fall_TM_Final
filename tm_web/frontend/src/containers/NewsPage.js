import styled from "styled-components";
import { HomeFilled } from '@ant-design/icons';
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
const CardStyle = styled(Card)`
    width: 90%;
    height:80%;
    box-shadow: 4px 4px 5px rgba(0.2, 0.2, 0.2, 0.2);
`

const RowStyle =styled(Row)`
    height: 90%;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
`

const ColStyle = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
`

const NewsPage = () => {
    const { curLabel, setCurLabel } = useNews();
    const navigate = useNavigate();
    const [home, setHome] = useState(false)
    const [title, setTitle] = useState(false)
    const { Column } = Table;
    
    useEffect(()=>{
        console.log("currrrr", curLabel)
    },[curLabel])

    const onClickHome = () => {
        setHome(true)
    }

    const onClick = (label) => {
        console.log("click",label)
        setTitle(true)
        setCurLabel(label);
        console.log("currrrrInClick", curLabel)
    } 

    useEffect(() => {
        if (home === true) {
            navigate('/');
        }
        if (title === true) {
            navigate('/title')
        }
    }, [home, title])

    const labels = ["fuck","text","mining"]
    

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
                    {
                        labels.map((label)=>(
                                <ColStyle span={8} id="col">
                                    <Table  dataSource={}>
                                        <Column title={label} dataIndex="firstName" key="firstName" />
                                    </Table>
                                </ColStyle>
                        ))
                    }
                </RowStyle>
            </NewsWrapper>
        </>
        
    );
}
 
export default NewsPage;
