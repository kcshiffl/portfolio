import TitleCard from './TitleCard'
import HomeMe from './HomeMe'
import Arrow from '../General/Arrow'

const Home = () => {
  return (
    <div>
      <div className='home'>
        <TitleCard />
        <HomeMe />
      </div>
      <a href='#about'><Arrow /></a>
    </div>
  )
}

export default Home
