import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

function App() {
  return (
    <>
      <Header/>
      <Main/>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/booking" element={<BookingPage/>}></Route>
        </Routes>
      </BrowserRouter>

      
      <Footer/>
    </>
  );
}

export default App;
