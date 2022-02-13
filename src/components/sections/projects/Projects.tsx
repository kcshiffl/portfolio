import { makeStyles } from '@material-ui/core'
import SectionTitle from '../../general/SectionTitle'
import Project, { ProjectProps } from './project/Project'
import kcshifflcom from '../../images/kcshifflcom.png'
import djikstra from '../../images/Djikstra_Project.gif'
import movie from '../../images/movieRec_Project.png'
import katth from '../../images/KATTH_Project.gif'

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
    },
    stretch: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
})

const projects: ProjectProps[] = [
    {
        image: kcshifflcom,
        imageLink: "https://github.com/kcshiffl/portfolio-site",
        left: true,
        title: 'Personal Website',
        description: 'This website. Created with React JS. Provided a learning experience for front-end development with a heavy emphasis on Javascript and CSS.',
        technologies: ['React', 'Javascript', 'CSS', 'HTML'],
        github: "https://github.com/kcshiffl/portfolio-site"
    },
    {
        image: djikstra,
        imageLink: "https://github.com/kshiffl/Dijkstra.git",
        left: false,
        title: 'Dijkstra Shortest Path Graph',
        description: 'A simple application that utilizes Dijkstras pathfinding algorithm. User picks a start point, end point, and blockades - the program calculates the shortest path from start to end.',
        technologies: ['Java'],
        github: "https://github.com/kshiffl/Dijkstra.git",
    },
    {
        image: katth,
        imageLink: "https://github.com/AnthonyBClavel/KATTH_UpdatedRepository",
        left: true,
        title: 'Ko and the Transient Heat',
        description: 'A 3D tile-based puzzle game built in Unity. The player is allowed a limited number of movements to complete each puzzle, and they must maneuver around pushable/breakable blocks.',
        technologies: ['C#', 'Unity', '3DS Max'],
        github: "https://github.com/AnthonyBClavel/KATTH_UpdatedRepository",
        youtube: "https://youtu.be/il92GfC17Hc",
    },
    {
        image: movie,
        imageLink: "https://github.com/kshiffl/MovieRec.git",
        left: false,
        title: 'Movie Recommender System',
        description: 'Data mining movie recommender system that uses rating information (matrix) and side-information (i.e., additional content) with an RMSE accuracy score of 0.92.',
        technologies: ['Python3'],
        github: "https://github.com/kshiffl/MovieRec.git",
    },
]

export default function Projects() {
    const classes = useStyles()
     
    return (
    <div id="projects" className={classes.stretch}>
        <SectionTitle title='Projects' number='03'/>
        {
            projects.map((project: ProjectProps) => {
                return <Project {...project} />
            })
        }
    </div>
    )
}   