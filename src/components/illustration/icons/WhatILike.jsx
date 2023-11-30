import clsx from "clsx";

export const Bugs = () => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-full bg-[#eb5757]"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <circle cx="8" cy="8" r="7" fill="#eb5757" />
      </svg>
    </div>
  );
};

export const Improvement = () => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-full bg-[#4da7fc]"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <circle cx="8" cy="8" r="7" fill="#4da7fc" />
      </svg>
    </div>
  );
};

export const Features = () => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-full bg-[#bb87fc]"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <circle cx="8" cy="8" r="7" fill="#bb87fc" />
      </svg>
    </div>
  );
};
