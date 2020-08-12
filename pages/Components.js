import { DefaultLayout } from "../components"

export default function IndexPage() {
  return (
      <DefaultLayout>
        <div className="">
          <h1>This is H1</h1>
          <h2 className="mt-2">This is H2</h2>
          <button className="btn-primary mt-2">Room 1</button>
          <button className="btn-secondary ml-4 mt-2">Room 2</button>
        </div> 
      </DefaultLayout>   
  )
}