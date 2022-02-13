import { Box, makeStyles } from "@material-ui/core"
import { useState } from "react"
import SectionTitle from "../SectionTitle"
import CategoryButton from "./CategoryButton"
import ExperienceCategory from "./ExperienceCategory"

const useStyles = makeStyles({
    all: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        padding: '25px',
        border: '1px solid #363236',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
    expButtonBlock: {
        width: '100%',
        justifyContent: 'flex-start',
        display: 'flex',
        margin: '0',
    },
    stretch: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
})

type ExperienceType = {
    category: string
    skills: string[]
}

const skills: ExperienceType[] = [
    {
        category: 'Languages',
        skills: ['Java', 'C++', 'SQL', 'C', 'Python3', 'C#', 'Haskell', 'CSS', 'Javascript', 'HTML', 'XML', 'Go'],
    },
    {
        category: 'Environments',
        skills: ['Git', 'Atom', 'Visual Studio Code', 'Android Studio', 'React', 'JUnit', 'JGrasp', 'Eclipse'],
    },
    {
        category: 'Applications',
        skills: ['AWS', 'Unity', 'Outlook', 'Excel', 'Adobe Photoshop', 'Adobe Illustrator', 'Word', 'Powerpoint'],
    },
    {
        category: 'AWS Services',
        skills: ['AWS Amplify', 'Lambda', 'Cognito', 'S3', 'IAM', 'Route 53'],
    },
]

export default function Experience() {
    const classes = useStyles()

    const [sectionNum, setSectionNum] = useState<number>(0)

    return (
    <div id="experience" className={classes.stretch}>
        <div className={classes.all}>
            <SectionTitle title='Experience' number='02'/>
            <Box className={classes.box}>
                <div className={classes.content}>
                    {skills.map((skill: ExperienceType, index: number) => 
                        <CategoryButton 
                            text={skill.category} 
                            onClick={setSectionNum} 
                            index={index} 
                            isOpen={index === sectionNum}
                        />
                    )}  
                </div>
                <ExperienceCategory skills={skills[sectionNum].skills}/>  
            </Box>
        </div>
    </div>
    )
}