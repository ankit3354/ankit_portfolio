import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

function MiniProjects() {
  const miniProjectList = [
    {
      title: "Calculator",
      details:
        "A responsive calculator for quick arithmetic operations with a clean UI.",
      href: "/calculator",
    },
    {
      title: "React Cards",
      details:
        "Interactive cards layout focused on component reuse and elegant design.",
      href: "/reactcards",
    },
    {
      title: "API Page",
      details:
        "API-driven interface to fetch and present real-time data in a simple format.",
      href: "/apipage",
    },
    {
      title: "Currency Convertor",
      details:
        "Instant currency conversion tool designed for clear input and results.",
      href: "/currencyconverter",
    },
    {
      title: "PG (Password Generator)",
      details:
        "Secure password generator with customizable options for practical daily use.",
      href: "/passwordgenerator",
    },
  ];

  return (
    <main className="container flex min-h-screen max-w-full bg-teal-950 shadow-xl ring-1 ring-gray-900/5">
      <section className="w-full bg-black/50 px-6 py-14 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-center text-3xl font-bold tracking-wide text-cyan-300 sm:text-4xl">
            Mini Projects
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-cyan-100/90 sm:text-base">
            A focused showcase of practical projects built with React and modern
            frontend development practices.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {miniProjectList.map((project) => (
              <article
                key={project.title}
                className="rounded-xl border border-teal-800 bg-teal-950/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-900/40"
              >
                <h2 className="text-xl font-semibold text-cyan-300">
                  {project.title}
                </h2>
                <p className="mt-3 min-h-16 text-sm leading-6 text-cyan-100/80">
                  {project.details}
                </p>
                <Link
                  to={project.href}
                  className="mt-5 inline-flex items-center gap-1 rounded-md border border-cyan-700 px-3 py-2 text-sm font-semibold text-cyan-300 transition-all hover:bg-cyan-700/30 hover:text-cyan-200"
                >
                  Open Project
                  <IoIosArrowRoundForward className="text-xl" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default MiniProjects;
