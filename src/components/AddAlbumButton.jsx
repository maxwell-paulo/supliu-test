import { useNavigate } from "react-router";
import { StyledAddButton } from "./StyledComponents";

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
    <StyledAddButton type="button" onClick={handleSubmit}>
      Add new Album
    </StyledAddButton>
  );
}

export default AddAlbumButton;
