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
    centerText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }
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
                        I love creating things. My pastimes are making silly doodles or random development projects.
                        <br/><br/>
                        In my free time, I love playing video games (I'm a particularly huge Pokémon nut).
                        <br/><br/>
                        My end goal is to work on meaningful projects with a motivated, creative team.
                    </Typography>
                </div>

                <div>
                    <img src={process.env.PUBLIC_URL+"hello.png"} />
                    <div className={classes.centerText}>
                        <Typography className={classes.portraitText}>
                            A self-portrait.
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}