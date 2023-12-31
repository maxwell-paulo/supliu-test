import { useState } from "react";
import { api } from "../services";
import {
  CreateBackground,
  CreateStyledContainer,
  CreateStyledButton,
} from "./StyledComponents";

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

    try {
      await api.CreateAlbum();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <CreateBackground />

      <CreateStyledContainer>
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
            <CreateStyledButton type="submit">ADD ALBUM</CreateStyledButton>
          </form>
        </section>
      </CreateStyledContainer>
    </>
  );
}

export default CreateAlbum;
