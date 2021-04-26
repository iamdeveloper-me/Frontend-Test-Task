import React from "react";
import Slider from "react-slick";
import Buttons from "./Button";
import "../Styles/Components/Carousel.css";
import '../Styles/Components/Buttons.css'
import Mobile from "../Images/1.png";
const Carousel = () => {

  const settings = {
    className: "center",
    initialSlide: 1,
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },

      {
        breakpoint: 600,
        centerMode: false,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        centerMode: false,
        dots: true,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bgColor">

             <Slider {...settings}>
              <div className="sliderDiv">
                <div className="sliderImg">
                  <img src={Mobile} alt=""/>
                </div>

                <div className="sliderDetail">
                  <h3>Mobile apps</h3>
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>

                  <Buttons
                    variant="contained"
                    color="secondary"
                    className="btnSlider"
                  >
                    Read more
                  </Buttons>
                </div>
              </div>

              <div className="sliderDiv">
                <div className="sliderImg">
                  <img src={Mobile} alt=""/>
                </div>

                <div className="sliderDetail">
                  <h3>Cutting EDGE</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>

                  <Buttons
                    variant="contained"
                    color="secondary"
                    className="btnSlider"
                  >
                    Read more
                  </Buttons>
                </div>
              </div>

              <div className="sliderDiv">
                <div className="sliderImg">
                  <img src={Mobile} alt=""/>
                </div>

                <div className="sliderDetail">
                  <h3>Web development</h3>
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>

                  <Buttons
                    variant="contained"
                    color="secondary"
                    className="btnSlider"
                  >
                    Read more
                  </Buttons>
                </div>
              </div>

              <div className="sliderDiv">
                <div className="sliderImg">
                  <img src={Mobile} alt=""/>
                </div>

                <div className="sliderDetail">
                  <h3>Cutting EDGE</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>

                  <Buttons
                    variant="contained"
                    color="secondary"
                    className="btnSlider"
                  >
                    Read more
                  </Buttons>
                </div>
              </div>

              <div className="sliderDiv">
                <div className="sliderImg">
                  <img src={Mobile} alt="" />
                </div>

                <div className="sliderDetail">
                  <h3>Cutting EDGE</h3>
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>

                  <Buttons
                    variant="contained"
                    color="secondary"
                    className="btnSlider"
                  >
                    Read more
                  </Buttons>
                </div>
              </div>
            </Slider>
    </div>
  );
};
export default Carousel;
