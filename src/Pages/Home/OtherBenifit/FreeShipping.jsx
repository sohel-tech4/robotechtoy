import lottie from 'lottie-web';
import animationData from '../../../../public/free shipping.json';
import { useEffect } from 'react';

const FreeShipping = () => {
    useEffect(() => {
        const anim = lottie.loadAnimation({
          container: document.getElementById('FreeShipping'),
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
        <div id="FreeShipping" style={{ width: '100%', height: '100%' }}></div>
      );
    };

export default FreeShipping;