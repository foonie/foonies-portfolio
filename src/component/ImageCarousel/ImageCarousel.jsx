import image1 from '../../assets/images/siemensworld_home.jpg'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/sw_teaser.png'
import { useState } from 'react';

const images = [
    {
        src: image1,
        alt:"siemens world",
    },
    {
        src: image2,
        alt:"Content page",
    },
    {
        src: image3,
        alt:"Homepage teasers",
    },
];

function ImageCarousel(){

    const [currentIndex, setCurrentIndex] = useState[0];
    const currentImage = images[currentIndex];
 

    return(
            <div className="ImageCarousel">
                <button>prev</button>
                <img src={images.src} alt={currentImage.alt} />
                <button>next</button>
                </div>
    )
}

export default ImageCarousel;