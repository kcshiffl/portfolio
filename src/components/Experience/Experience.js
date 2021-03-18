import Skill from './Skill'
import SkillList from './SkillList'

const Experience = ( {skills, toggleHighlight, toggleOpen, toggleClose} ) => {

  return (
  <div>
    <div className='exp'>
      <div className='exp-block'>
        {skills.map((skill, index) => (
          <Skill rowNum={index} skill={skill} toggleHighlight={toggleHighlight} toggleOpen={toggleOpen} toggleClose={toggleClose}/>
        ))}
      </div>

      <div className='exp-block' style={{ width: '100%' }}>
        <SkillList skills={skills}/>
      </div>

    </div>
  </div>
  )
}

export default Experience
