import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Mid from './Mid';

// useEffect(() => {
//   document.title = "new title"
// }, []);

function Home() {
  <head>
    <meta property="og:title" content="Healthscale" />
    <meta property="og:description" content="Supercharge healthcare with AI" />
  </head>
  return (
    <div>
    <Navbar/>
    <About />
    <Mid/>
    <Contact />
    </div>
  );
}

export default Home;
