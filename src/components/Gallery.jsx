import '../styles/Gallery.css'

function Gallery({ images }) {
  let arrowsClass = ''

  if (images.length === 1) {
    arrowsClass = 'none'
  }

  let compteur = 0

  function switchNext(e) {
    let target = e.target.parentElement.previousElementSibling
    let slidesWidth = target.clientWidth

    compteur++

    if (compteur === images.length) {
      compteur = 0
    }

    let decal = -slidesWidth * compteur
    target.style.transform = 'translateX(' + decal + 'px)'
  }

  function switchPrev(e) {
    let target = e.target.parentElement.previousElementSibling
    let slidesWidth = target.clientWidth

    compteur--

    if (compteur < 0) {
      compteur = images.length - 1
    }

    let decal = -slidesWidth * compteur
    target.style.transform = 'translateX(' + decal + 'px)'
  }

  return (
    <div className="slider">
      <ul className="slides">
        {images.map((image, index) => (
          <li key={index}>
            <img src={image} alt="logements" className="slide" />
            <p className="my_status">
              {index + 1}/{images.length}
            </p>
          </li>
        ))}
      </ul>
      <div className={`arrows ${arrowsClass}`}>
        <i
          className="arrow fa-solid fa-chevron-left"
          onClick={(e) => switchPrev(e)}
        ></i>
        <i
          className=" arrow fa-solid fa-chevron-right"
          onClick={(e) => switchNext(e)}
        ></i>
      </div>
    </div>
  )
}

export default Gallery
