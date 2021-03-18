import PropTypes from 'prop-types'

const Button = ({ text, link, newTab, scale }) => {
  return (
    <a href={link} target={newTab=='true' ? '_blank' : '_self'} rel="noopener noreferrer">
      <button className='btn' style={{transform: 'scale('+`${scale}`+')'}}>
        {text}
      </button>
    </a>
  )
}

Button.defaultProps = {
  text: '',
  link: ''
}

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string
}

export default Button
