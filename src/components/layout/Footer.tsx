import Link from "next/link";
import Image from "next/image";
import { Sedgwick_Ave } from "next/font/google";
import { Michroma } from "next/font/google";
const michroma = Michroma({ subsets: ["latin"], weight: "400", variable: "--font-michroma" });

const sedgwick = Sedgwick_Ave({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  return (
  <footer   className={michroma.variable} style={{
  width: "100%",
background: "radial-gradient(ellipse 80% 80% at 50% 50%, #B08CFF 0%, #B08CFF 26%, #7701CC 100%)",  padding: "60px 120px",
  position: "relative",
  zIndex: 10,
}}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Top row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <h2 style={{
            fontFamily: sedgwick.style.fontFamily,
            color: "white",
            fontWeight: 400,
            fontSize: "clamp(28px, 4vw, 56px)",
            margin: 0,
            letterSpacing: "0.02em",
          }}>
            THINK, TRY & LEARN
          </h2>
        <Link href="/register" style={{
  background: "white",
  color: "#7701CC",
  fontWeight: 700,
  padding: "12px 28px",
  borderRadius: 999,
  textDecoration: "none",
  fontSize: 13,
  letterSpacing: "0.08em",
  fontFamily: "var(--font-michroma)",
  display: "inline-block",
}}>
  S'INSCRIRE MAINTENANT
</Link>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.3)", margin: "32px 0" }} />

        {/* Bottom row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { label: "Facebook", icon: "/fb.png", href: "https://www.facebook.com/share/1D3dXCJ22T/?mibextid=wwXIfr" },
              { label: "Instagram", icon: "/insta.png", href: "https://www.instagram.com/math.tecc?igsh=N2d1OTg2c2JibnE4" },
              { label: "LinkedIn", icon: "/linkedin.png", href: "https://www.linkedin.com/company/mathtec/" },
            ].map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}>
                <Image src={s.icon} alt={s.label} width={52} height={52} style={{ objectFit: "contain" }} />
              </a>
            ))}
          </div>

          {/* Logo */}
          <Link href="/">
            <Image src="/logo2.png" alt="MathTec" width={200} height={60} style={{ objectFit: "contain" }} />
          </Link>

        </div>
      </div>
    </footer>
  );
}