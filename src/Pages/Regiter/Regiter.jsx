// import {
//     Button,
//     Form,
//     Input,
//     Select
// } from 'antd';
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import swal from 'sweetalert';
// import './Regiter.scss';
// import Logo from './logo.svg';

// const { Option } = Select;

// const formItemLayout = {
//     labelCol: {
//         xs: {
//             span: 24,
//         },
//         sm: {
//             span: 8,
//         },
//     },
//     wrapperCol: {
//         xs: {
//             span: 24,
//         },
//         sm: {
//             span: 16,
//         },
//     },
// };

// const tailFormItemLayout = {
//     wrapperCol: {
//         xs: {
//             span: 24,
//             offset: 0,
//         },
//         sm: {
//             span: 16,
//             offset: 8,
//         },
//     },
// };



// const Regiter = () => {

//     const navigate = useNavigate();

//     const [mail, setMail] = useState('');

//     function handleMail(e) {
//         console.log(e.target.value);
//         setMail(e.target.value);
//     }

//     // check regiter
//     const onFinish = (value) => {

//         if (JSON.parse(localStorage.getItem("regiter")) === null) {

//             localStorage.setItem("regiter", JSON.stringify(value));
//             console.log("Received values of form = ", value);
            
//             swal("Thành công!", "Vui lòng đăng nhập bằng thông tin bạn đã đăng ký!", "success");
//             navigate('/login');

//         } else if (mail === JSON.parse(localStorage.getItem("regiter")).email) {
//             swal({
//                 title: "Tên đăng nhập đã tồn tại?",
//                 text: `Email ${mail} đã được đăng ký!`,
//                 icon: "warning",
//                 buttons: true,
//                 dangerMode: true,
//             })
//                 .then((willDelete) => {
//                     if (willDelete) {
//                         swal("Vui lòng đăng ký bằng tài khoản mới", {
//                         });
//                     } else {
//                         swal("Đăng nhập thất bại!");
//                     }
//                 });

//         } else {
//             localStorage.setItem("regiter", JSON.stringify(value));
//             console.log("Received values of form = ", value);
            
//             swal("Thành công!", "Vui lòng đăng nhập bằng thông tin bạn đã đăng ký!", "success");
//             navigate('/login');
//         }
//     }

//     const [form] = Form.useForm();

//     const prefixSelector = (
//         <Form.Item name="prefix" noStyle>
//             <Select
//                 style={{
//                     width: 70,
//                 }}
//             >
//                 <Option value="86">+86</Option>
//                 <Option value="87">+87</Option>
//             </Select>
//         </Form.Item>
//     );
//     const suffixSelector = (
//         <Form.Item name="suffix" noStyle>
//             <Select
//                 style={{
//                     width: 70,
//                 }}
//             >
//                 <Option value="USD">$</Option>
//                 <Option value="CNY">¥</Option>
//             </Select>
//         </Form.Item>
//     );
//     const [autoCompleteResult, setAutoCompleteResult] = useState([]);
//     const onWebsiteChange = (value) => {
//         if (!value) {
//             setAutoCompleteResult([]);
//         } else {
//             setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
//         }
//     };

//     return (
//         <div className="regiter">
//             <div className="regiter-main">
//                 <img src={Logo} alt="" />
//                 <hr />
//                 <h2>Regiter</h2>
//                 <p className='regiter-desc'>Quick register</p>
//                 <Form
//                     {...formItemLayout}
//                     form={form}
//                     name="register"
//                     onFinish={onFinish}
//                     initialValues={{
//                         prefix: '86',
//                     }}
//                     style={{
//                         maxWidth: 600,
//                     }}
//                     scrollToFirstError
//                 >
//                     <Form.Item
//                         name="username"
//                         label="Username"
//                         tooltip="What do you want others to call you?"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please input your username!',
//                                 whitespace: true,
//                             },
//                         ]}
//                     >
//                         <Input />
//                     </Form.Item>

//                     <Form.Item
//                         name="password"
//                         label="Password"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please input your password!',
//                             },
//                         ]}
//                         hasFeedback
//                     >
//                         <Input.Password />
//                     </Form.Item>

//                     <Form.Item
//                         name="confirm"
//                         label="Confirm Password"
//                         dependencies={['password']}
//                         hasFeedback
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please confirm your password!',
//                             },
//                             ({ getFieldValue }) => ({
//                                 validator(_, value) {
//                                     if (!value || getFieldValue('password') === value) {
//                                         return Promise.resolve();
//                                     }
//                                     return Promise.reject(new Error('The new password that you entered do not match!'));
//                                 },
//                             }),
//                         ]}
//                     >
//                         <Input.Password />
//                     </Form.Item>

//                     <Form.Item
//                         name="email"
//                         label="E-mail"
//                         rules={[
//                             {
//                                 type: 'email',
//                                 message: 'The input is not valid E-mail!',
//                             },
//                             {
//                                 required: true,
//                                 message: 'Please input your E-mail!',
//                             },
//                         ]}
//                     >
//                         <Input onChange={handleMail} />
//                     </Form.Item>

//                     <Form.Item
//                         name="phone"
//                         label="Phone Number"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please input your phone number!',
//                             },
//                         ]}
//                     >
//                         <Input
//                             addonBefore={prefixSelector}
//                             style={{
//                                 width: '100%',
//                             }}
//                         />
//                     </Form.Item>

//                     <Form.Item
//                         name="gender"
//                         label="Gender"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please select gender!',
//                             },
//                         ]}
//                     >
//                         <Select placeholder="select your gender">
//                             <Option value="male">Male</Option>
//                             <Option value="female">Female</Option>
//                             <Option value="other">Other</Option>
//                         </Select>
//                     </Form.Item>

//                     <Form.Item {...tailFormItemLayout}>
//                         <Button type="primary" htmlType="submit">
//                             Register
//                         </Button>
//                         You are have account ? <Link to="/login">Login now!</Link>
//                     </Form.Item>
//                 </Form>
//             </div>
//         </div>
//     );
// };
// export default Regiter;