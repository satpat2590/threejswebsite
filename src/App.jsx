import styled from "styled-components"
import Contact from './components/Contact.jsx'
import Hero from './components/Hero.jsx'
import Who from './components/Who.jsx'
import Works from './components/Works.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs.jsx';
import Navbar from './components/Navbar.jsx'

// code here in case you need 'muddy' background again: 
  // background: url("./img/4040360.jpg");

const Container = styled.div`
  height: 100vw;
  background-color: black;
  scroll-behavior: smooth;
  overflow: hidden;
`
const articles = [
  { title: 'First Article', datePublished: '2023-01-01', link: '/first-article' },
  { title: 'Second Article', datePublished: '2023-02-01', link: '/second-article' },
  // Add more articles here...
];


function App() {

  return (
    <Container>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/blogs" element={<Blogs articles={articles} />} />
          <Route path="/" element={
            <>
              <Hero />
            </>
        } />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
