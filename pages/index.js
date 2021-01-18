import { TripSelector } from '../components'

export default function IndexPage() {
  return (
    <div className="container">
      <img className="w-100 fixed top-0 left-0 -z-10" src="/assets/img/bg.jpg"></img>
      <div className="flex flex-col min-h-screen">
        <div className="flex items-center justify-center mt-10">
          <img className="w-56" src="../assets/img/rockwood-logo.svg"></img>
        </div>
        <div className="relative top-64">
          <h1 className="text-center">welcome to rockwood bnb</h1>
          <div className="mt-6">
            <TripSelector isNav={false}/>
          </div>
        </div>
      </div>
    </div>
  );
}
