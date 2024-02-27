import lottie from 'lottie-web';
import animationData from '../../../../public/giftCard.json';
import { useEffect } from 'react';

const Gift = () => {
    useEffect(() => {
        const anim = lottie.loadAnimation({
          container: document.getElementById('GiftCard'),
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
        <div id="GiftCard" style={{ width: '100%', height: '100%' }}></div>
      );
    };
export default Gift;