import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: white;
  opacity: 70%;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 65%;
  padding: 50px 20px 20px 20px;
  width: 90%;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 30px;
`;

export const StyledtrackInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  & > div {
    display: flex;
    gap: 35px;
  }
`;

export const Background = styled.div`
  background-color: white;
  opacity: 70%;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);
  height: 65vh;
  width: 90vw;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const StyledButton = styled.button`
  background-color: #59adea;
  padding: 10px 10px;
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

export const CreateBackground = styled.div`
  background-color: white;
  opacity: 70%;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);
  height: 65vh;
  width: 60vw;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const CreateStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 65%;
  padding: 50px 20px 20px 20px;
  width: 90%;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 30px;

  & > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
  & section > form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & section > form > div {
    display: flex;
    gap: 15px;
  }
`;

export const CreateStyledButton = styled.button`
  background-color: #59adea;
  padding: 10px 10px;
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

export const StyledInput = styled.input`
  max-width: 50px;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StyledDurantion = styled.div`
  display: flex;
`;
