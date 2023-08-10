import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import Logo from './whiteLogo.svg';

const Login = () => {

    // navigate
    const navigate = useNavigate();

    // check login
    const onFinish = (value) => {
        localStorage.setItem("regiter", JSON.stringify(value));

        const { username, password } = value;
        console.log("Received values of form = ", value);

        if (username === 'admin' && password === '12345678') {
            navigate('/');
            localStorage.setItem("tokens", true);
        }
    }

    return (
        <div className='login'>
            <div className='login-main'>
            <img src={Logo} alt="" />
            <hr />
            <h2>Login</h2>
            <p>Your credentials</p>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType='submit' className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
            </div>
        </div>
    );
};
export default Login;