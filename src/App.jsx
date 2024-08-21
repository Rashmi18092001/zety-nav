import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
// import ResumeTemplates from './pages/Resumetemplates';
// import ResumeBuilder from './pages/ResumeBuilder'
import ResumeHelp from './pages/ResumeHelp';


function App() {
    return (
    <>
    <Router>
      {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resume-help" element={<ResumeHelp />} />
      

     
    </Routes>
    {/* <Footer/> */}
  </Router>
    </>
  )
}

export default App;
