import Sidebar from "../components/Sidebar"
import BudgetChart from "../components/BudgetChart"

function Budget(){

  return(

    <div className="flex">

      <Sidebar/>

      <div className="p-10 w-full">

        <BudgetChart/>

      </div>

    </div>

  )

}

export default Budget