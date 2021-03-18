import SkillButton from './SkillButton'

const Skill = ({ rowNum, skill, items, toggleHighlight, toggleOpen, toggleClose}) => {
  return (
    <div className='exp-btn-block' onClick={() => toggleOpen(skill.row)} onMouseOver={()=>toggleHighlight(skill.row)} onMouseOut={()=>toggleClose(skill.row)}>
      <p className={skill.highlight ? 'exp-scrollbar-highlight' : 'exp-scrollbar' }></p>
      <p className={skill.open ? 'exp-scrollbar-open' : 'exp-scrollbar' }></p>
      <SkillButton text={skill.name} highlighted={skill.highlight} open={skill.open}/>
    </div>
  )
}

export default Skill
