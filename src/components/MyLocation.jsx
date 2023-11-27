import clsx from "clsx";

function Location({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const MyLocation = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Location name="Kosovë" invert={invert}>
          Mitrovice,
          <br />
          40000
        </Location>
      </li>
    </ul>
  );
};

export default MyLocation;
