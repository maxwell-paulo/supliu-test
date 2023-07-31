import axios from "axios";
import { headers } from "../services";
import styled from "styled-components";
import { useNavigate } from "react-router";

const StyledButton = styled.button`
  background-color: blue;
  opacity: 100%;
`;

function DeleteAlbumButton() {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const id = Number(queryParams.get("id"));

  async function handleDelete() {
    try {
      console.log(id);
      await axios.delete(`https://tiao.supliu.com.br/api/album/${id}`, {
        headers,
      });

      navigate("/");
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  }

  return (
    <StyledButton type="button" onClick={handleDelete}>
      Delete Album
    </StyledButton>
  );
}

export default DeleteAlbumButton;
