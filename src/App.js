import './App.css';
import {react , useRef,useEffect} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Content from './Content';
import Projects from './Projects';
import Skills from './Skills';
import { useMediaQuery } from '@material-ui/core';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#4747d1"
  },
  app: {
    boxShadow: "none",
  },
  tool: {
   [theme.breakpoints.down('sm')]:{
    flexDirection: "column"
   }
  }
}));



function App() {
  const classes = useStyles();
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null)
  const educationRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToPosition = (ref) =>{
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" })
  }

  



  useEffect(()=>{
    console.log(projectRef.current)
    
  },[])

  const theme = useTheme()
  let matches = useMediaQuery(theme.breakpoints.down('sm'))
  matches = matches ? "smooth" : "fixed"
  console.log(matches)

  return (
    <div className={classes.root}>
      <AppBar  className={classes.app} color="transparent" position={matches}>
        <Toolbar className={classes.tool}>
          <Typography  variant="h6" component="h2" gutterBottom className={classes.title}>
            Alex Kleymen - Full Stack Developer <br/>
            
          </Typography>
          <Button color="inherit" onClick={()=>window.scrollTo({top:0 , behavior: 'smooth'})}>About</Button>
          <Button color="inherit"  onClick={()=>scrollToPosition(projectRef)}>Projects </Button>
          <Button color="inherit"  onClick={()=>scrollToPosition(skillsRef)}>Skills</Button>
          <Button color="inherit" onClick={()=>scrollToPosition(experienceRef)}>Experience</Button>
          <Button color="inherit" onClick={()=>scrollToPosition(educationRef)}>Education</Button>
          <Button color="inherit" onClick={()=>scrollToPosition(contactRef)}>Contact</Button>
          <Button color="inherit">
            <Link color="inherit" underline="none" href="https://docs.google.com/document/d/1wzzQn0av-qOdw7CLBAlydx7bNSWhOwS8PR0hrhGRUns/edit?usp=sharing" target="_blank">Resume</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Content/>
      <Projects ref={projectRef}></Projects>
      <Skills ref={skillsRef}/>
      <Experience ref={experienceRef}/>
      <Education ref={educationRef}/>
      <Contact ref={contactRef}/>
    </div>
  );
}

export default App;
