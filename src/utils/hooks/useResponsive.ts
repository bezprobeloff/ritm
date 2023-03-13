import { useEffect, useState } from 'react';
import { DESKTOP_WIDTH, PAD_WIDTH, MOBILE_WIDTH } from '../constants';

//хук состояния экрана

const useResponsive = () => {
  const [windowSize, setWindowsSize] = useState(window.screen.width);
  const [type, setType] = useState({ isMobile: false, isPad: false, isDesktop: false });

  const handleWindowSize = () => {
    setWindowsSize(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSize);

    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);

  useEffect(() => {
    if (windowSize >= DESKTOP_WIDTH) {
      setType({ ...type, isDesktop: true, isPad: false, isMobile: false });
    } else if (windowSize < DESKTOP_WIDTH && windowSize >= PAD_WIDTH) {
      setType({ ...type, isDesktop: false, isPad: true, isMobile: false });
    } else {
      setType({ ...type, isDesktop: false, isPad: false, isMobile: true });
    }
  }, [windowSize]);

  return { type };
};

export default useResponsive;
