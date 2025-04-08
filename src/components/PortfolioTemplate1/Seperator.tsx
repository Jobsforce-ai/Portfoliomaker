type SeparatorProps = React.HTMLAttributes<HTMLHRElement>;

export const Separator: React.FC<SeparatorProps> = ({
  className = "",
  ...props
}) => {
  return <hr className={`border-t my-4 ${className}`} {...props} />;
};
