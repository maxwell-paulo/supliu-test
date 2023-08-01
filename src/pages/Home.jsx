import { useEffect, useState } from "react";
import { api } from "../services";
import { Mainbar, SearchBar, AddAlbumButton } from "../components";
import { StyledContainer, StyledtrackInfos } from "./StyledComponents";

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
    <>
      <Mainbar />
      <StyledContainer>
        <SearchBar />
        {albuns.map((currentAlbum, index) => {
          return (
            <section key={index}>
              <h2>
                Álbum: {currentAlbum.name}, {currentAlbum.year}
              </h2>
              <StyledtrackInfos key={index}>
                <div>
                  <p>Nº</p>
                  <p>Faixa</p>
                </div>
                <p>Duração</p>
              </StyledtrackInfos>
              {currentAlbum.tracks.map((track, index) => {
                return (
                  <StyledtrackInfos key={index}>
                    <div>
                      <p>{track.number}</p>
                      <p>{track.title} </p>
                    </div>
                    <p>
                      {Math.floor(track.duration / 60)}:
                      {String(track.duration % 60).padEnd(2, "0")}
                    </p>
                  </StyledtrackInfos>
                );
              })}
            </section>
          );
        })}
      </StyledContainer>
      <AddAlbumButton />
    </>
  );
}

export default Home;
