"use client";
import { useState, useEffect, useRef } from "react";

const challenges = [
  {
    number: "1",
    title: "Quête Mathématique",
    desc: "Une chasse au trésor basée sur des problèmes contextualisés nécessitant logique, rapidité et coordination.",},
  {
    number: "2",
    title: "Sprint de Programmation",
    desc: "Des défis de code chronométrés pour tester la pensée computationnelle et la précision.",},
  {
    number: "3",
    title: "Projet Mathématiques & Entrepreneuriat",
    desc: "Création d'un mini-projet d'entreprise intégrant : Budget, Calculs financiers, Graphiques, Pitch final devant jury.",
  },
];

function ChallengeCard({ number, title, desc }: { number: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#150a2e" : "#0c0c0c",
        border: hovered ? "1px solid rgba(152,16,250,0.6)" : "1px solid rgba(255,255,255,0.08)",
        borderRadius: 24,
        padding: "18px 28px",
        flex: 1,
        minWidth: 280,
        transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
        transition: "all 0.3s ease",
        boxShadow: hovered ? "0 20px 60px rgba(152,16,250,0.2)" : "none",
      }}
    >
      <span style={{ color: "#9810FA", fontSize: 28, fontWeight: 700, display: "block", marginBottom: 16 }}>
        {number}
      </span>
      <h3 style={{ color: "white", fontSize: 22, fontWeight: 700, margin: "0 0 16px", lineHeight: 1.3 }}>
        {title}
      </h3>
      <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
        {desc}
      </p>
    </div>
  );
}

export default function AboutPithon() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let scrollAmount = 0;
    const interval = setInterval(() => {
      scrollAmount += 0.5;
      el.scrollLeft = scrollAmount;
      if (scrollAmount >= el.scrollWidth - el.clientWidth) {
        scrollAmount = 0;
      }
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="apropos" style={{ background: "#0c0c0c", padding: "80px 80px" }}>

      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h2 style={{ color: "white", fontSize: 36, fontWeight: 700 }}>
          À propos de{" "}
          <span style={{ color: "#9810FA" }}>Pi-thon</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", marginTop: 10, fontSize: 14, lineHeight: 1.8 }}>
          Après le succès de la première édition qui a rassemblé 24 élèves,<br />
          Pi-thon revient avec une version encore plus ambitieuse.
        </p>
      </div>

      {/* 7 Photos Auto Panorama */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 80,
          overflowX: "hidden",
          scrollbarWidth: "none",
          cursor: "default",
        }}
      >
        {/* Duplicate photos for infinite loop effect */}
       {[...Array(2)].flatMap((_, arrayIndex) =>
  ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg", "/photo4.jpg", "/photo5.jpg", "/photo6.jpg", "/photo7.jpg"].map((src, i) => (
    <div key={`${arrayIndex}-${i}`} style={{
      borderRadius: 12,
      overflow: "hidden",
      minWidth: "380px",
      height: "300px",
      flexShrink: 0,
      background: "#1a0a2e",
    }}>
      <img src={src} alt={`Photo ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  ))
)}
      </div>

      {/* Les 3 grands défis */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h2 style={{ color: "white", fontSize: 32, fontWeight: 700 }}>
          Les 3 grands défis
        </h2>
        <p style={{ color: "rgba(255,255,255,0.45)", marginTop: 8, fontSize: 13 }}>
          Les participants sont introduits aux trois principaux défis
        </p>
      </div>

      {/* Challenge Cards */}
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "stretch" }}>
        {challenges.map((c) => (
          <ChallengeCard key={c.number} {...c} />
        ))}
      </div>

    </section>
  );
}