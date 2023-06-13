import {
  DeleteOutlined,
  EditOutlined,
  FilterOutlined,
  SearchOutlined,
  SolutionOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { Button, Input, Popconfirm, Popover, Space, Table, Tooltip } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';
import ModalProduct from './components/ModalProduct';
import FormFilter from './components/FormFilter';
import { getProducts } from '../../../components/api/products';

function AdminProducts(props) {
  const [openForm, setOpenForm] = useState(false);
  const [dataProduct, setDataProduct] = useState({});
  const [valueSearchProduct, setValueSearchProduct] = useState('');
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        console.log(response);
        setDataSource(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    {
      title: 'Tên sản phẩm',
      align: 'center',
      dataIndex: 'name',
    },
    {
      title: 'Mã sản phẩm',
      dataIndex: '_id',
      align: 'center',
    },
    {
      title: 'Danh mục',
      align: 'center',
      dataIndex: ['category', 'name'],
    },
    {
      title: 'Giá gốc',
      dataIndex: 'price',
      align: 'center',
    },
    {
      title: 'Giá sale',
      dataIndex: 'salePrice',
      align: 'center',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      align: 'center',
      render: (record) => {
        return (
          <>
            <h2 className="text-left text-base ">{record}</h2>
          </>
        );
      },
    },
    {
      title: 'Phân loại',
      dataIndex: 'type',
      align: 'center',
    },
    {
      title: 'Tùy chọn',
      align: 'center',
      render: (e, record, index) => (
        <Space size={10} key={index}>
          <Tooltip title="Chỉnh sửa">
            <Button
              className="flex justify-center items-center text-md shadow-md"
              icon={<EditOutlined />}
              onClick={() => {
                setDataProduct(record);
                setOpenForm(true);
              }}
            ></Button>
          </Tooltip>
          <Tooltip title="Xóa">
            <Popconfirm
              title="Bạn có chắc chắn muốn xóa sản phẩm này ?"
              icon={<DeleteOutlined />}
              okText="Xóa"
              okType="danger"
              onConfirm={() => handleConfirmDeleteProduct(record._id)}
            >
              <Button className="flex justify-center items-center text-md shadow-md" icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </Tooltip>
          <Tooltip title="Xem chi tiết">
            <Button
              className="flex justify-center items-center text-md shadow-md"
              icon={<SolutionOutlined />}
              onClick={() => {
                setDataProduct(record);
              }}
            ></Button>
          </Tooltip>
        </Space>
      ),
    },
  ];
  const handleConfirmDeleteProduct = (id) => {};
  return (
    <div>
      <div className="flex justify-between items-center mb-3 relative ">
        <Space className="ml-5">
          <Tooltip title="Tìm kiếm sản phẩm">
            <Input
              prefix={<SearchOutlined className="opacity-60 mr-1" />}
              placeholder="Nhập mã mã sản phẩm"
              className="shadow-sm w-[250px]"
              onChange={(e) => {
                setValueSearchProduct(e.target.value);
              }}
              value={valueSearchProduct}
            />
          </Tooltip>
          <Popover trigger={'click'} content={<FormFilter />}>
            <Button icon={<FilterOutlined />} className="flex justify-center items-center">
              Lọc
            </Button>
          </Popover>
        </Space>
        <Title level={3} style={{ textTransform: 'uppercase', marginBottom: 0 }}>
          Danh sách sản phẩm
        </Title>
        <Space size={8}>
          <Button
            icon={<UserAddOutlined />}
            onClick={() => setOpenForm(true)}
            className="flex justify-center items-center text-md font-medium shadow-md bg-slate-100"
          >
            Thêm sản phẩm
          </Button>
        </Space>
      </div>
      {dataSource && (
        <div className="relative  ">
          <Table rowKey="id" bordered={true} dataSource={dataSource} columns={columns} />
        </div>
      )}
      <ModalProduct
        onSuccess={() => {
          setOpenForm(false);
        }}
        dataProduct={dataProduct}
        openForm={openForm}
        onChangeClickOpen={(open) => {
          if (!open) {
            setDataProduct({});
            setOpenForm(false);
          }
        }}
      />
    </div>
  );
}

export default AdminProducts;
