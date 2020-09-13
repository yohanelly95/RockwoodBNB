export default async (req, res) => {
    if (req.method === 'POST') {
        const rooms = parseInt(req.body.numberOfRooms);
        const fixedRoomRate = 1999;
        //Extra Bedding might need changes, not sure what check needed and amount is  
        const fixedExtraBed = 750
        const totalRoomsCharge = fixedRoomRate * rooms;
        const totalInvoice = totalRoomsCharge + fixedExtraBed 

        res.json({
            totalRoomsCharge: totalRoomsCharge,
            totalInvoice: totalInvoice
        });

    } 
  }
