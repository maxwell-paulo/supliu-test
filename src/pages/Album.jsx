import { useState, useEffect } from "react";
import { api } from "../services";
import { Mainbar } from "../components";
import {
  DeleteAlbumButton,
  DeleteTrackButton,
  AddTrackButton,
} from "../components";
import {
  StyledContainer,
  StyledtrackInfos,
  Background,
} from "./StyledComponents";

function Album() {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    async function fetchAlbuns() {
      try {
        const response = await api.readAlbums();

        setAlbum(...response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAlbuns();
  }, []);

  return (
    <>
      <Mainbar />
      <Background />

      <StyledContainer>
        <section>
          <h2>
            Álbum: {album.name} {album.year}
          </h2>
          <DeleteAlbumButton disabled />
          <StyledtrackInfos>
            <div>
              <p>Nº</p>
              <p>Faixa</p>
            </div>
            <p>Duração</p>
          </StyledtrackInfos>
          {album.tracks &&
            album.tracks.map((track, index) => {
              return (
                <>
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
                  <DeleteTrackButton id={track.id} />
                </>
              );
            })}
        </section>
        <AddTrackButton />
      </StyledContainer>
    </>
  );
}

export default Album;
