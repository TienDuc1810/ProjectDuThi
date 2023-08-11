import { Button, Space } from 'antd';
import React from 'react';


const Buttons = (props) => {

    const { title, onClick, style } = props;

    return (
        <Space direction="vertical">
            <Button type="primary" onClick={onClick} style={style}>{title}</Button>
        </Space>
    )
};

export default Buttons;