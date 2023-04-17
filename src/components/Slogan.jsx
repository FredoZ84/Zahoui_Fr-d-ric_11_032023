import '../styles/Slogan.css'

function Slogan({ sloganText, sloganBackground }) {
  let sloganTextClass = '' 
  let sloganBackgroundClass =''

  if (sloganText === '') {
    sloganTextClass = 'none'
  } else {
    sloganTextClass = 'initial'
    sloganBackgroundClass = 'repositioned'
  }
  return (
    <section id="slogan">
      <h2 id="slogan_text" className={sloganTextClass}>
        {sloganText}
      </h2>
      <img src={sloganBackground} alt="paysage" id="slogan_background" className={sloganBackgroundClass}  />
    </section>
  )
}

export default Slogan