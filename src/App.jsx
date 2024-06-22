import MainPage from "./pages/Main.Page";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { First, Second, Third, Fourth } from './pages'
import { Link } from 'react-router-dom';


function App() {

  return (
    <>
    <Container>
    <Header />
    <nav>
            <ul>
              <li><Link to="/" path={<First/>}>First</Link></li>
              <li><Link to="/second">Second</Link></li>
              <li><Link to="/third">Third</Link></li>
              <li><Link to="/fourth">Fourth</Link></li>
            </ul>
          </nav>
        <Routes>
            <Route path="/" element={<First/>} />
            <Route path="/second" element={<Second />} />
            <Route path="/third" element={<Third />} />
            <Route path="/fourth" element={<Fourth />} />
        </Routes>
    </Container>
    {/* <MainPage /> */}
    {/* <Footer /> */}
    </>
  )
}


export default App;
