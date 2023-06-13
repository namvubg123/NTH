import { DownOutlined, FilterOutlined, SearchOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Input, Popover, Space, Tooltip, Tree } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';
import ModalCategory from './components/ModalCategory';
import FormFilter from './components/FormFilter';
import { getCategory } from '../../../components/api/category';

function AdminCategory(props) {
  const [openForm, setOpenForm] = useState(false);
  const [Category, setCategory] = useState({});
  const [valueSearchCategory, setValueSearchCategory] = useState('');
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
        title: `${category.name} (${category._id})`,
        key: category._id,
        children: category.children && category.children.length > 0 ? treeData(category.children) : [],
      };
    });
  };

  // const handleConfirmDeleteCategory = (id) => {};

  return (
    <div>
      <div className="flex justify-between items-center mb-3 relative ">
        <Space className="ml-5">
          <Tooltip title="Tìm kiếm danh mục">
            <Input
              prefix={<SearchOutlined className="opacity-60 mr-1" />}
              placeholder="Nhập mã danh mục"
              className="shadow-sm w-[250px]"
              onChange={(e) => {
                setValueSearchCategory(e.target.value);
              }}
              value={valueSearchCategory}
            />
          </Tooltip>
          <Popover trigger={'click'} content={<FormFilter />}>
            <Button icon={<FilterOutlined />} className="flex justify-center items-center">
              Lọc
            </Button>
          </Popover>
        </Space>
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
        <Space size={8}>
          <Button
            icon={<UserAddOutlined />}
            onClick={() => setOpenForm(true)}
            className="flex justify-center items-center text-md font-medium shadow-md bg-slate-100"
          >
            Sửa danh mục
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
