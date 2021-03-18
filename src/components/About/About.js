const About = () => {
  return (
    <div className='abt'>
      <div style={{marginRight: '15%', maxWidth: '55%'}}>
        <p>
          Hi!
        </p>
        <br></br>
        <p>
          I'm Kim, a software engineer based in the Washington, DC area.
        </p>
        <br></br>
        <p>
          I love creating things, whether that be through silly little doodles or full-blown development projects.
          In my free time, I like playing video games (both console and PC - I'm also a particularly huge Pokémon nut).
        </p>
        <br></br>
        <p>
          Right now, I'm currently looking for an opportunity to work on meaningful projects with a motivated, creative team.
        </p>
      </div>

      <div>
        <img src={process.env.PUBLIC_URL+"hello.png"} />
        <p style={{fontSize: '10px'}} align='center'>A self-portrait.</p>
      </div>
    </div>
  )
}

export default About
