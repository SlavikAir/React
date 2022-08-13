import Footer from "./components/footer";
import Header from "./components/header";
import SiteName from "./components/siteName";
import "./index.css";
import Banner from "./components/banner";
import Delivery from "./components/delivery";
import Feedback from "./components/feedback";
import {Routes, Route} from "react-router-dom"
import Slider from "./components/slider";
import FirstCourses from "./components/categories/FirstCourses";
import Salads from "./components/categories/Salads";
import Meat from "./components/categories/Meat";

const App = ()=> {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <SiteName />
        <Routes>
          <Route path="/"   element={<Banner />} />
          <Route path="/firstCourses" element={<FirstCourses />} />
          <Route path="/salads" element={<Salads/>} />
          <Route path="/meat" element={<Meat/>} />
        </Routes>
        <Delivery />
        <Slider />
        <Feedback />
        <Footer />
        </div>
    </div>
  )
}

export default App