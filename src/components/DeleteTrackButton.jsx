import { api } from "../services";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import { StyleDeleteButton } from "./StyledComponents";

function DeleteTrackButton({ id }) {
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      await api.deleteTrack({ id });

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
