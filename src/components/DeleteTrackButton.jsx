import axios from "axios";
import { headers } from "../services";
import PropTypes from "prop-types";

function DeleteTrackButton({ id }) {
  async function handleDelete() {
    try {
      await axios.delete(`https://tiao.supliu.com.br/api/track/${id}`, headers);

      location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button type="button" onClick={handleDelete}>
      Delete Track
    </button>
  );
}

DeleteTrackButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default DeleteTrackButton;
