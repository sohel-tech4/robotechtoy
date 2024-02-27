import lottie from 'lottie-web';
import animationData from '../../../../public/Animation - 1705733812534.json';
import { useEffect } from 'react';

const FaqAnimation = () => {
    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: document.getElementById('your-lottie-container-id'),
        renderer: 'svg', 
        loop: true,
        autoplay: true,
        animationData: animationData, 
      });
  
      return () => {
        anim.destroy();
      };
    }, []);
  
    return (
      <div id="your-lottie-container-id" style={{ width: '100%', height: '100%' }}></div>
    );
  };
  
  export default FaqAnimation;
  