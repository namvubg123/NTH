import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input, Typography, message } from 'antd';

function PayForm() {
  const Navigate = useNavigate;
  const onConfirmOrder = (values) => {
    console.log({ values });
    message.success('Đặt hàng thành công, mời bạn tiếp tục Shopping');
    localStorage.removeItem('cartItems');
    Navigate('/');
  };

  return (
    <div className="w-3/4 mx-auto mt-[30px]">
      <h2 className="text-center uppercase text-[20px] font-semibold text-red-600">Thông tin đặt hàng</h2>
      <div className="w-1/2 mx-auto mt-7 border-2 border-gray-300 rounded-lg p-[20px] my-[20px]">
        <h3 className="font-medium">Thông tin khách hàng</h3>
        <Form onFinish={onConfirmOrder}>
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
        </Form>
        <div>
          <p className="font-medium">Phương thức thanh toán</p>
          <li className="cursor-pointer">Thanh toán khi giao hàng(COD)</li>
        </div>
        <Typography.Paragraph type="secondary">Nhớ xem kỹ lại thông tin trước khi đặt hàng nhé</Typography.Paragraph>
      </div>
      <div className="w-1/2 mx-auto mb-[30px]">
        {/* <Link>
          <p className="text-center bg-red-600 py-5 text-white rounded-lg uppercase font-bold tracking-wider cursor-pointer">
            Đặt hàng
          </p>
        </Link> */}
        <Button
          className="text-center bg-red-600 py-5 text-white rounded-lg uppercase font-bold tracking-wider cursor-pointer"
          type="primary"
          danger
          htmlType="submit"
        >
          {' '}
          Đặt hàng
        </Button>
      </div>
    </div>
  );
}

export default PayForm;
