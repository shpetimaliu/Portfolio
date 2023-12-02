"use client";
import Intro from "@/components/Intro";
import { useState } from "react";
import Modal from "./modal/Modal";
import Project from "./projects/Project";

function WorkPage() {
  const projects = [
    {
      titulli: "Netflix Clone",
      src: "facebook.png",
      color: "#8C8C8C",
      href: "https://github.com/shpetim",
    },
    {
      titulli: "Facebook Clone",
      src: "facebook.png",
      color: "#0000FF",
      href: "https://github.com/2",
    },
    {
      titulli: "Threads Clone",
      src: "facebook.png",
      color: "#48D7D7",
      href: "https://github.com/3",
    },
    {
      titulli: "Facebook Clone",
      src: "facebook.png",
      color: "#81F775",
      href: "https://github.com/4",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <Intro
        eyebrow="Works"
        title="In this section, you will find a curated showcase of my portfolio, featuring both real-world projects and conceptual works"
      ></Intro>
      <div className="flex items-center justify-center h-[100vh]">
        <div className="w-full flex items-center justify-center	flex-col">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                index={index}
                setModal={setModal}
                titulli={project.titulli}
                href={project.href}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />
      </div>
    </>
  );
}

export default WorkPage;
