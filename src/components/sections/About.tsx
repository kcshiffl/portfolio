import { makeStyles, Typography } from "@material-ui/core"
import SectionTitle from "../general/SectionTitle"

const useStyles = makeStyles({
    stretch: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    all: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    about: {
        display: 'flex',
        flexDirection: 'row',
    },
    text: {
        fontSize: '18px',
        color: '#A8B7BC',
        fontFamily: 'Courier New, monospace',
        lineHeight: '20px',
    },
    aboutText: {
        maxWidth: '500px',
    },
    portraitText: {
        fontSize: '12px',
        color: '#A8B7BC',
        fontFamily: 'Courier New, monospace',
    },
})

export default function About() {
    const classes = useStyles()
    return (
    <div id="about" className={classes.stretch}>
        <div className={classes.all}>
            <SectionTitle title='About Me' number='01'/>
            <div className={classes.about}>
                <div className={classes.aboutText}>
                    <Typography className={classes.text}>
                        Hi!
                        <br/><br/>
                        I'm Kim, a software engineer based in the Washington, DC area.
                        <br/><br/>
                        I love creating things, whether that be through silly little doodles or full-blown development projects.
                        In my free time, I like playing video games (both console and PC - I'm also a particularly huge Pokémon nut).
                        <br/><br/>
                        Right now, I'm currently looking for an opportunity to work on meaningful projects with a motivated, creative team.
                    </Typography>
                </div>

                <div>
                    <img src={process.env.PUBLIC_URL+"hello.png"} />
                    <Typography className={classes.portraitText}>
                        A self-portrait.
                    </Typography>
                </div>
            </div>
        </div>
    </div>
    )
}