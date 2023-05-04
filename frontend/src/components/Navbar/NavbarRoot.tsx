import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { ChevronDown } from "react-feather";
import clsx from "clsx";
import Link from "next/link";

const NavbarRoot = () => {
  const [isOpen, setIsOpen] = React.useState<number>(-1);

  const transition = { ease: [0.6, 0.05, -0.01, 0.9] };

  const MenuLink = ({ label, index }: any) => (
    <div
      className="flex items-center justify-center gap-1 font-medium"
      onClick={() => setIsOpen(index)}
    >
      <p className="text-white">{label}</p>
      <ChevronDown className="text-accent-400" />
    </div>
  );

  return (
    <motion.nav
      className={clsx(
        "fixed z-50 w-full",
        isOpen == -1 ? "bg-transparent" : "bg-primary-900",
        "duration-300"
      )}
      initial={{ height: "5.563rem" }}
      onMouseLeave={() => setIsOpen(-1)}
      animate={isOpen != -1 ? { height: "31rem" } : { height: "5.515rem" }}
      transition={{ duration: 0.3, ...transition }}
    >
      {/* Navbar Content */}
      <div className="flex w-full items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Calgary Bisons Logo"
            width={75}
            height={75}
          />
          <p className="text-2xl font-bold text-white">Calgary Bisons</p>
        </Link>

        {/* Navigation Menu */}
        <div className="flex gap-6">
          <div
            className="flex cursor-pointer items-center justify-center gap-1 font-medium"
            onClick={() => setIsOpen(1)}
          >
            <p className="text-white">About Us</p>
            <ChevronDown className="text-accent-400" />
          </div>
          <div
            className="flex cursor-pointer items-center justify-center gap-1 font-medium"
            onClick={() => setIsOpen(2)}
          >
            <p className="text-white">Our Baseball</p>
            <ChevronDown className="text-accent-400" />
          </div>
          <div className="flex cursor-pointer items-center justify-center gap-1 font-medium">
            <p className="text-white">News</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4 text-white">
          <p>Contact Us</p>
          <div className="w-fit rounded-sm bg-accent-400 px-6 py-4 text-white">
            Register
          </div>
        </div>
      </div>

      {/* Navbar Dropdown */}
    </motion.nav>

    // Navbar Container

    // Navbar Content
    // Logo
    // Navigation Menu
    // Action Buttons

    // Dropdown Container
    // Switch Mega Menu or Dropdown Menu
  );
};

export { NavbarRoot };
