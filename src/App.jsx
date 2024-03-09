import "./App.css";
import NavBar from "./Components/NavBar";
import Page from "./Components/Page";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Solution from "./Pages/Solution";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
