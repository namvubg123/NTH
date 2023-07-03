import React from 'react';
import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { notification } from 'antd';
import { createCategory } from '../../../../components/api/category';

function ModalProduct({ onSuccess, Category, openForm, onChangeClickOpen }) {
  // const handleCreateProduct = (values) => {
  //   onSuccess();
  // };

  // const handleUpdateProduct = (dataProduct, values) => {
  //   onSuccess();
  // };

  return (
    <div>
      <ModalForm
        width={750}
        title={Category?._id ? 'Sửa danh mục' : 'Thêm danh mục'}
        initialValues={Category}
        modalProps={{
          destroyOnClose: true,
          okText: Category?._id ? 'Cập nhật' : 'Tạo mới',
          okType: 'primary',
          cancelText: 'Hủy',
        }}
        open={openForm}
        onFinish={(values) => {
          createCategory(values).then(
            (res) => {
              console.log(res);
              notification.success({ message: ' Tạo thành công ' });
            },
            (err) => {
              console.log(err);
              if (err) {
                notification.error({ message: ' Tạo thất bại' });
              }
            }
          );
        }}
        onOpenChange={onChangeClickOpen}
      >
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width="md"
            name="name"
            label="Tên danh mục"
            placeholder="Nhâp tên danh mục"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width="md"
            name="parentID"
            label="Parent ID"
            placeholder="Parent ID"
          />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
}

export default ModalProduct;
