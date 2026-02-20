import { useEffect, useState } from 'react';
import logo from '../assets/Logo.webp';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-primary'>
      <img 
        src={logo} 
        alt='logo' 
        className='w-32 h-32 object-contain animate-pulse'
      />
    </div>
  );
};

export default Preloader;
