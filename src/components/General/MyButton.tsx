import { makeStyles } from "@material-ui/core"
import { CSSProperties } from "react"

const useStyles = makeStyles({
    buttonNormal: {
        transition: 'color 0.3s linear',
        background: 'none',
        color: '#dab4d2',
        border: '1px solid #dab4d2',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '15px',
        fontFamily: 'inherit',
        '&:hover': {
            color: '#ffe4f9',
        },
        '&:focus': {
            outline: 'none',
        },
        '&:active': {
            transform: 'scale(0.98)',
        },
    },
    buttonImportant: {
        transition: '0.3s linear',
        background: 'none',
        border: '1px solid #dab4d2',
        borderRadius: '5px',
        cursor: 'pointer',
        fontFamily: 'Courier New, monospace', 
        padding: '20px',
        width: '175px',
        color: '#ef5ae7',
        fontSize: '20px',
        borderColor: '#ef5ae7',
        '&:hover': {
            color: 'white',
            borderColor: 'white',
        },
        '&:active': {
            transform: 'scale(0.98)',
        },
    },
})

type ButtonProps = {
    text: string
    link: string
    newTab: boolean
    important?: boolean
    buttonStyle?: CSSProperties
}

export default function MyButton(componentProps: ButtonProps) {
    const classes = useStyles()
    
    return (
        <a href={componentProps.link} target={componentProps.newTab  ? '_blank' : '_self'} rel="noopener noreferrer">
            <button 
                className={componentProps.important ? classes.buttonImportant : classes.buttonNormal} 
                style={componentProps.buttonStyle}
            >
                {componentProps.text}
            </button>
        </a>
    )
}