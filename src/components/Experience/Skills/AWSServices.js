import { FaCaretRight } from 'react-icons/fa';

const AWSServices = ( {visible} ) => {
  return (
  <div className={visible ? 'opacity' : 'opacity0'}>
    <p style={{textAlign:'center', color: '#dab4d2'}}>Currently in the process of acquiring <p style={{color: '#ef5ae7'}}>AWS Certified Cloud Practitioner</p> certification.</p>
    <br></br>
    <div className='exp-overlay'>
      <div style={{float: 'left', paddingRight: '50px'}} >
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />AWS Amplify</div>
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />Lambda</div>
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />Cognito</div>
      </div>

      <div style={{float: 'left', paddingRight: '50px'}}>
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />S3</div>
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />IAM</div>
        <div className='exp-skill'>
          <FaCaretRight class='exp-skill-arrow' />Route 53</div>
      </div>
    </div>
    </div>
  )
}

export default AWSServices
