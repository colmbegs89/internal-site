var React = require('react');
var Slider = require('react-slick').default;
var slider1 = require('../img/FMF2018_New_Slider_Dec.jpg')
// var slider2 = require('../img/Hallow.jpg')

class Carousel extends React.Component {
    render () {
    var settings = {
      dots: true,
      infinite: true,
      arrows: false, //TODO issues with previous arrow on carousel
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 5000
    };
    return (
      <Slider className='sliderTest' {...settings}>
        <div><img src={slider1} className='img-responsive' height="500"  alt='test'/></div>
        <div><img src={slider1} className='img-responsive' height="500"  alt='test'/></div>
      </Slider>
    );
  }
}
export default Carousel