import { makeStyles } from '@material-ui/core'
import { FaHome } from 'react-icons/fa'
import HeaderLink from "./HeaderLink"
import MyButton from '../MyButton'

const useStyles = makeStyles({
    header: {
        position: 'fixed',
        width: '100%',
        height: '75px',
        backgroundColor: '#161524',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '10px',
    },
    headerLinks: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: '50px',
    },
})

export default function Header() {
    const classes = useStyles()
    
    return (
    <div className={classes.header}>
        <div id="link_home">
            <a href='./' ><FaHome /></a>
        </div>
        <header className={classes.headerLinks}>
            <HeaderLink link='#about' text='About' number='01' />
            <HeaderLink link='#experience' text='Experience' number='02' />
            <HeaderLink link='#projects' text='Projects' number='03' />
            <HeaderLink link='#contact' text='Contact' number='04' />
            <MyButton link='/Resume.pdf' text='Resumé' newTab={true} />
        </header>
    </div>
    )
}