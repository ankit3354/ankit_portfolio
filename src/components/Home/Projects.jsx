import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { TbArrowBadgeUp, TbArrowBadgeDown } from "react-icons/tb";

function Projects({ id = "projects" }) {
  const [showProject, setShowProject] = useState(false);
  const [startIndex] = useState(2);

  const projectDetails = [
    {
      projectName: "Chat App",
      projectNo: "Project 2",
      projectDetails:
        "A secure real-time messaging experience with user-based access and message control features.",
      alt: "Chat app preview",
      imgLink: "/ProjectImg/ChatApp.svg",
      projectLink: "https://chat-app-ujea.vercel.app",
      stack: ["React", "Appwrite", "Realtime"],
      category: "Communication",
    },
    {
      projectName: "Histagram",
      projectNo: "Project 3",
      projectDetails:
        "A social platform clone with authentication, CRUD, profile management, and post interactions like save, like, and delete.",
      alt: "Histagram preview",
      imgLink: "/ProjectImg/Histagram.svg",
      projectLink: "https://github.com/ankit3354/Histagram.git",
      stack: ["React", "Auth", "CRUD"],
      category: "Social Media",
    },
    {
      projectName: "Todo List",
      projectNo: "Project 1",
      projectDetails:
        "A task manager powered by Appwrite with smooth add, toggle, and delete workflows for daily productivity.",
      alt: "Todo List preview",
      imgLink: "/ProjectImg/TodoList.svg",
      projectLink: "https://todo-list-vert-omega-47.vercel.app/",
      stack: ["React", "Appwrite", "Tailwind"],
      category: "Productivity",
    },
  ];

  const visibleProjects = showProject
    ? projectDetails
    : projectDetails.slice(0, startIndex);

  return (
    <main
      id={id}
      className="container mx-auto flex w-full max-w-full flex-col bg-teal-950 px-4 py-16 shadow-xl ring-1 ring-gray-900/5 sm:px-8 lg:px-14"
    >
      <section className="rounded-2xl border border-teal-800/70 bg-black/40 p-6 sm:p-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="inline-flex rounded-full border border-cyan-700/70 bg-cyan-900/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Featured Work
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects That Reflect My Development Journey
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-cyan-100/80 sm:text-base">
            A curated set of practical products focused on real-world use cases,
            clean UI decisions, and scalable frontend architecture.
          </p>
        </div>

        <div className="mt-10 space-y-7">
          {visibleProjects.map((project, i) => (
            <ProjectCard
              key={project.projectName}
              alternate={i % 2 === 0}
              projectName={project.projectName}
              projectNo={project.projectNo}
              projectDetails={project.projectDetails}
              alt={project.alt}
              imgLink={project.imgLink}
              projectLink={project.projectLink}
              stack={project.stack}
              category={project.category}
            />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center">
          <button
            type="button"
            onClick={() => setShowProject((prev) => !prev)}
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-700/60 bg-teal-900/40 px-5 py-2 text-sm font-semibold text-cyan-200 transition-all hover:border-cyan-500 hover:bg-cyan-900/30"
          >
            {showProject ? (
              <>
                Show Less
                <TbArrowBadgeUp className="text-xl" />
              </>
            ) : (
              <>
                Show More
                <TbArrowBadgeDown className="text-xl" />
              </>
            )}
          </button>
        </div>
      </section>
    </main>
  );
}

export default Projects;
