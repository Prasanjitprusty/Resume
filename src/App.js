import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Template from './Pages/Home/Template';
import NavBar from './Components/NavBar';
import Preview from './Pages/Preview/preview';
import WorkExperience from './Pages/WorkExprience/WorkExprience';
import Education from './Pages/Education/Education';
import KeySkills from './Pages/keyskills/keySkills';
import PersonalInformation from './Pages/PersonalInformation/Personalnformation';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Template />} />
        <Route path="/personal_information" element={<PersonalInformation />} />
        <Route path="/work_exprience" element={<WorkExperience/>} />
         <Route path='/preview' element={<Preview />} /> 
         <Route path='/education' element={<Education/>} />
         <Route path='/keyskills' element={<KeySkills/>} />
         <Route path='/preview' element={<Preview/>} />
      </Routes>
    </Router>
  );
}

export default App;
