import axios from "axios";
import { headers } from "../services";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import { StyleDeleteButton } from "./StyledComponents";

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
    <StyleDeleteButton type="button" onClick={handleDelete}>
      Delete Track
    </StyleDeleteButton>
  );
}

DeleteTrackButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default DeleteTrackButton;
