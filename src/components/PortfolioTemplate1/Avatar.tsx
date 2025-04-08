type AvatarProps = React.HTMLAttributes<HTMLDivElement>;

export const Avatar: React.FC<AvatarProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`rounded-full overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  );
};
