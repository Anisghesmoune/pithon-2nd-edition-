import { google } from "googleapis";

export async function appendToSheet(values: string[]) {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY
    ?.replace(/\\n/g, "\n")
    .replace(/"/g, "");

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Feuille 1!A1",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [values],
    },
  });
}