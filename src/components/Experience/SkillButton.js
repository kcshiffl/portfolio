const SkillButton = ({ text, link, highlighted, open }) => {
  return (
      <button className={highlighted || open ? 'exp-btn-highlight' : 'exp-btn'}> {text} </button>
  )
}

export default SkillButton
