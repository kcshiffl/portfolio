import { makeStyles, Typography } from "@material-ui/core"
import { FaCaretRight } from 'react-icons/fa'

const useStyles = makeStyles({
    arrow: {
        color: '#ef5ae7',
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
    },
    skillText: {
        color: '#dab4d2',
        margin: '5px',
        fontSize: '18px',
        fontFamily: 'Courier New, monospace',
    },
    skillBlock: {
        width: '700px',
    },
    insideSkillBlock: {
        width: '300px',
        height: '150px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },
})

type ExperienceCategoryProps = {
    skills: string[]
}

export default function ExperienceCategory(componentProps: ExperienceCategoryProps) {
    const classes = useStyles()

    const createSkill = (skill: string) => {
        return (
        <div className={classes.flex} >
            <div className={classes.centerRow} >
                <div className={classes.centerHeight}>
                    <FaCaretRight className={classes.arrow} />
                </div>
            </div>
            <Typography className={classes.skillText}>
                {skill} 
            </Typography>
        </div>
        )
    }

    return (
    <div className={classes.skillBlock}>
        <div className={classes.centerRow}>
            <div className={classes.insideSkillBlock} >
                {componentProps.skills.map((skill: string)=> 
                    createSkill(skill)
                )}
            </div>
        </div>
    </div>
    )
}