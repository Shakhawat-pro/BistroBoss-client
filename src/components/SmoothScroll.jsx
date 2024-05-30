import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return null;
};

export default SmoothScroll;
