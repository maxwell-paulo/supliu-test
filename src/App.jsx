import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, CreateAlbum } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-album" element={<CreateAlbum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
