import React from "react";
import { Modal, Form, Input, Button } from "antd";
import { ProductItem } from "../../../../types/product";

type ModalUpdateProductProps = {
  selectedProduct: ProductItem;
  onFinish: (params: any) => void;
  viewEditModal: boolean;
  setViewEditModal: (params: boolean) => void;
};

export const ModalUpdateProduct = ({
  selectedProduct,
  onFinish,
  viewEditModal,
  setViewEditModal,
}: ModalUpdateProductProps) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    form.setFieldsValue(selectedProduct);
  }, [form, selectedProduct]);

  return (
    <Modal
      title="Редактирование продукта"
      centered
      visible={viewEditModal}
      onOk={() => setViewEditModal(false)}
      onCancel={() => setViewEditModal(false)}
      footer={null}
    >
      <Form
        initialValues={selectedProduct}
        form={form}
        name="product"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Название"
          name="title"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="title" />
        </Form.Item>

        <Form.Item
          label="Цена"
          name="price"
          rules={[{ required: true, message: "Please input your price!" }]}
        >
          <Input type="number" placeholder="title" />
        </Form.Item>

        <Form.Item shouldUpdate={true}>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Сохранить
            </Button>
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
};
