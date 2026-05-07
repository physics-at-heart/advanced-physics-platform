const LoadingSkeleton = ({ width = '100%', height = '20px' }) => (
  <div className="bg-light rounded" style={{ width, height, animation: 'pulse 1.5s infinite' }}></div>
);
export default LoadingSkeleton;
