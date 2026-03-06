import Sidebar from "../components/Sidebar"
import GuestTable from "../components/GuestTable"
import BackButton from "../components/BackButton"
function Guests(){

  return(

    <div className="flex">

      <Sidebar/>

      <div className="p-10 w-full">
        <BackButton/>
        <GuestTable/>

      </div>

    </div>

  )

}

export default Guests