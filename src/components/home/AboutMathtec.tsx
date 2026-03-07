import Image from "next/image";
import { Aldrich, Michroma } from "next/font/google";

const aldrich = Aldrich({ subsets: ["latin"], weight: "400" });
const michroma = Michroma({ subsets: ["latin"], weight: "400" });

export default function AboutMathtec() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        background: "#0a0a0a",
        padding: "80px 160px",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-10%", right: "-5%",
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(236,72,153,0.35) 0%, transparent 60%)",
          borderRadius: "50%", filter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute", bottom: "-10%", right: "10%",
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 60%)",
          borderRadius: "50%", filter: "blur(80px)",
        }} />
      </div>

      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: 60, position: "relative", zIndex: 1 }}>
        <h2 style={{ fontFamily: aldrich.style.fontFamily, color: "white", fontSize: 36, fontWeight: 400 }}>
          À propos de{" "}
<span style={{
  background: "linear-gradient(90deg, #661FFF, #FF1994)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}}>
  MATHTEC
</span>        </h2>
      </div>

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 60,
        flexWrap: "wrap",
      }}>
        {/* Left — text */}
        <div style={{ maxWidth: 580 }}>
          <p style={{ fontFamily: michroma.style.fontFamily, color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.9, marginBottom: 20 }}>
            MathTec est une initiative dirigée par des jeunes, fondée par
            des étudiantes passionnées de mathématiques.<br />
            Notre mission est de rendre les mathématiques appliquées :
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["Accessibles", "Dynamiques", "Créatives", "Concrètes"].map((item) => (
              <li key={item} style={{
                fontFamily: michroma.style.fontFamily,
                color: "rgba(255,255,255,0.65)",
                fontSize: 14,
                lineHeight: 2,
                paddingLeft: 16,
                position: "relative",
              }}>
                <span style={{ position: "absolute", left: 0, color: "#e879f9" }}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — logo */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", minWidth: 200 }}>
          <Image src="/logo2.png" alt="MathTec" width={280} height={120} style={{ objectFit: "contain" }} />
        </div>
      </div>
    </section>
  );
}