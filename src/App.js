import Footer from "./components/footer";
import Header from "./components/header";
import SiteName from "./components/siteName";
import Main from "./components/main";
import "./index.css";
import Banner from "./components/banner";
import Delivery from "./components/delivery";
import Feedback from "./components/feedback";
import {Routes, Route} from "react-router-dom"
import Slider from "./components/slider";

const App = ()=> {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <SiteName />
        <Routes>
          <Route path="/" exact element={<Banner />} />
          <Route path="/categories" element={<Main />} />
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