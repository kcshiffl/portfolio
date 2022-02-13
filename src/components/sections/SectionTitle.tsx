import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
    row: {
        display: 'flex', 
        flexDirection: 'row',
        marginBottom: '50px',
    },
    number: {
        color: '#ef5ae7', 
        fontSize: '20px',
        fontFamily: 'Courier New, monospace',
    },
    title: {
        color: '#dab4d2',
        fontSize: '25px',
        fontFamily: 'Courier New, monospace',
    },
})

type SectionTitleProps = {
    title: string
    number: string
}

export default function SectionTitle(componentProps: SectionTitleProps) {
    const classes = useStyles()

    return (
    <div className={classes.row}>
        <Typography className={classes.number}>
            {componentProps.number}.&emsp;
        </Typography>
        <Typography className={classes.title}>
            {componentProps.title}
        </Typography>
    </div>
    )
}