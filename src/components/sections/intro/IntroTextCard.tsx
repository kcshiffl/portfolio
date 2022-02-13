import { makeStyles, Typography } from "@material-ui/core"
import { CSSProperties } from "react"
import MyButton from "../../general/MyButton"

const useStyles = makeStyles({
    flex: {
        maxWidth: '700px'
    },
    flexCenterRow: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '10px'
    },
    homeGreeting: {
        color: '#dab4d2',
        fontSize: '90px',
        fontFamily: 'Courier New, monospace',
    },
    homeName: {
        color: '#dab4d2',
        fontSize: '25px',
        fontFamily: 'Courier New, monospace',
    },
    homeText: {
        color: 'white',
        fontSize: '17px',
        fontFamily: 'Courier New, monospace',
        lineHeight: '20px',
        maxWidth: '500px',
        marginBottom: '50px',
    },  
})

export default function IntroTextCard(){
    const classes = useStyles()

    const buttonStyle: CSSProperties = {
        transform: 'scale(1.25)',
        fontFamily: 'Courier New, monospace', 
    }
    
    return (
        <div className={classes.flex}>
            <Typography className={classes.homeGreeting}>
                Hello,
            </Typography>
            <Typography className={classes.homeName}>
                I'm Kim Shifflett.
            </Typography>
            <Typography className={classes.homeText}>
                I'm a recent George Mason University graduate with a BS in Computer Science
                and a Minor in Computer Game Design.
            </Typography>
            <div className={classes.flexCenterRow}>
                <MyButton 
                    text='Contact Me' 
                    link='#contact' 
                    newTab={false} 
                    buttonStyle={buttonStyle}
                />
            </div>
        </div>
    )
}