"use client";
import Link from "next/link";
import Image from "next/image";
import { Michroma } from "next/font/google";

const michroma = Michroma({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-michroma"
});

export default function Hero() {
  return (
    <section 
      className={michroma.variable}
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 24px",
        background: "radial-gradient(ellipse at center, rgba(88,65,178,0.62) 0%, rgba(20,15,20,0.9) 50%, #070707 100%)",
        color: "#fff",
      }}
    >
      {/* Blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "45%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px", height: "900px",
          background: "radial-gradient(circle, rgba(168,85,247,0.6) 0%, transparent 60%)",
          borderRadius: "50%", filter: "blur(90px)", opacity: 0.95,
        }} />
        <div style={{
          position: "absolute", top: "10%", left: "6%",
          width: "520px", height: "520px",
          background: "radial-gradient(circle, rgba(236,72,153,0.45) 0%, transparent 60%)",
          borderRadius: "50%", filter: "blur(80px)", opacity: 0.9,
        }} />
        <div style={{
          position: "absolute", bottom: "6%", right: "6%",
          width: "520px", height: "520px",
          background: "radial-gradient(circle, rgba(59,130,246,0.28) 0%, transparent 60%)",
          borderRadius: "50%", filter: "blur(80px)", opacity: 0.9,
        }} />
      </div>

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 3,
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: 20,
        maxWidth: "920px", paddingTop: 40
      }}>
        <Image 
          src="/Group.png" 
          alt="Pi-thon 2nd Edition" 
          width={400} 
          height={400} 
          style={{ objectFit: "contain" }} 
        />
        <p style={{
          fontFamily: "var(--font-michroma)",
          color: "rgba(255,255,255,0.72)",
          fontSize: 16,
          maxWidth: 640,
          lineHeight: 1.8,
          marginTop: 8
        }}>
          Rejoignez la deuxième édition du Pi-thon, une compétition immersive combinant
          mathématiques, programmation et entrepreneuriat.
        </p>
        <Link
          href="/register"
          style={{
            marginTop: 18,
            background: "linear-gradient(90deg,#8b5cf6,#7c3aed)",
            color: "white",
            fontFamily: "var(--font-michroma)",
            padding: "14px 36px",
            borderRadius: 999,
            fontSize: 14,
            fontWeight: 800,
            letterSpacing: "0.06em",
            textDecoration: "none",
            display: "inline-block",
            boxShadow: "0 12px 40px rgba(124,58,237,0.28)",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          S'INSCRIRE MAINTENANT
        </Link>
      </div>
    </section>
  );
}