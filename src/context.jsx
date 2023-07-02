import {createContext, useContext, useState} from "react"
import menu from "./data"

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

function AppContext({children}) {
    const [items, setItems] = useState(menu)
    const allCategories = [
        "all",
        ...new Set(items.map((item) => item.category)),
    ]
    const [categories, setCategories] = useState(allCategories)
    const filter = (category) => {
        if (category === "all") {
            setItems(menu)
            return
        }
        const newItems = menu.filter((item) => item.category === category)
        console.log(newItems)
        setItems(newItems)
    }

    return (
        <GlobalContext.Provider
            value={{items, setItems, categories, setCategories, filter}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext
