import { google } from "googleapis";
import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }

  try {
    const { Name, Email, Phone, courseSelected } = req.body;

    // Load Google Sheets credentials
    const credentialsPath = path.join(process.cwd(), "credentials.json");
    const credentials = JSON.parse(await fs.readFile(credentialsPath));

    // Authorize the client
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1De6M-0W0iUCCevn2wUQcliTgKHxTc8Qq7p6vgMz_OoI";
    const range = "Sheet1!A1:F1";

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      resource: {
        values: [[Name, Email, Phone, courseSelected]],
      },
    });

    res
      .status(200)
      .json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).json({ success: false, message: "Failed to submit form" });
  }
}
