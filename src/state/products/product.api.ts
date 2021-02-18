import api from "../../lib/axios";
import {
  actionLoading,
  getProductsSuccess,
  updateProductSuccess,
  actionError,
} from "./product.slice";
import { PRODUCTS } from "@endpoints";
import { AppDispatch } from "../toolkit";
import { ProductItem } from "../../types/product";

export const getProducts = async (dispatch: AppDispatch) => {
  dispatch(actionLoading(true));

  try {
    const { data } = await api.get(PRODUCTS);
    dispatch(getProductsSuccess(data));
  } catch (error) {
    dispatch(actionError(error));
  }
};

export const updateProducts = async (
  dispatch: AppDispatch,
  { _id, title, price }: ProductItem
) => {
  dispatch(actionLoading(true));

  try {
    const { data } = await api.put(`${PRODUCTS}/${_id}`, {
      title,
      price,
    });
    dispatch(updateProductSuccess(data));
  } catch (error) {
    dispatch(actionError(error));
  }
};
