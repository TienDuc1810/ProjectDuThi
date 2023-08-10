import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './Login.scss';
import Logo from './logo.svg';

const Login = () => {

    // navigate
    const navigate = useNavigate();

    // check login
    const onFinish = (value) => {
        localStorage.setItem("login", JSON.stringify(value));

        const { username, password } = value;
        console.log("Received values of form = ", value);

        if (username === JSON.parse(localStorage.getItem("regiter")).username && password === JSON.parse(localStorage.getItem("regiter")).password) {
            swal("Login success!", "You clicked the button!", "success");
            navigate('/');
            localStorage.setItem("tokens", true);
        } else {
            swal({
                title: "Thông tin đăng nhập không đúng?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                    swal(`Ussername: ${JSON.parse(localStorage.getItem("regiter")).username} - Mật khẩu: ${JSON.parse(localStorage.getItem("regiter")).password}`);
                } else {
                  swal("Vui lòng đăng nhập lại!");
                }
              });
        }
    }

    return (
        <div className='login'>
            <div className='login-main'>
                <img src={Logo} alt="" />
                <hr />
                <h2>Login</h2>
                <p className='login-desc'>Your credentials</p>
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
                            <Checkbox className='checkbox'>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="#!">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType='submit' className="login-form-button">
                            Log in
                        </Button>
                        <p className='regiter-now'>Do not have an account ? <Link className='regiter-btn' to="/regiter">register now!</Link></p>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default Login;