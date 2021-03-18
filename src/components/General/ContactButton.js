const ContactButton = ({ text, link, newTab, scale }) => {
  return (
    <a href={link} target={newTab=='true' ? '_blank' : '_self'}><button className='btn-contact' style={{transform: 'scale('+`${scale}`+')'}}>{text}</button></a>
  )
}

export default ContactButton
