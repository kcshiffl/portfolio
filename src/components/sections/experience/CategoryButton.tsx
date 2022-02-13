import { Button, makeStyles, Typography } from "@material-ui/core"
import { Dispatch, SetStateAction } from "react"

const useStyles = makeStyles({
    categoryButton: {
        width: '100%',
        background: 'none',
        transition: '0.3s',
        textAlign: 'left',
      
        border: 'none',
        outline: 'none',
        padding: '10px 20px',
        margin: '0px 0px',
        cursor: 'pointer',
        color: '#857883',
        '&:hover': {
            color: '#ef5ae7',
            backgroundColor: '#2f2e3c',
            opacity: '1',
         },
    },
    categoryButtonHighlighted: {
        width: '100%',
        background: 'none',
        transition: '0.3s',
        textAlign: 'left',
        outline: 'none',
        border: 'none',
        padding: '10px 20px',
        margin: '0px 0px',
        cursor: 'pointer',
        color: '#ef5ae7',
        backgroundColor: '#1f1e30',
        opacity: '1',  
        '&:hover': {
            backgroundColor: '#2f2e3c',
            opacity: '1',
        },
        '&:focus': {
            outline: 'none',
        },
    },
    buttonText: {
        fontSize: '18px',
        fontFamily: 'Courier New, monospace',
    },
})

type CategoryButtonProps = {
    text: string
    isOpen: boolean
    index: number
    onClick: Dispatch<SetStateAction<number>>
}


export default function CategoryButton(componentProps: CategoryButtonProps) {
    const classes = useStyles()

    return (
        <Button 
            className={componentProps.isOpen ? classes.categoryButtonHighlighted : classes.categoryButton}
            onClick={() => {
                componentProps.onClick(componentProps.index)
            }}
        >
            <Typography className={classes.buttonText}>
                {componentProps.text} 
            </Typography>
        </Button>
    )
}