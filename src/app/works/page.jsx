"use client";
import { FadeIn } from "@/components/FadeIn";
import Intro from "@/components/Intro";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./modal/Modal";
import Project from "./projects/Project";

function WorkPage() {
  const projectsConceptual = [
    {
      titulli: "Netflix Clone",
      src: "netflix.png",
      color: "#F501A3",
      href: "/works/netflix",
      position: "Development",
    },
    {
      titulli: "Facebook Clone",
      src: "facebook1.png",
      color: "#1876F2",
      href: "/works/facebook",
      position: "Development",
    },
    {
      titulli: "Threads Clone",
      src: "threads.png",
      color: "#101010",
      href: "/works/threads",
      position: "Development",
    },
    {
      titulli: "Crud App - Employee",
      src: "crudApp.png",
      color: "#673AB6",
      href: "/works/crudapp",
      position: "Design & Development",
    },
    {
      titulli: "NotesApp",
      src: "noPreview.png",
      color: "#81F775",
      href: "https://github.com/shpetimaliu/notesapp",
      position: "Development",
    },
    {
      titulli: "ShputZz Socials - (experiment social media)",
      src: "noPreview.png",
      color: "#81F775",
      href: "https://github.com/shpetimaliu/socialmedia",
      position: "Design & Development",
    },
    {
      titulli: "Workout-Tracker",
      src: "workout.png",
      color: "#B2C29C",
      href: "/works/workout",
      position: "Development",
    },
    {
      titulli: "Maze Game",
      src: "mazegame.png",
      color: "#F6D358",
      href: "/works/mazegame",
      position: "Design & Development",
    },
  ];

  const realWordProjects = [
    {
      titulli: "TheUnnix Dev",
      src: "theunnix.png",
      color: "#DDE0FE",
      href: "/works/theunnix",
      position: "Development",
    },
    {
      titulli: "London Lash Pro",
      src: "londonlash.png",
      color: "#8C8C8C",
      href: "/works/londonlashpro",
      position: "Design & Development",
    },
    {
      titulli: "Rinesa Academy",
      src: "academy.png",
      color: "#F2CDDF",
      href: "https://rinesalashes.academy/",
      position: "Design & Development",
    },
    {
      titulli: "Arbanika GMBH",
      src: "arbanika.png",
      color: "#8C8C8C",
      href: "/works/arbanika",
      position: "Design & Development",
    },
    {
      titulli: "NewWay Agency",
      src: "newway.png",
      color: "#5EF9F6",
      href: "https://newway-agency.eu",
      position: "Development",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });
  const [modal2, setModal2] = useState({ active: false, index: 0 });
  const [hovered, setHovered] = useState();

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <>
      <Intro
        eyebrow="Works"
        title="In this section, you will find a curated showcase of my portfolio, featuring both real-world projects and conceptual works"
      ></Intro>
      <FadeIn>
        <div className="flex flex-col items-center justify-center h-[150vh]">
          <header className="mb-4">
            <h1 className="text-4xl font-bold">Real Works</h1>
          </header>
          <div className="w-full flex items-center justify-center flex-col">
            {realWordProjects.map((project, index) => (
              <Project
                key={index}
                index={index}
                setModal={setModal}
                titulli={project.titulli}
                href={project.href}
                position={project.position}
              />
            ))}
          </div>
          <Modal modal={modal} projects={realWordProjects} />
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex flex-col items-center justify-center h-[150vh]">
          <header className="mb-4">
            <h1 className="text-4xl font-bold">Conceptual Works</h1>
          </header>
          <div className="w-full flex items-center justify-center flex-col">
            {projectsConceptual.map((projectConceptual, index2) => (
              <Project
                key={index2}
                index={index2}
                setModal={setModal2}
                titulli={projectConceptual.titulli}
                href={projectConceptual.href}
                position={projectConceptual.position}
              />
            ))}
          </div>
          <Modal modal={modal2} projects={projectsConceptual} />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "tween" }}
            className="md:pr-6"
          >
            <a
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              href="https://github.com/shpetimaliu"
              className="py-1 inline-block text-xl text-black font-semibold"
            >
              See all projects in github
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={` mb-[2px] text-black transition inline-block ml-3 ease-in duration-300  ${
                  hovered ? "translate-x-0 " : "-translate-x-1"
                }`}
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                ></path>
                <path
                  className={` text-black transition ease-in duration-150 ${
                    hovered ? " opacity-100" : "opacity-0 "
                  }`}
                  stroke="currentColor"
                  d="M1.75 8H11"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
              <div
                className={` ${
                  hovered ? "w-11/12 scale-100" : "w-0 scale-0"
                } origin-left  transition ease-in duration-300 h-[2.5px] bg-black rounded-full`}
              ></div>
            </a>
          </motion.div>
        </div>
      </FadeIn>
    </>
  );
}

export default WorkPage;
