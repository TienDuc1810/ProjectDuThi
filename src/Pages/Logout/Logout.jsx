import { UserOutlined } from '@ant-design/icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, Space, message } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';
import './Logout.scss';


const items = [
    {
        label: 'Profile',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: 'Logout',
        key: '2',
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        danger: true,
    }
];


const Logout = () => {

    const navigate = useNavigate();

    const handleMenuClick = (e) => {
        // console.log('click', e);
        if (e.key === '1') {
            message.success('Success!');
            navigate('/profiles');
        } else if (e.key === '2') {
            localStorage.setItem("tokens", false);
            message.success('See you again <3');
            navigate('/login');
        }
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <>
            <Space wrap>
                <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />} className='logout-profile'>
                    <p>{JSON.parse(localStorage.getItem("login")).username}</p>
                </Dropdown.Button>

            </Space>
        </>

    )
};

export default Logout;