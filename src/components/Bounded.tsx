type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  as: Component = "section",
  className = "",
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Component className={`px-[5%] ${className}`} {...restProps}>
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </Component>
  )
};