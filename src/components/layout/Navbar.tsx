"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Michroma } from "next/font/google";

const michroma = Michroma({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-michroma"
});

const linkStyle = {
  fontFamily: "var(--font-michroma)",
  color: "white",
  fontSize: 13,
  textDecoration: "none",
  letterSpacing: "0.05em",
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${michroma.variable} fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16`}
      style={{ backdropFilter: "blur(10px)", padding: "0 80px" }}
    >
      {/* Logo */}
      <Image src="/logo2.png" alt="MathTec" width={100} height={60} style={{ objectFit: "contain" }} />

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" style={linkStyle} className="hover:text-purple-300 transition">
          ACCUEIL
        </Link>
        <Link href="/#apropos" style={linkStyle} className="hover:text-purple-300 transition">
          À PROPOS
        </Link>
        <Link href="/#contact" style={linkStyle} className="hover:text-purple-300 transition">
          CONTACT
        </Link>
        <Link
          href="/register"
          style={{
            ...linkStyle,
            background: "linear-gradient(90deg, #9810FA, #661FFF)",
            padding: "8px 20px",
            borderRadius: 999,
            fontWeight: 700,
            boxShadow: "0 4px 15px rgba(124,58,237,0.4)",
            display: "inline-block",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          S'INSCRIRE MAINTENANT
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isOpen ? "opacity-0" : ""}`} />
        <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#1a0a2e] flex flex-col items-center gap-6 py-8 md:hidden">
          <Link href="/" style={linkStyle} onClick={() => setIsOpen(false)}>ACCUEIL</Link>
          <Link href="/#apropos" style={linkStyle} onClick={() => setIsOpen(false)}>À PROPOS</Link>
          <Link href="/#contact" style={linkStyle} onClick={() => setIsOpen(false)}>CONTACT</Link>
          <Link
            href="/register"
            style={{
              ...linkStyle,
              background: "linear-gradient(90deg, #9810FA, #661FFF)",
              padding: "8px 20px",
              borderRadius: 999,
              fontWeight: 700,
              display: "inline-block",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            onClick={() => setIsOpen(false)}
          >
            S'INSCRIRE MAINTENANT
          </Link>
        </div>
      )}
    </nav>
  );
}