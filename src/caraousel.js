import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
            <img src="https://picsum.photos/1400/100" alt="Avatar"/> 
        </div>
        <div>
            <img src="https://picsum.photos/1400/101" alt="Avatar"/> 
        </div>
        <div>
            <img src="https://picsum.photos/1400/102" alt="Avatar"/> 
        </div>
        <div>
            <img src="https://picsum.photos/1400/99" alt="Avatar"/> 
        </div>
        <div>
            <img src="https://picsum.photos/1400/98" alt="Avatar"/> 
        </div>
        <div>
            <img src="https://picsum.photos/1400/100" alt="Avatar"/> 
        </div>
      </Slider>
    );
  }