import React, { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Arrow from './components/General/Arrow'
import { FaChevronDown } from 'react-icons/fa'
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';



const App = () => {

  /** Iterating through skills in Experience section */
  const [skills, setSkills] = useState([
    { row: 1,
      name: 'Languages',
      open: true,
      highlight: true,
    },

    { row: 2,
      name: 'Environments',
      open: false,
      highlight: false,
    },

    { row: 3,
      name: 'Applications',
      open: false,
      highlight: false,
    },
  ])

  /** Opening and closing Experience section tabs **/

  const toggleHighlight = (row) => {
    setSkills(skills.map((skill) => skill.row == row ?
        { ...skill, highlight: true}
        : { ...skill, highlight: false}));
  }

  const toggleOpen = (row) => {
    setSkills(skills.map((skill) => skill.row == row ?
        { ...skill, open: true, highlight: true}
        : { ...skill, open: false, highlight: false}));
  }

  const toggleClose= (row) => {
    setSkills(skills.map((skill) => skill.row == row && !skill.open ?
        { ...skill, highlight: false}
        : { ...skill}));
  }


  return (
    <div className='App'>
      <div class='email-overlay'>kcshiffl@gmail.com</div>

      <Header />
      <div id='home'></div>
      <Home />

      <div id='about' style={{ paddingTop: '7%' }}></div>
      <div className='titles' style={{paddingLeft: '25%'}}>
        <p style={{display: 'inline-block', color: '#ef5ae7', fontSize: '20px'}}>01.&emsp;</p>
        About Me
      </div>
      <About />


      <div id='experience' style={{ paddingTop: '7%' }}></div>
      <div className='titles' style={{paddingLeft: '32%'}}>
        <p style={{display: 'inline-block', color: '#ef5ae7', fontSize: '20px'}}>02.&emsp;</p>
        Experience
      </div>
      <Experience skills={skills} toggleHighlight={toggleHighlight} toggleOpen={toggleOpen} toggleClose={toggleClose} />

      <div id='projects' style={{ paddingTop: '7%' }}></div>
      <div className='titles' style={{paddingLeft: '22%'}}>
        <p style={{display: 'inline-block', color: '#ef5ae7', fontSize: '20px'}}>03. &emsp;</p>
        Projects
      </div>
      <Work />

      <div id='contact' style={{ paddingTop: '7%' }}></div>
      <div className='titles' style={{ paddingLeft: '30%' }}>
        <p style={{display: 'inline-block', color: '#ef5ae7', fontSize: '20px'}}>04. &emsp;</p>
        Contact
      </div>
      <Contact />
    </div>
  )
}

export default App;
