import ProjectLeft from './ProjectLeft';
import ProjectRight from './ProjectRight';
import kcshifflcom from '../images/kcshifflcom.png';
import djikstra from '../images/Djikstra_Project.gif';
import movie from '../images/movieRec_Project.png';
import katth from '../images/KATTH_Project.gif';


const Work = () => {
  const kcshifflcom_desc = "This website - the first and only website I've made. Created with React JS. Provided a learning experience for front-end development with a heavy emphasis on Javascript and CSS.";
  const kcshifflcom_git = "https://github.com/kcshiffl/kcshifflcom.git";
  const kcshifflcom_technologies = "React, Javascript, CSS, HTML";


  const djikstra_desc = "A simple application that utilizes Dijkstra's pathfinding algorithm. User picks a start point, end point, and blockades - the program calculates the shortest path from start to end.";
  const djikstra_git = "https://github.com/kshiffl/Dijkstra.git";
  const djikstra_technologies = "Java";

  const katth_desc = "A 3D tile-based puzzle game built in Unity. The player is allowed a limited number of movements to complete each puzzle, and they must maneuver around pushable/breakable blocks.";
  const katth_git = "https://github.com/AnthonyBClavel/KATTH_UpdatedRepository";
  const katth_technologies = "C#, Unity, 3DS Max";
  const katth_youtube = "https://youtu.be/il92GfC17Hc";

  const movie_desc = "Data mining movie recommender system that uses rating information (matrix) and side-information (i.e., additional content) with an RMSE accuracy score of 0.92.";
  const movie_git = "https://github.com/kshiffl/MovieRec.git";
  const movie_technologies = "Python3";

  return (
    <div className='work'>
      <ProjectLeft title='Personal Website' image={kcshifflcom} description={kcshifflcom_desc} technologies = {kcshifflcom_technologies} github={kcshifflcom_git} youtube="" />
      <ProjectRight title='Djisktra Shortest Path Graph' image={djikstra} description={djikstra_desc} technologies = {djikstra_technologies} github={djikstra_git} youtube="" />
      <ProjectLeft title='Ko and the Transient Heat' image={katth} description={katth_desc} technologies = {katth_technologies} github={katth_git} youtube={katth_youtube}/>
      <ProjectRight title='Movie Recommender System' image={movie} description={movie_desc} technologies = {movie_technologies} github={movie_git} youtube="" />
    </div>
  )
}

export default Work
