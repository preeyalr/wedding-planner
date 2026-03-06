import Sidebar from "../components/Sidebar"
import BudgetChart from "../components/BudgetChart"
import BackButton from "../components/BackButton"
function Budget(){

  return(

    <div className="flex">

      <Sidebar/>

      <div className="p-10 w-full">
        <BackButton/>
        <BudgetChart/>

      </div>

    </div>

  )

}

export default Budget