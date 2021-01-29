import * as antd from "antd";
import styled from "styled-components";

export const Container = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  margin: 1em;
  padding: 1em;
`;

interface TitleProps {
  color: string;
}

export const Title = styled.h1<TitleProps>`
  color: ${(props) => props.color || "palevioletred"};
  text-align: center;

  &:hover {
    color: green;
    cursor: pointer;
  }

  .subtitle {
    display: block;
    text-decoration: underline;
  }
`;

export const Button = styled(antd.Button)`
  width: 100%;
  height: 60px;
  font-size: 24px;
`;
