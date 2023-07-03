import { DownOutlined, UserAddOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space, Tooltip, Tree, notification } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';
import ModalCategory from './components/ModalCategory';

import { deleteCategories, getCategory } from '../../../components/api/category';

function AdminCategory(props) {
  const [openForm, setOpenForm] = useState(false);
  const [Category, setCategory] = useState({});

  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getCategory()
      .then((response) => {
        console.log(response);
        setDataSource(response.data?.categoryList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const treeData = (dataSource) => {
    return dataSource.map((category) => {
      return {
        title: (
          <Space>
            <Tooltip title="Xóa">
              <Popconfirm
                title="Bạn có chắc chắn muốn xóa danh mục này?"
                okText="Xóa"
                cancelText="Hủy"
                onConfirm={() => handleDeleteCategory(category._id)}
              >
                <Button icon={<DeleteOutlined />} className="flex justify-center items-center text-md shadow-md" />
              </Popconfirm>
            </Tooltip>
            <span>{`${category.name} (${category._id})`}</span>
          </Space>
        ),
        key: category._id,
        children: category.children && category.children.length > 0 ? treeData(category.children) : [],
      };
    });
  };

  // const handleConfirmDeleteCategory = (id) => {};
  const handleDeleteCategory = (id) => {
    console.log(id);
    deleteCategories(id)
      .then((res) => {
        console.log('thanh cong ');
        getCategory()
          .then((response) => {
            const data = response.data?.categoryList;
            setDataSource(Array.isArray(data) ? data : [data]);
          })
          .catch((error) => {
            console.log(error);
          });
        notification.success({ message: 'Xóa thành công' });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-3 relative ">
        <Space className="ml-5"></Space>
        <Title level={3} style={{ textTransform: 'uppercase', marginBottom: 0 }}>
          Danh sách danh mục
        </Title>
        <Space size={8}>
          <Button
            icon={<UserAddOutlined />}
            onClick={() => setOpenForm(true)}
            className="flex justify-center items-center text-md font-medium shadow-md bg-slate-100"
          >
            Thêm danh mục
          </Button>
        </Space>
      </div>
      {dataSource && (
        <div className="relative  ">
          <Tree
            className="text-3xl"
            defaultExpandAll
            defaultSelectedKeys={['642aa97817b1c2498f202db0']}
            switcherIcon={<DownOutlined />}
            treeData={treeData(dataSource)}
          />
        </div>
      )}
      <ModalCategory
        onSuccess={() => {
          setOpenForm(false);
        }}
        dataCategory={Category}
        openForm={openForm}
        onChangeClickOpen={(open) => {
          if (!open) {
            setCategory({});
            setOpenForm(false);
          }
        }}
      />
    </div>
  );
}

export default AdminCategory;
