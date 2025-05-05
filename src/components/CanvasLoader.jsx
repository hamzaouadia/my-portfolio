import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <span className="canvas-loader" />
        <p style={{
          fontSize: 14,
          color: '#F1F1F1',
          fontWeight: 'bold',
          marginTop: 20, // small margin tweak
        }}>
          {progress < 100 ? `${progress.toFixed(0)}%` : 'Ready'}
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
