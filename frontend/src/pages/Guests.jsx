import Sidebar from "../components/Sidebar"
import GuestTable from "../components/GuestTable"

function Guests(){

  return(

    <div className="flex">

      <Sidebar/>

      <div className="p-10 w-full">

        <GuestTable/>

      </div>

    </div>

  )

}

export default Guests