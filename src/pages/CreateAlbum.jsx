import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: white;
  opacity: 70%;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);
  height: 65vh;
  width: 60vw;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 65%;
  padding: 50px 20px 20px 20px;
  width: 90%;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 30px;

  & > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
  & section > form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & section > form > div {
    display: flex;
    gap: 15px;
  }
`;

const StyledButton = styled.button`
  background-color: #59adea;
  padding: 10px 10px;
  color: white;
  font-weight: 100;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: lightgreen;
  }
`;

function CreateAlbum() {
  const [album, setAlbum] = useState({
    name: "",
    year: "",
  });

  function handleChange(event) {
    setAlbum({ ...album, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const headers = {
      Authorization: "maxpaulo.mps@gmail.com",
      "Content-Type": "application/json",
    };
    try {
      await axios.post("https://tiao.supliu.com.br/api/album/", album, {
        headers,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Background />

      <StyledContainer>
        <section>
          <h1>Add new album</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Album name:</label>
              <input
                id="name"
                name="name"
                type="text"
                value={album.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="year">Album year:</label>
              <input
                id="year"
                name="year"
                type="number"
                value={album.year}
                onChange={handleChange}
              />
            </div>
            <StyledButton type="submit">ADD ALBUM</StyledButton>
          </form>
        </section>
      </StyledContainer>
    </>
  );
}

export default CreateAlbum;
