import { useNavigate } from "react-router";
import { StyledAddButton } from "./StyledComponents";

function AddTrackButton() {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const id = Number(queryParams.get("id"));

  async function handleSubmit() {
    try {
      navigate(`/add-track/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledAddButton type="button" onClick={handleSubmit}>
      Add new track
    </StyledAddButton>
  );
}

export default AddTrackButton;
