import { styled } from "styled-components";

export const Button = styled.button`
  padding: 10px;
  min-width: 100px;
  max-width: 200px;
  text-align: center;
  background-color: #fff;
  color: #3e399e;
  border: 1px solid #3e399e;
  transition: all ease-in-out 0.25s;
  cursor: pointer;

  &:hover {
    background-color: #3e399e;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 5px;
  }
`;