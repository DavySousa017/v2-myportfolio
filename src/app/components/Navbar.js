"use client";
import React from "react";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <nav className="w-full min-h-[50px] flex justify-center fixed top-0 left-0 bg-black/40 backdrop-blur-sm shadow-md shadow-black/30 duration-300">
      <div className="w-full max-w-[1440px]">
        <ul className="flex flex-wrap justify-center font-medium text-gray-300">
          <li className="w-fit">
            <NavButton linkName="Sobre" scrollTo="sobre" />
          </li>
          <li className="w-fit">
            <NavButton linkName="Projetos" scrollTo="projetos" />
          </li>
          <li className="w-fit">
            <NavButton linkName="Contato" scrollTo="contato" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
