import { google } from "googleapis";
import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }

  try {
    const { Name, Company_Name, Work_Email, Designation } = req.body;

    // Load Google Sheets credentials
    const credentialsPath = path.join(process.cwd(), "credentials.json");
    const credentials = JSON.parse(await fs.readFile(credentialsPath));

    // Authorize the client
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1tNHfoFPjm3rRX64iREAtBobIqFQat3SIl9YyIWphz2k";
    const range = "Sheet1!A1:F1";

    // Append the data to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      resource: {
        values: [[Name, Company_Name, Work_Email, Designation]],
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
