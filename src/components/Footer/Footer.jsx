import { NavLink, Link } from "react-router-dom";
import { ImMail4 } from "react-icons/im";
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa6";
import { SiReplit, SiLeetcode, SiCodesignal } from "react-icons/si";

function Footer() {
  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/",
    },
    {
      label: "Miniprojects",
      href: "/miniprojects",
    },
    {
      label: "Skills",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ];

  const socialMediaList = [
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=ankitvishwakarma3554@gmail.com",
      label: "Gmail",
      icon: <ImMail4 className="text-2xl" />,
    },
    {
      href: "https://github.com/ankit3354",
      label: "GitHub",
      icon: <RxGithubLogo className="text-2xl" />,
    },
    {
      href: "https://www.linkedin.com/in/ankit3354",
      label: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
    },
    {
      href: "https://replit.com/@AnkitVishwaka21",
      label: "Replit",
      icon: <SiReplit className="text-2xl" />,
    },
    {
      href: "https://leetcode.com/u/Ankitskrm3354",
      label: "LeetCode",
      icon: <SiLeetcode className="text-2xl" />,
    },
  ];

  return (
    <footer className="relative mt-14 w-full bg-teal-950 text-white">
      <div className="mx-auto w-full max-w-full border-t border-teal-800/80 bg-black/45 px-6 py-20 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid min-h-[24rem] max-w-6xl content-between gap-10 lg:grid-cols-3">
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <SiCodesignal className="text-3xl text-cyan-400" />
              <span className="text-2xl font-bold tracking-wide text-cyan-300">
                Ankit Vishwakarma
              </span>
            </Link>
            <p className="max-w-md text-sm leading-7 text-cyan-100/80">
              Building practical, performant, and modern web experiences with
              clean UI and strong engineering fundamentals.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-300">Quick Links</h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-3">
              {navLinks.map((data) => (
                <li key={data.label}>
                  <NavLink
                    to={data.href}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-cyan-200 underline underline-offset-4"
                          : "text-cyan-500"
                      } text-sm font-medium transition-colors hover:text-cyan-300`
                    }
                  >
                    {data.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-300">Connect</h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {socialMediaList.map((data) => (
                <li key={data.label}>
                  <a
                    href={data.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={data.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-800/70 bg-teal-900/35 text-cyan-400 transition-all hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-200"
                  >
                    {data.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-6xl border-t border-teal-800/70 pt-5 text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-cyan-100/60">
            Copyright 2024 Ankit Vishwakarma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
