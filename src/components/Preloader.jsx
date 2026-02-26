import { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';
import logo from '../assets/Logo.webp';

const Preloader = () => {
  const { progress } = useProgress();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Remove o carregador estático do index.html assim que o componente React montar
    const staticLoader = document.getElementById('initial-loader');
    if (staticLoader) {
      // Pequeno timeout para garantir que o React já renderizou sua versão antes de tirar a estática
      setTimeout(() => {
        staticLoader.remove();
      }, 100);
    }

    if (progress === 100) {
      // Pequeno atraso para suavizar a transição após carregar tudo
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (!loading) return null;

  return (
    <div className='fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary'>
      <img
        src={logo}
        alt='logo'
        className='w-32 h-32 object-contain animate-pulse'
      />
      <div className='mt-10 w-48 h-1 bg-gray-700 rounded-full overflow-hidden'>
        <div
          className='h-full bg-[#915eff] transition-all duration-300'
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className='text-white font-bold mt-4'>
        {progress.toFixed(0)}%
      </p>
    </div>
  );
};

export default Preloader;
