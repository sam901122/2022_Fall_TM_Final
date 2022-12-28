import styled from "styled-components";
import { HomeFilled } from '@ant-design/icons';
import { Button, Card, Col, Row, Table } from "antd";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        box-shadow: 4px 4px 5px rgba(0.2, 0.2, 0.2, 0.2);
    `

    const RowStyle =styled(Row)`
        height: 100%;
        width: 100%;
        padding-left: 4%;
        padding-right: 4%;
    `

    const ColStyle = styled(Col)`
        display: flex;
        justify-content: center;
        align-items: center;
    `

const NewsPage = () => {
    const navigate = useNavigate();
    const [home, setHome] = useState(false)
    const { Column } = Table;

    const onClick = () => {
        setHome(true)
    }
    const data = [
        {
          key: '1',
          firstName: 'John',
        },
        {
          key: '2',
          firstName: 'Jim',
        },
        {
          key: '3',
          firstName: 'Joe',
        },
      ];


    useEffect(() => {
        if (home === true) {
            navigate('/');
        }
    }, [home])

    return ( 
        <>
            <HeaderStyle>
                <p>政治新聞整理系統</p>
                <Button onClick={onClick}><HomeFilled /></Button>
            </HeaderStyle>
            <NewsWrapper>
                <h2 style={{marginTop: "50px",
                    marginLeft: "5%"
                }}>新聞分類</h2>
                <RowStyle gutter={[8, 24]} id="row">
                    <ColStyle span={8} id="col">
                        <TableStyle dataSource={data}>
                            <Column title="First Name" dataIndex="firstName" key="firstName" />
                        </TableStyle>
                    </ColStyle>
                    <ColStyle span={8}>
                        <TableStyle dataSource={data}>
                            <Column title="First Name" dataIndex="firstName" key="firstName" />
                        </TableStyle>
                    </ColStyle>
                    <ColStyle span={8}>
                        <TableStyle dataSource={data}>
                            <Column title="First Name" dataIndex="firstName" key="firstName" />
                        </TableStyle>
                    </ColStyle>

                    <ColStyle span={8} id="col">
                        <TableStyle dataSource={data}>
                            <Column title="First Name" dataIndex="firstName" key="firstName" />
                        </TableStyle>
                    </ColStyle>
                    <ColStyle span={8}>
                        <TableStyle dataSource={data}>
                            <Column title="First Name" dataIndex="firstName" key="firstName" />
                        </TableStyle>
                    </ColStyle>
                    <ColStyle span={8}>
                        <TableStyle dataSource={data}>
                            <Column title="First Name" dataIndex="firstName" key="firstName" />
                        </TableStyle>
                    </ColStyle>

                    <ColStyle span={8} id="col">
                        <TableStyle dataSource={data}>
                            <Column title="First Name" dataIndex="firstName" key="firstName" />
                        </TableStyle>
                    </ColStyle>
                    <ColStyle span={8}>
                        <TableStyle dataSource={data}>
                            <Column title="First Name" dataIndex="firstName" key="firstName" />
                        </TableStyle>
                    </ColStyle>
                    <ColStyle span={8}>
                        <TableStyle dataSource={data}>
                            <Column title="First Name" dataIndex="firstName" key="firstName" />
                        </TableStyle>
                    </ColStyle>      
                </RowStyle>
            </NewsWrapper>
        </>
        
    );
}
 
export default NewsPage;
