import axios from "axios";
import { headers } from "../services";
import { useNavigate } from "react-router";
import { StyleDeleteButton } from "./StyledComponents";

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
    <StyleDeleteButton type="button" onClick={handleDelete}>
      Delete Album
    </StyleDeleteButton>
  );
}

export default DeleteAlbumButton;
