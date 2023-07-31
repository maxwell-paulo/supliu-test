import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, CreateAlbum, Album } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-album" element={<CreateAlbum />} />
        <Route path="/serched-album" element={<Album />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
