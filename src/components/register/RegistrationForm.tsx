"use client";
import { useState } from "react";
import Image from "next/image";

type FormData = {
  nom: string;
  prenom: string;
  dateNaissance: string;
  niveauScolaire: string;
  email: string;
  telephone: string;
};

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    prenom: "",
    dateNaissance: "",
    niveauScolaire: "",
    email: "",
    telephone: "",
  });
  const [submitErrors, setSubmitErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [emailState, setEmailState] = useState<"idle" | "valid" | "invalid">("idle");
  const [phoneState, setPhoneState] = useState<"idle" | "valid" | "invalid">("idle");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear submit errors for this field
    if (submitErrors[name as keyof FormData]) {
      setSubmitErrors({ ...submitErrors, [name]: "" });
    }

    // Real-time validation only for email and telephone
    if (name === "email") {
      if (value.length === 0) setEmailState("idle");
      else if (value.includes("@") && value.includes(".")) setEmailState("valid");
      else setEmailState("invalid");
    }

    if (name === "telephone") {
      if (value.length === 0) setPhoneState("idle");
      else if (/^(05|06|07)\d{8}$/.test(value)) setPhoneState("valid");
      else setPhoneState("invalid");
    }
  };

  const getInputStyle = (name: keyof FormData) => {
    let shadow = "0 0 0 1.5px #9810FA";

    if (name === "email") {
      if (emailState === "valid") shadow = "0 0 0 2px #22c55e";
      else if (emailState === "invalid") shadow = "0 0 0 2px #f87171";
    } else if (name === "telephone") {
      if (phoneState === "valid") shadow = "0 0 0 2px #22c55e";
      else if (phoneState === "invalid") shadow = "0 0 0 2px #f87171";
    } else if (submitErrors[name]) {
      shadow = "0 0 0 2px #f87171";
    }

    return {
      width: "100%",
      background: "rgba(255,255,255,0.68)",
      border: "none",
      borderRadius: 20,
      padding: "14px 24px",
      color: "#9810FA",
      fontSize: 14,
      outline: "none",
      boxSizing: "border-box" as const,
      boxShadow: shadow,
      transition: "box-shadow 0.2s",
    };
  };

  const handleSubmit = async () => {
    setError("");
    const errors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.nom || formData.nom.length < 2) errors.nom = "Veuillez entrer votre nom.";
    if (!formData.prenom || formData.prenom.length < 2) errors.prenom = "Veuillez entrer votre prénom.";
    if (!formData.dateNaissance) errors.dateNaissance = "Veuillez entrer votre date de naissance.";
    if (!formData.niveauScolaire) errors.niveauScolaire = "Veuillez entrer votre niveau scolaire.";
    if (emailState !== "valid") errors.email = "Veuillez entrer un email valide.";
    if (phoneState !== "valid") errors.telephone = "Numéro invalide (ex: 0612345678).";

    if (Object.keys(errors).length > 0) {
      setSubmitErrors(errors);
      setError("Veuillez corriger les erreurs ci-dessus.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json();
        setError(data.error || "Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch {
      setError("Problème de connexion. Veuillez réessayer.");
    }
    setLoading(false);
  };

  const inputStyle = getInputStyle;

  return (
    <section style={{
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "100px 24px 60px",
      overflow: "hidden",
    }}>

      {/* Background blobs */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "30%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px", height: "700px",
          background: "radial-gradient(circle, rgba(147,51,234,0.5) 0%, transparent 65%)",
          borderRadius: "50%", filter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute", top: "10%", left: "5%",
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(236,72,153,0.35) 0%, transparent 65%)",
          borderRadius: "50%", filter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "5%",
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 65%)",
          borderRadius: "50%", filter: "blur(80px)",
        }} />
      </div>

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 60,
        maxWidth: 1100,
        width: "100%",
        flexWrap: "wrap",
      }}>

        {/* Left — Form */}
        <div style={{ flex: 1, minWidth: 300, maxWidth: 500 }}>
          {success ? (
            <div style={{
              textAlign: "center",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(152,16,250,0.3)",
              borderRadius: 24,
              padding: "48px 32px",
            }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
              <h2 style={{ color: "white", fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
                Inscription réussie!
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7 }}>
                Merci <strong style={{ color: "#9810FA" }}>{formData.prenom}</strong>!<br />
                Nous vous contacterons bientôt sur <strong style={{ color: "#9810FA" }}>{formData.email}</strong>.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

              {/* Nom + Prénom */}
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                  <input name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} style={inputStyle("nom")} />
                  {submitErrors.nom && <p style={{ color: "#f87171", fontSize: 12, margin: "0 0 0 12px" }}>⚠ {submitErrors.nom}</p>}
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                  <input name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} style={inputStyle("prenom")} />
                  {submitErrors.prenom && <p style={{ color: "#f87171", fontSize: 12, margin: "0 0 0 12px" }}>⚠ {submitErrors.prenom}</p>}
                </div>
              </div>

              {/* Date de naissance */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <input name="dateNaissance" type="date" value={formData.dateNaissance} onChange={handleChange} style={inputStyle("dateNaissance")} />
                {submitErrors.dateNaissance && <p style={{ color: "#f87171", fontSize: 12, margin: "0 0 0 12px" }}>⚠ {submitErrors.dateNaissance}</p>}
              </div>

              {/* Niveau scolaire */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <input name="niveauScolaire" placeholder="Niveau scolaire" value={formData.niveauScolaire} onChange={handleChange} style={inputStyle("niveauScolaire")} />
                {submitErrors.niveauScolaire && <p style={{ color: "#f87171", fontSize: 12, margin: "0 0 0 12px" }}>⚠ {submitErrors.niveauScolaire}</p>}
              </div>

              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} style={inputStyle("email")} />
                {emailState === "valid" && <p style={{ color: "#22c55e", fontSize: 12, margin: "0 0 0 12px" }}>✓ Email valide</p>}
                {emailState === "invalid" && <p style={{ color: "#f87171", fontSize: 12, margin: "0 0 0 12px" }}>⚠ Entrez un email valide (ex: nom@gmail.com)</p>}
              </div>

              {/* Téléphone */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <input name="telephone" placeholder="Téléphone (ex: 0612345678)" value={formData.telephone} onChange={handleChange} style={inputStyle("telephone")} />
                {phoneState === "valid" && <p style={{ color: "#22c55e", fontSize: 12, margin: "0 0 0 12px" }}>✓ Numéro valide</p>}
                {phoneState === "invalid" && <p style={{ color: "#f87171", fontSize: 12, margin: "0 0 0 12px" }}>⚠ Veuillez entrer un numéro de téléphone valide.</p>}
              </div>

              {/* Global error */}
              {error && (
                <div style={{
                  background: "rgba(248,113,113,0.1)",
                  border: "1px solid rgba(248,113,113,0.3)",
                  borderRadius: 12,
                  padding: "10px 16px",
                }}>
                  <p style={{ color: "#f87171", fontSize: 13, margin: 0 }}>⚠️ {error}</p>
                </div>
              )}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  width: "100%",
                  background: loading ? "rgba(152,16,250,0.5)" : "linear-gradient(90deg, #9810FA, #661FFF)",
                  color: "white",
                  border: "none",
                  borderRadius: 999,
                  padding: "14px",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  cursor: loading ? "not-allowed" : "pointer",
                  marginTop: 4,
                  transition: "opacity 0.2s",
                }}
              >
                {loading ? "ENVOI EN COURS..." : "S'INSCRIRE MAINTENANT"}
              </button>

            </div>
          )}
        </div>

        {/* Right — Πthon title */}
        <div style={{ flex: 1, minWidth: 280, textAlign: "center",marginLeft: 80,display:"flex", alignContent: "center" }}>
         
        <Image 
                 src="/Group.png" 
                 alt="Pi-thon 2nd Edition" 
                 width={400} 
                 height={400} 
                 style={{ objectFit: "contain" }} 
               />
        </div>

      </div>
    </section>
  );
}