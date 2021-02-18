import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/toolkit";
import { useAppDispatch } from "../../state/toolkit";
import { getProducts, updateProducts } from "../../state/products/product.api";
import { ProductItem } from "../../types/product";
import { ProductList } from "./components/product-list";
import { ModalUpdateProduct } from "./components/modal-update";
import { Container, Title } from "./main.styles";

const Main = () => {
  const state = useSelector((state: RootState) => state);
  const { productSlice } = state;
  const dispatch = useAppDispatch();

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const [viewEditModal, setViewEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>({
    _id: "",
    title: "",
    price: "",
  });

  const onFinish = (values: any) => {
    const { title, price } = values;
    updateProducts(dispatch, { _id: selectedProduct._id, title, price });
    setViewEditModal(false);
  };

  return (
    <Container>
      <Title color="#3a3a3a">Список продуктов</Title>

      <ProductList
        loading={productSlice.loading}
        products={productSlice.data}
        setSelectedProduct={setSelectedProduct}
        setViewEditModal={setViewEditModal}
      />

      <ModalUpdateProduct
        selectedProduct={selectedProduct}
        onFinish={onFinish}
        viewEditModal={viewEditModal}
        setViewEditModal={setViewEditModal}
      />
    </Container>
  );
};

export default Main;
