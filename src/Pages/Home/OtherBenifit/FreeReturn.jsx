import lottie from 'lottie-web';
import animationData from '../../../../public/free returns.json';
import { useEffect } from 'react';

const FreeReturn = () => {

    useEffect(() => {
        const anim = lottie.loadAnimation({
          container: document.getElementById('FreeReturns'),
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
        <div id="FreeReturns" style={{ width: '100%', height: '100%' }}></div>
      );
    };

export default FreeReturn;