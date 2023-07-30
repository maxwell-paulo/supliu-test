import styled from "styled-components";
import logo from "../assets/logo.png";

function Mainbar() {
  const StyledContainer = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15%;
    padding: 20px;
    width: 90%;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);

    & > p {
      font-size: 40px;
      font-weight: 100;
    }
  `;

  return (
    <StyledContainer>
      <img src={logo} alt="This is an image" />
      <p>Discografia</p>
    </StyledContainer>
  );
}

export default Mainbar;
