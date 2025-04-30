type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "default";
};

export const Button: React.FC<ButtonProps> = ({
  size = "md",
  variant = "default",
  className = "",
  ...props
}) => {
  const base = "inline-flex items-center rounded transition-colors";
  const sizeClass =
    size === "sm"
      ? "px-3 py-1.5 text-sm"
      : size === "lg"
      ? "px-5 py-3 text-lg"
      : "px-4 py-2 text-base";
  const variantClass =
    variant === "outline"
      ? "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100"
      : "bg-blue-500 text-white hover:bg-blue-600";
  return (
    <button
      className={`${base} ${sizeClass} ${variantClass} ${className}`}
      {...props}
    />
  );
};
