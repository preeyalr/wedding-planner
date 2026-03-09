import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  useEffect(() => {

    const fetchUser = async () => {

      try {

        const res = await axios.get(
          "http://localhost:8000/api/users/profile",
          { withCredentials: true }
        )

        console.log("user from api:", res.data.user)

        setUser(res.data.user)

      } catch (error) {
        console.log("User not logged in")
        setUser(null)
      }

    }

    fetchUser()

  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )

}