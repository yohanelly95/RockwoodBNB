export default async (req, res) => {
    if (req.method === 'POST') {
        const rooms = parseInt(req.body.numberOfRooms);
        const beds = parseInt(req.body.numberOfBeds);
        const fixedRoomRate = 1999;
        //Extra Bedding might need changes, not sure what check needed and amount is  
        const fixedExtraBed = 750
        const totalRoomsCharge = fixedRoomRate * rooms;
        const totalBedsCharge = fixedExtraBed * beds;
        const totalInvoice = totalRoomsCharge + totalBedsCharge;

        res.json({
            totalRoomsCharge: totalRoomsCharge,
            totalInvoice: totalInvoice,
            totalBedsCharge: totalBedsCharge
        });

    } 
  }
