import clsx from "clsx";

export const ContainerWork = ({ children, className }) => {
  return (
    <div className={clsx("mx-auto max-w-[120rem] px-8", className)}>
      {children}
    </div>
  );
};
