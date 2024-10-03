import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Favorites from "pages/Favorites";
import Player from "pages/Player";
import Header from "components/Header";
import Footer from "components/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
