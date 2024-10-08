import { Carousel } from "react-bootstrap"
import './Carousel.css'

const CostumCarousel = ({ images, postId }) => {

  return (
    <Carousel className="Carousel">
      {
        images.map((eachImage, idx) => {
          return (
            <Carousel.Item key={`carousel-item-${postId}-${idx}`}>
              <div className="ratio ratio-16x9">
                <img className="cardImage" src={eachImage} alt="slide" />
              </div>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  )
}

export default CostumCarousel