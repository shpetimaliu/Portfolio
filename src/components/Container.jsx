import clsx from "clsx";

function Container({ as: Container = "div", className, children }) {
  return (
    <Container className={clsx("max-w-7xl mx-auto px-6 lg:px-8", className)}>
      <div className="max-w-2xl mx-auto lg:max-w-none">{children}</div>
    </Container>
  );
}

export default Container;
