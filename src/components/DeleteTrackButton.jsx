import axios from "axios";
import { headers } from "../services";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import styled from "styled-components";

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

function DeleteTrackButton({ id }) {
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      await axios.delete(`https://tiao.supliu.com.br/api/track/${id}`, {
        headers,
      });

      navigate(0);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledButton type="button" onClick={handleDelete}>
      Delete Track
    </StyledButton>
  );
}

DeleteTrackButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default DeleteTrackButton;
