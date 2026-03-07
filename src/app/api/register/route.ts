import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/sheets";
import { z } from "zod";

const schema = z.object({
  nom: z.string().min(2),
  prenom: z.string().min(2),
  dateNaissance: z.string().min(1),
  niveauScolaire: z.string().min(1),
  email: z.string().email(),
  telephone: z.string().min(8),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const { nom, prenom, dateNaissance, niveauScolaire, email, telephone } = parsed.data;
    await appendToSheet([nom, prenom, dateNaissance, niveauScolaire, email, telephone, new Date().toLocaleString()]);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}