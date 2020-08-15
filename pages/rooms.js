import { DefaultLayout } from "../components";

function Rooms() {
  return (
    <DefaultLayout
      wrapperClass="container"
      seoTitle="Book rooms | Rockwood BNB"
    >
      <h1>This is H1</h1>
      <h2 className="mt-2">This is H2</h2>
      <button className="btn-primary mt-2">Room 1</button>
      <button className="btn-secondary ml-4 mt-2">Room 2</button>
    </DefaultLayout>
  );
}

export default Rooms;
