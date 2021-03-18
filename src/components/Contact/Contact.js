import ContactButton from '../General/ContactButton'
import Button from '../General/Button'
import TextareaAutosize from 'react-textarea-autosize';

function makeForm() {
  return (
    <div className='add-form'>

      <div className='form-control' req>
        <label>Name*</label>
        <textarea id='textInput'></textarea>
      </div>

      <div className='form-control' req>
        <label>Email*</label>
        <textarea id='textInput' > </textarea>
      </div>

      <div className='form-control'>
        <label>Message</label>
        <textarea id='textInput-adjustable' style={{ height: '200px' }}> </textarea>
      </div>

      <Button text='Submit' align='center' link='' newTab='false'/>

    </div>
  )
}
const Contact = () => {
  return (
    <div className='contact'>
      <p className='abt-text' align='center' style={{paddingBottom: '3%', color: '#A8B7BC'}} >Want to talk?</p>
      <br></br>
      <form action='mailto:kcshiffl@gmail.com' method='POST' enctype='multipart/form-data' name='EmailTestForm'>
        <div align='center' style={{marginBottom: '30%'}}>
          <ContactButton text="Contact Me" newTab='true' scale={1.5} />
        </div>
      </form>
    </div>
  )
}

export default Contact
