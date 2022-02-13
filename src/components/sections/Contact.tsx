import { makeStyles, Typography } from '@material-ui/core'
import MyButton from './MyButton'
import SectionTitle from './SectionTitle'

const useStyles = makeStyles({
    centerRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    centerHeight: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    flex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    stretch: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        color: '#A8B7BC',
        fontFamily: 'Courier New, monospace',    
        paddingBottom: '25px',
    }
})

export default function Contact() {
    const classes = useStyles()

    return (
    <div id="contact" className={classes.stretch}>
        <SectionTitle title='Contact' number='04'/>
        <div className={classes.flex}>
            <Typography className={classes.text}>Want to talk?</Typography>
            <MyButton 
                text='Contact Me'
                link='mailto:kcshiffl@gmail.com'
                newTab={false}
                important={true}
            />
        </div>
    </div>
    )
}