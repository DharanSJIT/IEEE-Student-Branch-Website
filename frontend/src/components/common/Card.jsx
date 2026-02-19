export const Card = ({ children, className = '', hover = false }) => {
  return (
    <div className={`bg-white border border-blue-100 rounded-xl p-6 shadow-sm ${hover ? 'hover:shadow-md transition-shadow duration-300' : ''} ${className}`}>
      {children}
    </div>
  );
};
