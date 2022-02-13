import EmailOverlay from "./components/overlays/EmailOverlay"
import About from "./components/sections/About"
import IntroCard from "./components/sections/intro/IntroCard"
import { makeStyles } from "@material-ui/core"
import Header from "./components/sections/header/Header"
import Experience from "./components/sections/experience/Experience"
import Projects from "./components/sections/projects/Projects"
import Contact from "./components/sections/Contact"

const useStyles = makeStyles({
    row: {
      minWidth: '100%',
      marginBottom: '10%',
    },
})

export default function App() {
  const classes = useStyles()

  return (
    <div>
      <EmailOverlay />
      <Header />
      
      <IntroCard />

      <div className={classes.row}>
        <About />
      </div>

      <div className={classes.row}>
        <Experience />
      </div>

      <div className={classes.row}>
        <Projects />
      </div>

      <div className={classes.row}>
        <Contact />
      </div>
    </div>
  )
}