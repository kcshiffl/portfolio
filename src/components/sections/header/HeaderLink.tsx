import { NavLink } from "react-router-dom"
import { makeStyles, Typography } from "@material-ui/core"


const useStyles = makeStyles({
    padding: {
        marginRight: '30px',
    },
    link: {
        display: 'inline-block',
        color: '#ef5ae7', 
        fontSize: '15px',
    },
    text: {
        '&:hover': {
            color: 'white',
        },
    },
    flex: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    }
})

type LinkComponents = {
    text: string
    link: string
    number?: string
}

export default function Link(componentProps: LinkComponents) {
    const classes = useStyles()
    return (
    <div className={classes.flex}>
        <div className={classes.padding}>
            <div className={classes.flexRow}>
                <a href={componentProps.link}>
                    {componentProps.number && 
                        <Typography className={classes.link}>
                            {componentProps.number}.&ensp;
                        </Typography>
                    }
                    {componentProps.text}
                </a>
            </div>

        </div>
    </div>
    )
}