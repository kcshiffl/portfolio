import { FaCaretRight } from 'react-icons/fa';

const Languages = ( {visible} ) => {
  return (
  <div className={visible ? 'opacity' : 'opacity0'}>
  <div className='exp-overlay'>
    <div style={{float: 'left', paddingRight: '50px'}} >
      <div className='exp-skill'>
        <FaCaretRight class='exp-skill-arrow' />Java</div>
      <div className='exp-skill'>
        <FaCaretRight class='exp-skill-arrow' />C++</div>
      <div className='exp-skill'>
        <FaCaretRight class='exp-skill-arrow' />SQL</div>
      <div className='exp-skill'>
        <FaCaretRight class='exp-skill-arrow' />C</div>
    </div>

    <div style={{float: 'left', paddingRight: '50px'}}>
      <div className='exp-skill'>
        <FaCaretRight class='exp-skill-arrow' />Python3</div>
      <div className='exp-skill'>
        <FaCaretRight class='exp-skill-arrow' />C#</div>
      <div className='exp-skill'>
        <FaCaretRight class='exp-skill-arrow' />Haskell</div>
      <div className='exp-skill'>
        <FaCaretRight class='exp-skill-arrow' />CSS</div>
    </div>

    <div style={{float: 'left', paddingRight: '50px'}}>
      <div className='exp-skill'>
        <FaCaretRight class='exp-skill-arrow' />Javascript</div>
      <div className='exp-skill'>
        <FaCaretRight class='exp-skill-arrow' />HTML</div>
      <div className='exp-skill'>
        <FaCaretRight class='exp-skill-arrow' />XML</div>
      <div className='exp-skill'>
        <FaCaretRight class='exp-skill-arrow' />Go</div>
    </div>
  </div>
  </div>
  )
}

export default Languages
