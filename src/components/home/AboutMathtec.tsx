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
padding: "clamp(40px, 8vw, 80px) clamp(20px, 8vw, 160px)",
overflow: "hidden",
      }}
>
{/* Responsive style */}
<style>{`
  @media (min-width: 768px) {
    .mathtec-content {
      flex-direction: row !important;
      justify-content: space-between !important;
      align-items: center !important;
    }
    .mathtec-text {
      text-align: left !important;
    }
    .mathtec-text ul {
      margin: 0 !important;
    }
  }
`}</style>
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
<h2 style={{
fontFamily: aldrich.style.fontFamily,
color: "white",
fontSize: "clamp(24px, 5vw, 36px)",
fontWeight: 400,
        }}>
          À propos de{" "}
<span style={{
background: "linear-gradient(90deg, #661FFF, #FF1994)",
WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
backgroundClip: "text",
          }}>
            MATHTEC
</span>
</h2>
</div>
{/* Content */}
<div
className="mathtec-content"
style={{
position: "relative", zIndex: 1,
display: "flex",
flexDirection: "column",
alignItems: "center",
gap: 40,
      }}>
{/* Text */}
<div className="mathtec-text" style={{ width: "100%", maxWidth: 580, textAlign: "center" }}>
<p style={{
fontFamily: michroma.style.fontFamily,
color: "rgba(255,255,255,0.7)",
fontSize: "clamp(12px, 2vw, 14px)",
lineHeight: 1.9,
marginBottom: 20,
          }}>
            MathTec est une initiative dirigée par des jeunes, fondée par
            des étudiantes passionnées de mathématiques.<br />
            Notre mission est de rendre les mathématiques appliquées :
</p>
<ul style={{ listStyle: "none", padding: 0, margin: "0 auto", display: "inline-block", textAlign: "left" }}>
{["Accessibles", "Dynamiques", "Créatives", "Concrètes"].map((item) => (
<li key={item} style={{
fontFamily: michroma.style.fontFamily,
color: "rgba(255,255,255,0.65)",
fontSize: "clamp(12px, 2vw, 14px)",
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
{/* Logo */}
<div style={{ display: "flex", justifyContent: "center", flexShrink: 0 }}>
<Image
src="/logo2.png"
alt="MathTec"
width={280}
height={120}
style={{ objectFit: "contain" }}
/>
</div>
</div>
</section>
  );
}