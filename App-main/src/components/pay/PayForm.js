import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Typography, message } from 'antd';

function PayForm() {
  const navigate = useNavigate();
  const onConfirmOrder = (values) => {
    navigate('/');
    message.success('Đặt hàng thành công, mời bạn tiếp tục Shopping');
    localStorage.removeItem('cartItems');
  };

  return (
    <div className="w-3/4 mx-auto mt-[30px]">
      <h2 className="text-center uppercase text-[20px] font-semibold text-red-600">Thông tin đặt hàng</h2>
      <div className="w-1/2 mx-auto mt-7 border-2 border-gray-300 rounded-lg p-[20px] my-[20px]">
        <h3 className="font-medium">Thông tin khách hàng</h3>
        <Form onFinish={onConfirmOrder} autoComplete="off">
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Nhập tên người nhận hàng',
              },
            ]}
            name="full_name"
          >
            <Input
              className="border-2 border-gray-300 rounded-lg p-3  mt-[20px]  hover:border-red-300 hover:shadow-lg"
              placeholder="Tên người nhận hàng"
            />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Nhập số điện thoại ',
              },
            ]}
            name="your_number"
          >
            <Input
              className="border-2 border-gray-300 rounded-lg p-3  hover:border-red-300 hover:shadow-lg"
              placeholder="Nhập số điện thoại"
            />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Nhập email',
              },
            ]}
            name="your_name"
          >
            <Input
              className="border-2 border-gray-300 rounded-lg p-3  hover:border-red-300 hover:shadow-lg"
              placeholder="Nhập email của bạn"
            />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Nhập địa chỉ nhận hàng',
              },
            ]}
            name="your_address"
          >
            <Input
              className="border-2 border-gray-300 rounded-lg p-3 hover:border-red-300 hover:shadow-lg"
              placeholder="Nhập địa chỉ nhận hàng"
            />
          </Form.Item>
          <div>
            <p className="font-medium">Phương thức thanh toán</p>
            <Checkbox>Thanh toán khi nhận hàng</Checkbox>
          </div>
          <Typography.Paragraph type="secondary">Nhớ xem kỹ lại thông tin trước khi đặt hàng nhé</Typography.Paragraph>
          <Form.Item
            wrapperCol={{
              offset: 4,
            }}
          >
            <Button className="w-512px h-40px px-60" type="primary" danger htmlType="submit">
              Đặt hàng
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default PayForm;
