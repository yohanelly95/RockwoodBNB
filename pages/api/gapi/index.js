import { GoogleSpreadsheet } from "google-spreadsheet";
// Config variables
const SPREADSHEET_ID = process.env.GSPREADSHEET_ID || '1aa5FiiKe0xNtbTTHXo7sO1kWgK74zyHdvOlSZRjpzB0';
const SHEET_ID = process.env.GSHEET_ID || '0';
const CLIENT_EMAIL = process.env.GCLIENT_EMAIL || 'demo-403@proven-outpost-289813.iam.gserviceaccount.com';
const PRIVATE_KEY = process.env.GPRIVATE_KEY || ``;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
console.log("DOCUMENT DATA", doc);


export default async (req, res) => {
    try{
        const appendSpreadsheet = async (row) => {
            try {
              await doc.useServiceAccountAuth({
                client_email: CLIENT_EMAIL,
                private_key: PRIVATE_KEY,
              });
              await doc.loadInfo();
          
              const sheet = doc.sheetsById[SHEET_ID];
              console.log("ROW IS HERE", row);
              const writeSheet = await sheet.addRow(row);
              const readSheet = await sheet.getRows();
              console.log("RESULT IS HERE", readSheet);
            } catch (e) {
              console.error('Error: ', e);
            }
          };
          
          const newRow = { Name: "cool story", Value: "bro" };
          
          appendSpreadsheet(newRow);
          res.send('ok');
    } catch (error) {
        console.log("ERROR",error);
    }

}
