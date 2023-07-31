import styled from "styled-components";
import { useNavigate } from "react-router";

const StyledButton = styled.button`
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

function AddAlbumButton() {
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      navigate(`/create-album`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledButton type="button" onClick={handleSubmit}>
      Add new Album
    </StyledButton>
  );
}

export default AddAlbumButton;
