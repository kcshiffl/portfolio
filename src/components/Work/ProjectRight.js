import { FaGithub } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'


function showYoutube(condition, youtubeLink) {
  let youtube;
  if (condition) {
    youtube = <div></div>;
  }
  else {
    youtube = (
      <div>
        <a href={youtubeLink} target="_blank">
          <FaYoutube size={30}/>
        </a>
      </div>);
  }
  return youtube;
}

const ProjectRight = ( { title, image, description, technologies, github, youtube } ) => {


  return (
    <div className='project' style={{ marginLeft: '8%'}}>

      <div className='project-description-right'>
        <p className='project-header'>Featured Project:</p>
        <p style={{fontSize: '20px'}}>{title}</p>
        <div className='project-description-block-right'>{description}</div>

        <p className='project-header'>Technologies:</p>
        <p style={{color: '#A8B7BC', marginBottom: '2%'}}>{technologies}</p>

        <div style={{display: 'flex'}}>
          <a href={github} target="_blank"><div style={{color: 'white'}}><FaGithub size={30}/></div></a>
          <div style={{marginLeft: '10px'}}></div>
          <div style={ `${youtube}` === "" ? {opacity: '0'} : {color: 'white', opacity: '1'} }>
              {showYoutube(`${youtube}` === "", `${youtube}`)}
          </div>
        </div>

      </div>

      <div className='project-image'><a href={github} target="_blank"><figure className="tint">
        <img src={image} className='project-image-round'/>
      </figure></a></div>

    </div>
  )
}

export default ProjectRight
