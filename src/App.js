import React, {useState} from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Carts from "./Pages/Carts/Carts";

const App = () => {
  const [footer, setFooter] = useState(true)

  
  const HandlerFooter = (isFooter) => {
    setFooter(isFooter)
  }

  return (
    <BrowserRouter>
      <Navbar  />
    <Routes>
      <Route path="/" element={<Home HandlerFooter={HandlerFooter}/>} />
      <Route path="about" element={<About HandlerFooter={HandlerFooter}/>} />
      <Route path="contact" element={<Contact HandlerFooter={HandlerFooter}/>} />
        <Route path="cart" element={<Carts HandlerFooter={HandlerFooter} />} />
    </Routes>
    {footer && <Footer />}
    </BrowserRouter>
  )
};
export default App;
