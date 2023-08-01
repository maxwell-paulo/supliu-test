import { api } from "../services";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import {
  CreateBackground,
  CreateStyledContainer,
  CreateStyledButton,
  StyledInput,
  StyledDurantion,
} from "./StyledComponents";

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

    try {
      await api.CreateTrack();

      navigate(`/serched-album?id=${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <CreateBackground />

      <CreateStyledContainer>
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
            <CreateStyledButton type="submit">ADD ALBUM</CreateStyledButton>
          </form>
        </section>
      </CreateStyledContainer>
    </>
  );
}

export default CreateTrack;
