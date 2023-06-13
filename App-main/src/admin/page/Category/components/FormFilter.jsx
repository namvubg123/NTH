import { Button, Col, Form, Row, Select, Space } from 'antd';
import React from 'react';

function FormFilter(props) {
  const [form] = Form.useForm();
  const { Option } = Select;
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <Form
      style={{
        width: 250,
      }}
      onFinish={onFinish}
      onReset={onReset}
      layout="vertical"
      initialValues={{
        type: null,
        category: null,
      }}
      form={form}
    >
      <Row gutter={[24]}>
        <Col span={24}>
          <Form.Item label="Chọn danh mục" name="name">
            <Select placeholder="Chọn danh mục">
              <Option value="laptop">Laptop</Option>
              <Option value="phone">Điện thoại</Option>
              <Option value="accessory">Phụ kiện</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Space>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="default" htmlType="reset">
          Reset
        </Button>
      </Space>
    </Form>
  );
}

export default FormFilter;
