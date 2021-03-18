import Languages from './Skills/Languages';
import Environments from './Skills/Environments';
import Applications from './Skills/Applications';

function showSkill( skill ) {
    if (skill.row == 1 && skill.open) return '1';
    else if (skill.row == 2 && skill.open) return '2';
    else if (skill.row == 3 && skill.open) return '3';
    else return '';
}

const SkillList = ( {skills} ) => {
  const getOpenSkill = skills.map((skill, index) => showSkill(skill));
  const openSkill = parseInt(getOpenSkill.join(''));

  return (
    <>
      <Languages visible={openSkill==1} />
      <Environments visible={openSkill==2} />
      <Applications visible={openSkill==3} />
    </>
  )
}

export default SkillList
