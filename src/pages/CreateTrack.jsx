import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
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

const StyledInput = styled.input`
  max-width: 50px;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledDurantion = styled.div`
  display: flex;
`;

function CreateTrack() {
  const navigate = useNavigate();
  const id = useParams();
  const [track, setTrack] = useState({
    album_id: Number(id.id),
    number: 0,
    title: "",
    duration: 0,
  });

  const [time, setTime] = useState({
    minutes: 0,
    seconds: 0,
  });

  function handleChangeTime(event) {
    setTime({ ...time, [event.target.name]: event.target.value });
    calculateTotalSeconds();
  }

  function calculateTotalSeconds() {
    const totalSeconds = Number(time.minutes) * 60 + Number(time.seconds);
    setTrack({ ...track, duration: totalSeconds });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "number") {
      setTrack({ ...track, [name]: parseInt(value, 10) });
    } else {
      setTrack({ ...track, [name]: value });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const headers = {
      Authorization: "maxpaulo.mps@gmail.com",
      "Content-Type": "application/json",
    };
    try {
      await axios.post("https://tiao.supliu.com.br/api/track/", track, {
        headers,
      });
      navigate(`/serched-album?id=${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Background />

      <StyledContainer>
        <section>
          <h1>Add new track</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Track name:</label>
              <input
                id="tilte"
                name="title"
                type="text"
                value={track.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="number">Track number:</label>
              <StyledInput
                id="number"
                name="number"
                type="number"
                value={track.number}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="duration">Track duration:</label>
              <StyledDurantion>
                <StyledInput
                  id="minutes"
                  name="minutes"
                  type="number"
                  value={time.minutes}
                  onChange={handleChangeTime}
                />
                <p>:</p>
                <StyledInput
                  id="seconds"
                  name="seconds"
                  type="number"
                  value={time.seconds}
                  onChange={handleChangeTime}
                />
              </StyledDurantion>
            </div>
            <StyledButton type="submit">ADD ALBUM</StyledButton>
          </form>
        </section>
      </StyledContainer>
    </>
  );
}

export default CreateTrack;
