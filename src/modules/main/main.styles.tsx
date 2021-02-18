import * as antd from "antd";
import styled from "styled-components";

export const Container = styled.div`
  background: transparent;
  margin: 1em;
  padding: 1em;
`;

interface TitleProps {
  color: string;
}

export const Title = styled.h1<TitleProps>`
  margin-bottom: 20px;
  color: ${(props) => props.color || "palevioletred"};
  font-size: 2rem;
  text-align: center;
  font-weight: 800;
`;

export const Card = styled(antd.Card)``;
