import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
function Gallery({images}) {
    return (
        <Carousel
      axis="horizontal"
      showStatus={false}
      showIndicators={false}
      showThumbs ={false}
      className="relative"
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${
              hasPrev ? 'absolute' : 'hidden'
            } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <FaChevronLeft className="w-9 h-9 text-white" />
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${
              hasNext ? 'absolute' : 'hidden'
            } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <FaChevronRight className="w-9 h-9 text-white" />
          </div>
        );
      }}
    >
        {images.map((image)=>(
            <img src={image} alt="logements" />
        ))}
    </Carousel>

    )
}

export default Gallery