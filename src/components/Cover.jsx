import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

const Cover = ({ img, name, des }) => {
    const [heroHeight, setHeroHeight] = useState(window.innerWidth >= 768 ? 700 : 500);

    useEffect(() => {
        const handleResize = () => {
            const newSize = window.innerWidth >= 768 ? 700 : 500;
            setHeroHeight(newSize);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Parallax
            blur={{ min: -20, max: 20 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={250}
        >
            <div className="hero" style={{ height: `${heroHeight}px` }}>
                <div className="hero-overlay w-8/12 h-3/5 bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 uppercase text-4xl md:text-8xl font-bold cinzel text-white">{name}</h1>
                        <p className="mb-5 inter md:text-2xl font-semibold">{des}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

Cover.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    des: PropTypes.string
};

export default Cover;
