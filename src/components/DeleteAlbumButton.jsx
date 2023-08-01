import { api } from "../services";
import { useNavigate } from "react-router";
import { StyleDeleteButton } from "./StyledComponents";

function DeleteAlbumButton() {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const id = Number(queryParams.get("id"));

  async function handleDelete() {
    try {
      await api.deleteAlbum({ id });

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
