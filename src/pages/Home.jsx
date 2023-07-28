import { useEffect, useState } from "react";
import { api } from "../services";

function Home() {
  const [albuns, setAlbuns] = useState([]);

  useEffect(() => {
    async function fetchAlbuns() {
      try {
        const response = await api.readAlbums();

        setAlbuns([...response.data.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAlbuns();
  }, []);

  return (
    <div>
      {albuns.map((currentAlbum, index) => {
        return (
          <section key={index}>
            <h2>
              Álbum: {currentAlbum.name}, {currentAlbum.year}
            </h2>
            <p>Nº Faixa Duração</p>
            {currentAlbum.tracks.map((track, index) => {
              return (
                <div key={index}>
                  <p>
                    {track.number} {track.title} {track.duration / 60}
                  </p>
                </div>
              );
            })}
          </section>
        );
      })}
    </div>
  );
}

export default Home;
