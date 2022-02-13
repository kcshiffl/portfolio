import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    emailOverlay: {
        bottom: '10%',
        right: '0px',
        transform: 'rotate(90deg)',
        position: 'fixed',
      
        color: '#857883',
        fontFamily: 'Courier New, monospace',
        fontSize: '17px',
    }
})

export default function EmailOverlay() {
    const classes = useStyles()

    return (
        <div className={classes.emailOverlay}>
            kcshiffl@gmail.com
        </div>
    )
}