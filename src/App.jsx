import "./App.css";
import { Home } from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import { MainLoyout } from "./layout/layout";
import { Contact } from "./pages/contact/contact";
import { Aksiya } from "./pages/aksiya/aksiya";
import { Conpanet } from "./pages/conpanet/conpanet";
import { Menu } from "./pages/menu/menu";
import { Serves } from "./pages/serves/serves";
import { About } from "./pages/about/about";
import {CardNew} from "./components/new/new";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLoyout />}>
          <Route index element={<Home />} />
          <Route path="conponent" element={<Conpanet />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="aksiya" element={<Aksiya />} />
          <Route path="servic" element={<Serves />} />
          <Route path="menu" element={<Menu />} />
          <Route path="cardNew" element={<CardNew />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
