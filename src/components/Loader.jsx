import { useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress, active } = useProgress();

  if (!active || progress >= 100) return null;

  return (
    <div
      className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-transparent z-[100]"
      style={{
        pointerEvents: 'none',
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: '#F1F1F1',
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </div>
  );
};

export default CanvasLoader