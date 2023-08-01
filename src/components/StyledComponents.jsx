import styled from "styled-components";

export const StyleDeleteButton = styled.button`
  background-color: #59adea;
  padding: 10px 20px;
  color: white;
  font-weight: 100;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: red;
  }
`;

export const StyledAddButton = styled.button`
  background-color: #59adea;
  max-width: 400px;
  padding: 10px 20px;
  position: absolute;
  top: 80%;
  left: 84%;
  color: white;
  font-weight: 100;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: lightgreen;
  }
`;

export const StyledContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15%;
  padding: 20px;
  width: 90%;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);

  & > p {
    font-size: 40px;
    font-weight: 100;
  }
`;
