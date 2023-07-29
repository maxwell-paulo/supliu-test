import axios from "axios";
import { headers } from "../services";
import PropTypes from "prop-types";

function DeleteButton({ id }) {
  async function handleDelete() {
    try {
      await axios.delete(`https://tiao.supliu.com.br/api/album/${id}`, headers);

      location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button type="button" onClick={handleDelete}>
      Delete
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default DeleteButton;
