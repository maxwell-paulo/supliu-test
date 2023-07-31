import { api } from "../services";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [albumList, setAlbumList] = useState([]);
  const navigate = useNavigate();

  function handleSelect(event) {
    navigate(`/serched-album?id=${event.value}`);
  }

  function styleFunction(provided, state) {
    return { ...provided, color: state.isFocused ? "blue" : "red" };
  }

  useEffect(() => {
    async function fetchAlbuns() {
      try {
        const response = await api.readAlbums();

        setAlbumList([...response.data.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAlbuns();
  }, []);

  const options = albumList.map((currentAlbum) => {
    return {
      value: `${currentAlbum.id}`,
      label: `${currentAlbum.name} `,
    };
  });

  return (
    <div>
      <Select
        options={options}
        onChange={handleSelect}
        styles={styleFunction}
        placeholder="Procurar álbum favorito"
      />
    </div>
  );
}

export default SearchBar;
