const HeaderLink = ({ link, text, num }) => {
  return (
    <div class='headerLink'>
      <a href={link}>
      <p style={{display: 'inline-block', color: '#ef5ae7', fontSize: '15px'}}>{num}.&ensp;</p>
      {text}</a>
    </div>
  )
}

export default HeaderLink
