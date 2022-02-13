import { makeStyles } from "@material-ui/core"
import IntroIconCard from "./IntroIconCard"
import IntroTextCard from "./IntroTextCard"
import { FaCaretDown } from 'react-icons/fa'

const useStyles = makeStyles({
    stretch: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    downArrow: {
        position: 'absolute',
        width: '100%',
        bottom: '50px',
        fontSize: '35px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: 'white',
        animation: 'bounce 0.9s infinite',
    }
})

export default function IntroCard() {
    const classes = useStyles()

    return (
    <div className={classes.stretch}>
        <div className={classes.row}>
            <div className={classes.column}>
                <IntroIconCard />
            </div>
            <div className={classes.column}>
                <IntroTextCard />
            </div>
        </div>
        <div className={classes.downArrow}>
            <a href='#about'><FaCaretDown /></a>
        </div>
    </div>
    )
}