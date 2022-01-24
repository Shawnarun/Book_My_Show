import React from 'react';
import Slider from 'react-slick';


//Components
import Poster from '../../components/Poster/Poster.component';

//Config
import settings from '../../Config/PosterCarousel.config';

const PosterSlider = (props) => {

    const sliderConfig = props.config ? props.config : settings;

    return (
        <>
        <div className="flex flex-col items-start my-2">
          <h3 className={`text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-900"}`}>{props.title}</h3>
          <p className={`text-xs font-medium ${props.isDark ? "text-white" : "text-gray-900"}`}>{props.subtitle}</p>
        </div>
        <Slider {...sliderConfig}>
           {props.images.map((image) =>(
               <Poster{...image} isDark={props.isDark} />
           ))}
        </Slider>
            
        </>
    );
};

export default PosterSlider;
