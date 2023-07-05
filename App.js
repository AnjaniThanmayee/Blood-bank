import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home/home"
import Donar from './components/Donar/donar'
import Footer from './components/Footer/footer'
import Header from "./components/Header/header"
import Recipient from "./components/Recipient/recipient"
import Request from "./components/Request/request"
import AboutUs from "./components/AboutUs/about"

import HospitalCont from "./components/HospitalCont/hospitalcont"


function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="about" element={<AboutUs />} />
           <Route path="donar" element={<Donar/>}/>
           <Route path="recipient" element={<Recipient/>}/>
           <Route path="request" element={<Request/>}/>
           <Route path="hospital" element={<HospitalCont/>}/>
       </Routes>
       <Footer/>
     </BrowserRouter>
     </div>
      
  );
}

export default App