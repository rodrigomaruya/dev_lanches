"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function resize() {
      const closeMenu = window.innerWidth;
      closeMenu > 768 ? setIsOpen(false) : "";
    }
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <nav className="hidden md:flex gap-4 text-sm md:text-base">
        <Link href={"/"}>Home</Link>
        <Link href={"/cardapio/prato-feito"}>Cardápio</Link>
        <Link href={"/contato"}>Contato</Link>
      </nav>
      <div className="flex md:hidden">
        <button onClick={handleOpen}>
          <FiMenu size={24} />
        </button>
      </div>
      <div
        className={`absolute top-0 w-full bg-[rgba(0,0,0,0.5)] ${
          !isOpen ? "left-[-100%]" : "left-0"
        } transition-all duration-500 z-50`}
      >
        <div className="w-2/3 min-h-screen bg-white px-4 py-4">
          <div className="flex">
            <h2 className="w-full text-center">Menu</h2>
            <button onClick={handleOpen}>
              <FiX />
            </button>
          </div>
          <div className="flex flex-col gap-4 py-4 text-sm">
            <Link href={"/"} onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link
              href={"/cardapio/prato-feito"}
              onClick={() => setIsOpen(false)}
            >
              Cardápio
            </Link>
            <Link href={"/contato"} onClick={() => setIsOpen(false)}>
              Contato
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
