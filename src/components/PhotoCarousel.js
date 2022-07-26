import { Carousel } from "react-bootstrap";
import monsterjam from "../assets/monsterjam.jpg";
import n24512 from "../assets/n24512.png";
import family from "../assets/family.jpg";
import styled from "styled-components";

const PhotoCarousel = () => {
  return (
    <StyledImg>
      <Carousel fade className="h-50 w-100 overflow-hidden rounded-pill">
        <Carousel.Item>
          <img className="w-100" src={monsterjam} alt="Selfie" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src={n24512} alt="Flying" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src={family} alt="Family" />
        </Carousel.Item>
      </Carousel>
    </StyledImg>
  );
};

export default PhotoCarousel;

const StyledImg = styled.image`
  img {
    position: relative;
    width: 500px;
    height: 350px;
    object-fit: cover;
  }
  @media only screen and (max-width: 425px) {
    img {
      width: 250px;
      height: 250px;
    }
  }
`;
