"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4">
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6">
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""}
              capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰ {/* This can be replaced with an icon */}
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-primary p-4 flex flex-col gap-4">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={() => setMobileMenuOpen(false)} // Close menu on link click
              className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""}
                capitalize font-medium hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
