type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
