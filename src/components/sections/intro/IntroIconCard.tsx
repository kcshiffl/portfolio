import logo from '../../images/Me_Icon.png'
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    logoDisplay: {
        borderRadius: '50%',
        maxHeight: '250px',
        marginRight: '200px',
    }
})

export default function IntroIconCard() {
    const classes = useStyles()

    return (
        <img className={classes.logoDisplay} src={logo} />
    )
}