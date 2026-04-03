import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { TiThMenu } from "react-icons/ti";
import clsx from "clsx";
import { CgClose } from "react-icons/cg";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    {
      label: "Home",
      href: "/",
      scrollToId: "home",
      isSection: true,
    },
    {
      label: "Blog",
      href: "/blog",
      isSection: false,
    },
    {
      label: "Projects",
      href: "/",
      scrollToId: "projects",
      isSection: true,
    },
    {
      label: "Skills",
      href: "/",
      scrollToId: "skills",
      isSection: true,
    },
    {
      label: "Miniprojects",
      href: "/miniprojects",
      isSection: false,
    },
  ];

  const scrollToSection = (scrollToId) => {
    if (!scrollToId) return;

    const element = document.getElementById(scrollToId);
    if (element) {
      const navbar = document.getElementById("navbarHeight");
      const offset = navbar ? navbar.offsetHeight : 0;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleSectionNav = (scrollToId) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(scrollToId), 120);
      return;
    }

    scrollToSection(scrollToId);
  };

  return (
    <>
      <nav
        id="navbarHeight"
        className="flex flex-wrap justify-between h-16 items-center bg-teal-950 px-6 md:px-10 lg:px-14 xl:px-24"
      >
        <div className="flex items-center">
          <Logo />
        </div>

        <section
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/10 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isOpen && "translate-x-0"
          )}
          onClick={() => setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex bg-teal-950/90 border-r border-teal-700/60 flex-col absolute top-0 left-0 h-screen p-8 gap-7 z-[50] w-64 items-start"
          >
            <CgClose
              className="text-3xl font-bold text-cyan-500 hover:text-cyan-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />

            {navLinks.map((data, i) => (
              <li key={i} className="list-none">
                {data.isSection ? (
                  <button
                    type="button"
                    onClick={() => handleSectionNav(data.scrollToId)}
                    className="text-cyan-500 flex w-fit text-left text-base duration-200 px-1 hover:text-cyan-200"
                  >
                    {data.label}
                  </button>
                ) : (
                  <NavLink
                    to={data.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `
                  ${
                    isActive
                      ? "text-cyan-200 underline underline-offset-4"
                      : "text-cyan-500"
                  } flex w-fit text-left text-base duration-200 px-1 hover:text-cyan-200`}
                  >
                    {data.label}
                  </NavLink>
                )}
              </li>
            ))}
          </div>
        </section>

        <section className="flex items-center gap-4">
          <div>
            <ul className="flex flex-col mt-4 py-2 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
              {navLinks.map((data, i) => (
                <li key={i}>
                  {data.isSection ? (
                    <button
                      type="button"
                      onClick={() => handleSectionNav(data.scrollToId)}
                      className="hidden lg:block duration-200 text-sm lg:p-0 text-cyan-500 hover:text-cyan-200"
                    >
                      {data.label}
                    </button>
                  ) : (
                    <NavLink
                      to={data.href}
                      className={({ isActive }) => `
                     ${
                       isActive
                         ? "text-cyan-200 underline underline-offset-8"
                         : "text-cyan-500"
                     } hidden lg:block duration-200 text-sm lg:p-0 hover:text-cyan-200`}
                    >
                      {data.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center lg:hidden">
            <TiThMenu
              onClick={() => setIsOpen(true)}
              className="text-2xl text-cyan-500 hover:text-cyan-300 cursor-pointer"
            />
          </div>
        </section>
      </nav>
    </>
  );
}

export default NavBar;
