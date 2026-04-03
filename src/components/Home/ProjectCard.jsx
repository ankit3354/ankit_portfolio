import React from "react";
import { IoIosEye } from "react-icons/io";

function ProjectCard({
  alternate,
  projectName,
  projectNo,
  alt,
  projectDetails,
  imgLink,
  projectLink,
  stack = [],
  category,
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-teal-800/80 bg-gradient-to-br from-teal-950/90 to-black/80 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/70 hover:shadow-xl hover:shadow-cyan-950/40">
      <div
        className={`grid items-center gap-6 p-5 sm:p-7 lg:grid-cols-12 lg:gap-10 ${
          alternate ? "" : ""
        }`}
      >
        <div
          className={`relative lg:col-span-5 ${
            alternate ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="absolute -inset-2 rounded-2xl bg-cyan-500/10 blur-xl transition-all duration-300 group-hover:bg-cyan-400/20"></div>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-56 items-center justify-center overflow-hidden rounded-2xl border border-teal-600/70 bg-teal-900/30 p-4 sm:h-64"
          >
            <img
              src={imgLink}
              alt={alt}
              className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>

        <div
          className={`space-y-4 lg:col-span-7 ${
            alternate ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-cyan-600/80 bg-cyan-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
              {projectNo}
            </span>
            {category ? (
              <span className="rounded-full border border-teal-700/80 bg-teal-900/40 px-3 py-1 text-xs font-medium text-teal-100">
                {category}
              </span>
            ) : null}
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {projectName}
          </h3>

          <p className="text-sm leading-7 text-cyan-100/80 sm:text-base">
            {projectDetails}
          </p>

          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-md border border-teal-700/80 bg-teal-900/35 px-2.5 py-1 text-xs font-medium text-cyan-100"
              >
                {item}
              </span>
            ))}
          </div>

          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-600/80 bg-cyan-900/30 px-4 py-2 text-sm font-semibold text-cyan-200 transition-all hover:border-cyan-400 hover:bg-cyan-800/40"
          >
            View Project
            <IoIosEye className="text-lg" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

