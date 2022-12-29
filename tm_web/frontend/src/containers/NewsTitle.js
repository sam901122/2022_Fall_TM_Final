import styled from "styled-components";
import { Button, Card, Col, Row } from "antd";
import { useState,useEffect } from "react";
import { HomeFilled } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useNews } from "../containers/hooks/useNews";

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

const NewsTitle = () => {
    const { curLabel } = useNews()
    const navigate = useNavigate();
    const [home, setHome] = useState(false)
    const onClickHome = () => {
        setHome(true)
    }
    console.log("cur",curLabel)
    useEffect(() => {
        if (home === true) {
            navigate('/');
        }
    }, [home])
    return ( 
        <>
            <HeaderStyle>
                <p>政治新聞整理系統</p>
                <Button onClick={onClickHome}><HomeFilled /></Button>
            </HeaderStyle>
            <p>{curLabel}</p>
        </>
    );
}
 
export default NewsTitle;