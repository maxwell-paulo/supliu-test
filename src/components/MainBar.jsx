import logo from "../assets/logo.png";
import { StyledContainer } from "./StyledComponents";

function Mainbar() {
  return (
    <StyledContainer>
      <a href="/">
        <img src={logo} alt="This is an image" />
      </a>
      <p>Discografia</p>
    </StyledContainer>
  );
}

export default Mainbar;
