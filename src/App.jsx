import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Page from "./Components/Page";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/Product";
import Solution from "./Pages/Solution";

function App() {
  return (
    // <>
    // <NavBar />
    // <Page />
    // </>
    <>
      {/* <Solution/> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
