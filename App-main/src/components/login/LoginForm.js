import React, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';
import Cookies from 'js-cookie';
import { Button, Checkbox, Form, Input } from 'antd';
import { notification } from 'antd';

function LoginForm(props) {
  const { setUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onFinish = (values) => {
    // console.log('Success:', values);
    loginUser(values).then((res) => {
      if (res.status === 200) {
        Cookies.set('token', res.data.token);

        setUser(res.data);

        if (res.data.isAdmin === true) {
          notification.success({ message: 'Đăng nhập thành công' });
          navigate(`/admin`);
        } else {
          sessionStorage.setItem('User', JSON.stringify(res.data));
          notification.success({ message: 'Đăng nhập thành công' });
          navigate(`/`);
          window.location.reload();
        }
      }
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="w-full ">
      <Form
        className="mx-auto block my-[200px] border-solid border-2 p-4 "
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2 className="text-center py-4 text-[20px] font-[500] "> Đăng nhập </h2>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="link" href="/register">
            Or Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
