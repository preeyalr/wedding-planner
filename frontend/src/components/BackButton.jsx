
import { useNavigate } from "react-router-dom"

function BackButton() {

  const navigate = useNavigate()

  return (

    <button
      onClick={() => navigate(-1)}
      className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 font-body"
    >
      ← Back
    </button>

  )

}

export default BackButton