import { Flex } from "antd";

import slideData from "../../contentData";
import { memo, useEffect, useState } from "react";

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length)
        }, 3000)

        return () => clearInterval(interval);
    })

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex -1 + slides.length) % slides.length)
    }

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length)
    }

    return (
        <>
            <div className="home-slider">
                <a className="prev push-btn" onClick={prevSlide}>&#10094;</a>
                <a className="next push-btn" onClick={nextSlide}>&#10095;</a>
                {slides.map((item, index) => (
                        <Flex key={item.id} className={`slider-item ${index === currentIndex ? 'active' : ''}`}>
                            <img src={item.picture[0]}></img>
                            <img src={item.picture[1]}></img>
                        </Flex>
                    ))}

            </div>
        </>
    )
}

export default memo(Slider);