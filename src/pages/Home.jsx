import { useEffect, useState } from "react";
import { api } from "../services";
import styled from "styled-components";
import { Mainbar } from "../components";

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
      <Mainbar></Mainbar>
      <StyledContainer>
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
    </>
  );
}

export default Home;
