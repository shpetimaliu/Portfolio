import Link from "next/link";

function Project({ index, titulli, setModal, href }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <a
        className="group flex w-full cursor-pointer items-center hover:opacity-[0.4] justify-between pt-[50px] pr-[100px] pb-[50px] pl-[100px] border-t border-gray-300 transform transition-all duration-200 ease-linear"
        onMouseEnter={() => {
          setModal({ active: true, index: index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index: index });
        }}
      >
        <h2 className="text-3xl transform translate-x-0 transition-all duration-200 ease-linear group-hover:translate-x-[-10px]">
          {titulli}
        </h2>
        <p className="font-light transform translate-x-0 transition-all duration-200 ease-linear group-hover:translate-x-[10px]">
          Test
        </p>
      </a>
    </Link>
  );
}

export default Project;
