import { DefaultLayout } from "../components";
import GetSheetDone from 'get-sheet-done';

function Rooms() {
    const roomsList = [101,102,103,104,105,106];
    const DOCUMENT_ID = "1L2UsWdDm6UU1dS3DZM5rqKDuNxqLOZnZ95OZkUBY-S0";

    const renderedRooms = roomsList.map(room => (
        <button className="btn-secondary ml-3">{`Room ${room}`}</button>
    ))

    GetSheetDone.labeledCols(DOCUMENT_ID).then(sheet => {
        console.log(sheet.data);
    });
    

  return (
    <DefaultLayout
      wrapperClass="container"
      seoTitle="Book rooms | Rockwood BNB"
    >
      <section className="flex flex-row border-b-2 border-gray-200">
        <div className="w-3/4 border-r-2 border-gray-200 pr-6 pb-10">
            <div className="w-full py-6">
                Select a room : <span>{renderedRooms}</span>
            </div>
            <div className="">
                <div className="h-64 bg-gray-200 rounded-lg">
                </div>
                <div className="flex flex-row mt-8">
                    <div className="w-2/3">
                        <p>Located in Manāli, 1.5 km from Hidimba Devi Temple, Rockwood B&B provides accommodation with a shared lounge, free WiFi, a 24-hour front desk, and a shared kitchen. This bed and breakfast features free private parking and room service.</p>
                    </div>
                    <div className="w-1/3 pl-4 flex flex-wrap justify-between">
                        <div className="w-1/2 h-8 pr-3 flex items-center">
                            <div className="w-8 h-8 m-0 bg-gray-200 rounded-full"></div>
                            <p className="ml-2">Free Parking</p>
                        </div>
                        <div className="w-1/2 h-8 pl-3 flex items-center">
                            <div className="w-8 h-8 m-0 bg-gray-200 rounded-full"></div>
                            <p className="ml-2">Balcony</p>
                        </div>
                        <div className="w-1/2 h-8 pr-3 mt-4 flex items-center">
                            <div className="w-8 h-8 m-0 bg-gray-200 rounded-full"></div>
                            <p className="ml-2">Geyser</p>
                        </div>
                        <div className="w-1/2 h-8 pl-3 mt-4 flex items-center">
                            <div className="w-8 h-8 m-0 bg-gray-200 rounded-full"></div>
                            <p className="ml-2">WiFi</p>
                        </div>
                        <div className="w-1/2 h-8 pr-3 mt-4 flex items-center">
                            <div className="w-8 h-8 m-0 bg-gray-200 rounded-full"></div>
                            <p className="ml-2">Television</p>
                        </div>
                        <div className="w-1/2 h-8 pl-3 mt-4 flex items-center">
                            <div className="w-8 h-8 m-0 bg-gray-200 rounded-full"></div>
                            <p className="ml-2">Heater</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-1/4 pl-6">
            <h2 className="mt-4">Room 3</h2>
            <div className="w-full mt-6 py-4 px-6 bg-gray-200 rounded-lg flex flex-col flex-grow">
                <p className="text-2xl">₹<span>1999</span><span className="text-base"> /night</span></p>
                <p className="mt-2"><span>24th Aug</span> to <span>26th Aug</span></p>
                <p className="mt-6">₹<span>1999</span> x <span>2</span><span className="float-right">₹<span>3998</span></span></p>
                <p className="mt-2">Extra Bedding<span className="float-right">₹<span>750</span></span></p>
                <p className="mt-4 font-bold">Total<span className="float-right">₹<span>4748</span></span></p>
                <button className="btn-primary btn-fw mt-12 font-bold">BOOK</button>
                <p className="text-center w-full mt-4">You won't be charged yet</p>
            </div>
            <ol className="my-6">
                <li><p>First Floor</p></li>
                <li><p>Road facing windows</p></li>
                <li><p>Balcony</p></li>
                <li><p>Closet space</p></li>
                <li><p>Heaters available on request</p></li>
                <li><p>Shower</p></li>
                <li><p>Laptop friendly workspace</p></li>
            </ol>
        </div>
      </section>
      <section className="mt-8 pb-20">
          <h2>Things to know</h2>
          <div className="flex flex-row mt-6">
            <div className="w-1/3">
                <h3>House Rules</h3>
                <ol className="w-2/3 ml-5 mt-4 list-disc list-outside">
                    <li><p>Check-in: After 12:00 pm</p></li>
                    <li><p>No Smoking</p></li>
                    <li><p>No parties or events</p></li>
                    <li><p>Pets are allowed</p></li>
                </ol>
            </div>
            <div className="w-1/3">
                <h3>Additional Rules</h3>
                <ol className="w-2/3 ml-5 mt-4 list-disc list-outside">
                    <li><p>If you are returning home after dark, make sure you have a working flashlift to help you see the path</p></li>
                    <li><p>You are allowed to smoke outside the house, in the balcony</p></li>
                    <li><p>Please leave your shoes on the shoe rack provided</p></li>
                    <li><p>Heaters provided @ Rs 100/night for winters</p></li>
                </ol>
            </div>
            <div className="w-1/3">
                <h3>Cancellation Policy</h3>
                <ol className="w-2/3 ml-5 mt-4 list-disc list-outside">
                    <li><p>Check-in: After 12:00 pm</p></li>
                    <li><p>No Smoking</p></li>
                    <li><p>No parties or events</p></li>
                    <li><p>Pets are allowed</p></li>
                </ol>
            </div>
          </div>
      </section> 
    </DefaultLayout>
  );
}

export default Rooms;
