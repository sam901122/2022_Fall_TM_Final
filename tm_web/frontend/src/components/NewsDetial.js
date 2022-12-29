import styled from "styled-components"
import { Card } from 'antd';
import { Modal, Table } from 'antd';
import { useState, useEffect } from "react";

const { Column } = Table;
const CardStyle = styled(Card)`
    display: flex;
    flex-direction: column; 
    margin: 10px;
    width: 20%;
`
const NewsDetail = ({oneNews}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <CardStyle hoverable onClick={() => { showModal(); }}>
                <h3>{oneNews.title}</h3>
            </ CardStyle>
            <Modal title={oneNews.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <p>{oneNews.body}</p>
                <a href={oneNews.url}>原新聞連結</a>
            </Modal>
        </>
    )
}

export default NewsDetail;