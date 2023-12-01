import Image from "next/image";

function Modal({ projects, modal }) {
  const { active, index } = modal;

  return (
    <div
      className="h-[350px] w-[400px] overflow-hidden absolute flex items-center justify-center"
      id="container"
    >
      <div
        style={{ top: index * -100 + "%" }}
        className="h-full w-full absolute"
        id="slider"
      >
        {projects.map((project, index) => (
          <div
            key={`modal_${index}`}
            style={{ backgroundColor: project.color }}
            className="relative h-full group flex items-center justify-center"
            id="modal"
          >
            <Image
              src={`/images/${project.src}`}
              alt="images"
              width={300}
              height={0}
              className="group:h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Modal;
