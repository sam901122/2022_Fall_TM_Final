import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Card, Col, Row } from 'antd';
import taipeiIMG from "../img/101up.jpg"
import newTaipeiIMG from "../img/NewTaipeiCity.jpg"
import taoyuanIMG from "../img/Taoyuan.jpg"
import hsinIMG from "../img/Hsinchu.jpg"
import taichungIMG from "../img/Taichung.jpg"
import keelongIMG from "../img/Keelong.jpg"
import tainanIMG from "../img/Tainan.jpg"
import kaoIMG from "../img/Kaohsiung.jpg"
import chayiIMG from "../img/Chayi.jpg"
import NewsPage from "./NewsPage";

const MainPage = () => {
    const navigate = useNavigate();
    const [Hsinchu, setHsinchu] = useState(false)

    const onClick = () => {
        setHsinchu(true)
    }

    useEffect(() => {
        if (Hsinchu === true) {
            navigate('/Hsinchu');
        }
    }, [Hsinchu])

    const HeaderStyle = styled.div`
    box-sizing: border-box;
    color: white;
    display: block;
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

    const MainWrapper = styled.div`
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-content: space-evenly;
    `
    
    const CityStyle = styled.div`
        width:300px;
        height:180px;
        background-color: white;
        border-radius: 5px;
        background-size: 100%;
        background-position: center;
        position: relative;

        &:before, &:after{
            content:'';
            position:absolute;
            transition: all .5s ease-in;
          }
        
        &:before{
        width: 80%;
        height: 60%;
        left: 10%; 
        top:20%; 
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        transform: scale(0,1);
        }
        &:after{
        width: 60%;
        height: 80%;
        left: 20%;
        top:10%;
        border-right: 1px solid transparent;
        border-left: 1px solid transparent;
        transform: scale(1,0);   
        }
        
        img{
          width: 100%;
          height: 100%;
          opacity: 1;
          transition: .5s;
          border-radius: 5px;
          box-shadow: 4px 4px 5px rgba(0.2, 0.2, 0.2, 0.2);
        }
        
        .text{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          opacity: 0.7;
        text-shadow: 0 0.2px white, 0.2px 0 white, -0.2px 0 white, 0 -0.2px white;
          font-family:serif;
          font-weight:bolder;
          font-size:30px;
          transition: opacity .5s ease-in;
          color: white
        }
        &:hover{
          &:before{
            border-top: 1px solid white;
            border-bottom: 1px solid white;
            transform: scale(1,1);       
          }
          &:after{
            border-right: 2px solid grey;
            border-left: 2px solid grey;
            transform: scale(1,1);   
          }
          
          img{
             opacity: 0.3;
          }
          
          .text{
            opacity: 1;
            color: rgb(90, 90, 90);
          }
        }
    `

    const RowStyle =styled(Row)`
        height: 90%;
        width: 80%;
    `

    const ColStyle = styled(Col)`
        display: flex;
        justify-content: center;
        align-items: center;
    `
    return ( 
        <> 
        <HeaderStyle><p>政治新聞整理系統</p></HeaderStyle>
        <MainWrapper id ="main">
            <RowStyle gutter={[8, 24]} id="row">
                <ColStyle span={8} id="col">
                    <CityStyle  bordered={false}>
                        <img src={taipeiIMG}></img>
                        <div className="text">台北市</div>
                    </CityStyle>
                </ColStyle>
                <ColStyle span={8}>
                    <CityStyle  bordered={false}>
                        <img src={newTaipeiIMG}></img>
                        <div className="text">新北市</div>
                    </CityStyle>
                </ColStyle>
                <ColStyle span={8}>
                    <CityStyle bordered={false}>
                        <img src={taoyuanIMG}></img>
                        <div className="text">桃園市</div>
                    </CityStyle>
                </ColStyle>

                <ColStyle span={8} id="col">
                    <CityStyle bordered={false}>
                        <img src={taichungIMG}></img>
                        <div className="text">台中市</div>
                    </CityStyle>
                </ColStyle>
                <ColStyle span={8}>
                    <CityStyle  bordered={false}>
                        <img src={tainanIMG}></img>
                        <div className="text">台南市</div>
                    </CityStyle>
                </ColStyle>
                <ColStyle span={8}>
                    <CityStyle bordered={false}>
                        <img src={kaoIMG}></img>
                        <div className="text">高雄市</div>
                    </CityStyle>
                </ColStyle>

                <ColStyle span={8}>
                    <CityStyle  bordered={false}>
                        <img src={keelongIMG}></img>
                        <div className="text">基隆市</div>
                    </CityStyle>
                </ColStyle>
                <ColStyle span={8} id="col" onClick={onClick}>
                    <CityStyle bordered={false}>
                        <img src={hsinIMG}></img>
                        <div className="text">新竹市</div>
                    </CityStyle>
                </ColStyle>
                <ColStyle span={8}>
                    <CityStyle bordered={false}>
                        <img src={chayiIMG}></img>
                        <div className="text">嘉義市</div>
                    </CityStyle>
                </ColStyle>      
            </RowStyle>
        </MainWrapper>
        </>
    );
}
 
export default MainPage
;