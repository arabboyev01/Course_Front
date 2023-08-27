import React, { useRef, useState } from 'react';
import lottie from 'lottie-web';

const AnimationComponent = ({animationData}: any) => {

    const containerRef: any = useRef(null);
    const animationRef: any = useRef(null);
    const [isClose, setIsClose] = useState(false);

    const handleAnimation = () => {
        const container = containerRef.current;

        animationRef.current = lottie.loadAnimation({
            container: container,
            animationData: animationData,
            loop: false,
            autoplay: false,
        });

        const toggleIcon = () => {
            if (isClose) {
                animationRef.current.goToAndPlay(0, true);
            } else {
                animationRef.current.goToAndPlay(30, true);
            }

            setIsClose(!isClose);
        };

        container.addEventListener('click', toggleIcon);

        return () => {
            animationRef.current.destroy();
            container.removeEventListener('click', toggleIcon);
        };
    }

    return <div ref={containerRef} onClick={handleAnimation}></div>;
};

export default AnimationComponent;