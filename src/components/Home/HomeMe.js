import Button from '../General/Button'
const HomeMe = () => {
  return (
    <div className='home-greeting'>
      <p>Hello,</p>
      <p className='home-name'>I'm Kim Shifflett.</p>
      <p className='home-text'>
      I'm a recent George Mason University graduate with a BS in Computer Science
      and a Minor in Computer Game Design.</p>
      <Button text='Contact Me' link='#contact' newTab='false' />
    </div>
  )
}

export default HomeMe
