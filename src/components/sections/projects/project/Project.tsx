import { Box, makeStyles, Typography } from '@material-ui/core'
import { FaGithub, FaYoutube } from 'react-icons/fa'


const useStyles = makeStyles({
    icons: {
        color: 'white',
        fontSize: '25px',
        marginBottom: '10px',
        filter: 'opacity(90%)',
        '&:hover': {
            filter: 'opacity(100%)',
        }
    },
    box: {
        backgroundColor: '#1e1d1e',
        width: '500px',
        padding: '25px',
        marginBottom: '15px',
    },
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
        flexDirection: 'row',
        marginBottom: '150px'
    },
    stretchRight: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginTop: '75px'
    },
    stretchLeft: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '75px'
    },
    projectHeader: {
        color: '#ef5ae7',
        fontFamily: 'Courier New, monospace',
        fontSize: '15px',
    },
    projectTitle: {
        fontFamily: 'Courier New, monospace',
        color: 'white',
        fontSize: '18px',
        marginBottom: '15px',
    },
    projectText: {
        color: '#A8B7BC',
        fontFamily: 'Courier New, monospace',    
        marginRight: '10px',
    },
    projectImage: {
        maxWidth: '400px',
        borderRadius: '25px',
        margin: '50px',
        filter: 'opacity(50%)',
        transition: '.3s linear',
        '&:hover': {
            filter: 'opacity(100%)',
        }
    },
})

export type ProjectProps = {
    image: string
    imageLink: string
    left: boolean
    title: string
    description: string
    technologies: string[]
    github?: string
    youtube?: string
}

export default function Project(componentProps: ProjectProps) {
    const classes = useStyles()
    const makeImage = () => {
        return (
        <a href={componentProps.imageLink} target="_blank">
            <img src={componentProps.image} className={classes.projectImage} />
        </a>
        )
    }

    const makeIcons = () => {
        return (
        <div className={classes.centerRow}>
            {componentProps.github && 
                <a href={componentProps.github} target="_blank">
                    <FaGithub className={classes.icons}/>
                </a>
            }
            {componentProps.youtube && 
                <a href={componentProps.youtube} target="_blank">
                    <FaYoutube className={classes.icons} style={{marginLeft: '10px'}}/>
                </a>
            }
        </div>   
        )
    }

    return (
    <div className={classes.flex}>
        {componentProps.left && makeImage()}
        <div className={componentProps.left ? classes.stretchRight : classes.stretchLeft}>
            {makeIcons()}
            <Typography className={classes.projectHeader}>Featured Project:</Typography>
            <Typography className={classes.projectTitle}>{componentProps.title}</Typography>

            <Box className={classes.box}>
                <Typography className={classes.projectText}>
                    {componentProps.description}
                </Typography>
            </Box>

            <Typography className={classes.projectHeader}>Technologies:</Typography>
            <div className={classes.centerRow}>
                {componentProps.technologies.map((technology: string, index: number) => 
                    <Typography className={classes.projectText}>
                        {technology}
                        {index !== componentProps.technologies.length - 1 && ','}
                    </Typography>
                )}
            </div>
        </div>
        {!componentProps.left && makeImage()}
    </div>
    )
}