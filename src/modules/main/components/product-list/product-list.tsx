import React from "react";
import { List, Card } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { ProductItem } from "../../../../types/product";

type ProductListProps = {
  loading: boolean;
  products: ProductItem[];
  setSelectedProduct: (params: ProductItem) => void;
  setViewEditModal: (params: boolean) => void;
};

export const ProductList = ({
  loading,
  products,
  setSelectedProduct,
  setViewEditModal,
}: ProductListProps) => (
  <List
    loading={loading}
    grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 4, xxl: 6 }}
    dataSource={products}
    renderItem={({ _id, title, price }) => (
      <List.Item key={_id}>
        <Card
          actions={[
            <EditOutlined
              key="edit"
              onClick={() => {
                setSelectedProduct({ _id, title, price });
                setViewEditModal(true);
              }}
            />,
          ]}
          title={title}
        >
          Цена: {price}
        </Card>
      </List.Item>
    )}
  />
);
