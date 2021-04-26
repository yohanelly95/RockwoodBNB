const { GoogleSpreadsheet } = require('google-spreadsheet');
// Config variables
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_GSPREADSHEET_ID;
const SHEET_ID = process.env.NEXT_PUBLIC_GSHEET_ID || '0';
const CLIENT_EMAIL = process.env.NEXT_PUBLIC_GCLIENT_EMAIL;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_GPRIVATE_KEY;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);


export default async (req, res) => {
    try {
      const { selectedRooms, selectedDates } = req.body;

      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY.replace(/\\n/gm, '\n'),
      });
      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID];
      const sheetData = await sheet.getRows();

      sheetData && sheetData.map(async (row) => {
        let datesList = JSON.parse(row.dates);
        if (selectedRooms && selectedRooms.find((selectedRoom) => selectedRoom.roomNumber == row.room )) {
          datesList = [...datesList, selectedDates];
          row.bookings = '' + datesList.length;
          row.dates = JSON.stringify(datesList); 
          await row.save();
        }
      });

      res.send('ok');

    } catch (error) {
        console.log("ERROR", error);
    }

}
