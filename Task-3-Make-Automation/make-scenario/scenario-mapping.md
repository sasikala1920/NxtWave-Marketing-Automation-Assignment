Make Scenario (3 modules):
1) Webhook (Custom webhook) -> receives JSON: { name, email }
   - Create new custom webhook and copy the webhook URL.

2) Google Sheets -> Add a row
   - Connect Google account
   - Select spreadsheet (Responses) and sheet (Sheet1)
   - Map columns: Timestamp -> now, Name -> webhook.name, Email -> webhook.email

3) Gmail (or SMTP) -> Send an email
   - To: webhook.email
   - Subject: "Thanks for signing up - NxtWave"
   - Body: "Hi {{name}}, thanks for signing up. We'll be in touch."
