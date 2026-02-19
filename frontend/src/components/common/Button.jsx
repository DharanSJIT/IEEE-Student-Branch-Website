export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-2.5 rounded-xl font-medium transition-all duration-300';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md',
    secondary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    outline: 'border-2 border-blue-200 text-blue-600 hover:border-blue-300 hover:bg-blue-50'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
