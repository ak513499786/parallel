import WhatsAppMessenger from "./WhatsMessenger";
const accountSid = 'ACe32936cff16cca4024244eddef18c65f';
const authToken = 'a36b77835804f5f9f81a459be65f091e';
const fromNumber = '+14155238886'; // Twilio WhatsApp sandbox number

const messenger = new WhatsAppMessenger(accountSid, authToken, fromNumber);

// Default function to handle the API request
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { phoneNumber } = req.body;
    try {
      const result = await messenger.send(phoneNumber);
      console.log("Message sent successfully:", result);
      res.status(200).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Error sending message:", error);
      res.status(500).json({ success: false, error: "Failed to send message" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}
