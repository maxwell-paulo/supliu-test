import { useState, useEffect } from "react";
import { api } from "../services";
import { Mainbar } from "../components";
import styled from "styled-components";
import { DeleteAlbumButton, DeleteTrackButton } from "../components";

const StyledContainer = styled.div`
  background-color: white;
  opacity: 70%;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 65%;
  padding: 50px 20px 20px 20px;
  width: 90%;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 30px;
`;

const StyledtrackInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  & > div {
    display: flex;
    gap: 35px;
  }
`;

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
      <StyledContainer>
        <section>
          <h2>
            Álbum: {album.name} {album.year}
          </h2>
          <DeleteAlbumButton />
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
      </StyledContainer>
    </>
  );
}

export default Album;
