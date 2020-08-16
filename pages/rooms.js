import { DefaultLayout } from "../components";

function Rooms() {
  return (
    <DefaultLayout
      wrapperClass="container"
      seoTitle="Book rooms | Rockwood BNB"
    >
      <section className="flex flex-row border-b-2 border-gray-200">
        <div className="w-3/4 border-r-2 border-gray-200 pr-6 pb-10">
            <div className="w-full py-6">
                Select a room : <button className="btn-primary ml-2">Room 1</button>
                <button className="btn-secondary ml-4">Room 1</button>
            </div>
            <div className="">
                <div className="h-64 bg-gray-200 rounded-lg">
                </div>
                <div className="flex flex-row mt-8">
                    <div className="w-2/3 h-64">
                        <p>Located in Manāli, 1.5 km from Hidimba Devi Temple, Rockwood B&B provides accommodation with a shared lounge, free WiFi, a 24-hour front desk, and a shared kitchen. This bed and breakfast features free private parking and room service.</p>
                    </div>
                    <div className="w-1/3 flex flex-wrap">
                    </div>
                </div>
            </div>
        </div>
        <div className="w-1/4 pl-6">
            <h2 className="mt-4">Room 3</h2>
            <div className="w-full mt-6 py-4 px-6 bg-gray-200 rounded-lg flex flex-col flex-grow">
                <div className="">
                    <p className="text-2xl">₹<span>1999</span><span className="text-base"> /night</span></p>
                    <p className="mt-2"><span>24th Aug</span> to <span>26th Aug</span></p>
                    <p className="mt-6">₹<span>1999</span> x <span>2</span><span className="float-right">₹<span>3998</span></span></p>
                    <p className="mt-2">Extra Bedding<span className="float-right">₹<span>750</span></span></p>
                    <p className="mt-4 font-bold">Total<span className="float-right">₹<span>4748</span></span></p>

                </div>
            </div>
        </div>
      </section>
      <section className="mt-8 pb-20">
          <h2>Things to know</h2>
          <div className="flex flex-row mt-6">
            <div className="w-1/3">
                <h3>House Rules</h3>
                <ol className="w-3/4 ml-5 mt-4 list-disc list-outside">
                    <li>Check-in: After 12:00 pm</li>
                    <li>No Smoking</li>
                    <li>No parties or events</li>
                    <li>Pets are allowed</li>
                </ol>
            </div>
            <div className="w-1/3">
                <h3>Additional Rules</h3>
                <ol className="w-3/4 ml-5 mt-4 list-disc list-outside">
                    <li>If you are returning home after dark, make sure you have a working flashlift to help you see the path</li>
                    <li>You are allowed to smoke outside the house, in the balcony</li>
                    <li>Please leave your shoes on the shoe rack provided</li>
                    <li>Heaters provided @ Rs 100/night for winters</li>
                </ol>
            </div>
            <div className="w-1/3">
                <h3>House Rules</h3>
                <ol className="w-3/4 ml-5 mt-4 list-disc list-outside">
                    <li>Check-in: After 12:00 pm</li>
                    <li>No Smoking</li>
                    <li>No parties or events</li>
                    <li>Pets are allowed</li>
                </ol>
            </div>
          </div>
      </section> 
    </DefaultLayout>
  );
}

export default Rooms;
