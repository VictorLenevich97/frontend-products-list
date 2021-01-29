import React from "react";
import { PAGE_DETAIL } from "@routes";
import { useSelector } from "react-redux";
import { RootState } from "../../state/toolkit";
import { increment } from "../../state/mainReducerSlice";
import { useAppDispatch, AppDispatch } from "../../state/toolkit";
import { Container, Title, Button } from "./main.styles";

const Main = () => {
  const store = useSelector((state: RootState) => state.main);
  const dispatch = useAppDispatch();

  // Async func with thunk
  const asyncAddCount = () => {
    return async (dispatch: AppDispatch) => {
      dispatch(increment(1));
    };
  };

  console.log("PAGE_DETAIL", PAGE_DETAIL);

  return (
    <Container>
      <Title color="#fa8c16">
        {store.count}
        <span className="subtitle">Что-то вложенное</span>
      </Title>
      <Button
        type="primary"
        onClick={() => {
          dispatch(asyncAddCount());
        }}
      >
        Click
      </Button>
    </Container>
  );
};

export default Main;
