import PropTypes from 'prop-types'
import Button from '../General/Button'
import HeaderLink from './HeaderLink'
import { FaHome } from 'react-icons/fa'

const Header = () => {
  return(
    <div>
      <div id="link_home">
        <a href='./' >
          <FaHome />
          </a>
      </div>
      <header className='header'>
        <HeaderLink link='#about' text='About' num='01'/>
        <HeaderLink link='#experience' text='Experience' num='02' />
        <HeaderLink link='#projects' text='Projects' num='03'/>
        <HeaderLink link='#contact' text='Contact' num='04' />
        <Button text='Resume' link="/Resume.pdf" newTab='true' />
      </header>
    </div>
  )
}

export default Header
