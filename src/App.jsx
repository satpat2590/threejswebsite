import styled from "styled-components"
import Contact from './components/Contact.jsx'
import Hero from './components/Hero.jsx'
import Who from './components/Who.jsx'
import Works from './components/Works.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs.jsx';

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: url("./img/4040360.jpg");
  &::-webkit-scrollbar {
    display: none;
  }

`
const articles = [
  { title: 'First Article', datePublished: '2023-01-01', link: '/first-article' },
  { title: 'Second Article', datePublished: '2023-02-01', link: '/second-article' },
  // Add more articles here...
];


function App() {

  return (
    <Container>
      {/* <Router>
        <Hero/>
        <Works/>
        <Contact/>
      </Router> */}
      <Router>
        <Routes>
          {/* <Route path="/blogs">
            <Blogs articles={articles}/>
          </Route>
          <Route path="/">
            <Hero/>
            <Works/>
            <Contact/>
          </Route> */}
          <Route path="/blogs" element={<Blogs articles={articles} />} />
          <Route path="/" element={
            <>
              <Hero />
              <Works />
            </>
        } />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
