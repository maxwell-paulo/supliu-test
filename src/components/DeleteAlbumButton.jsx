import axios from "axios";
import { headers } from "../services";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: blue;
  opacity: 100%;
`;

function DeleteAlbumButton({ id }) {
  async function handleDelete() {
    try {
      await axios.delete(`https://tiao.supliu.com.br/api/album/${id}`, headers);

      location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledButton type="button" onClick={handleDelete}>
      Delete Album
    </StyledButton>
  );
}

DeleteAlbumButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default DeleteAlbumButton;
