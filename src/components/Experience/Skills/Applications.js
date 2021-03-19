import { FaCaretRight } from 'react-icons/fa';

const Applications = ( {visible} ) => {
  return (
  <div className={visible ? 'opacity' : 'opacity0'}>
    <div className='exp-overlay'>
      <div style={{float: 'left', paddingRight: '50px'}} >
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />AWS</div>
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />Unity</div>
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />Outlook</div>
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />Excel</div>
      </div>

      <div style={{float: 'left', paddingRight: '50px'}}>
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />Adobe Photoshop</div>
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />Adobe Illustrator</div>
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />Word</div>
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />Powerpoint</div>
      </div>
    </div>
    </div>
  )
}

export default Applications
