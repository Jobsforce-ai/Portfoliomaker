type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`bg-white rounded-lg shadow ${className}`} {...props}>
      {children}
    </div>
  );
};
