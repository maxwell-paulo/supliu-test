import axios from "axios";
import { useState } from "react";

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
    };
    try {
      await axios.post("https://tiao.supliu.com.br/api/album/", headers);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <h1>Adicionar album</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          name="name"
          type="text"
          value={album.name}
          onChange={handleChange}
        />
        <input
          id="year"
          name="year"
          type="number"
          value={album.year}
          onChange={handleChange}
        />
        <button type="submit">ADICIONAR ALBUM</button>
      </form>
    </section>
  );
}

export default CreateAlbum;
