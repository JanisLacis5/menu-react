import {useGlobalContext} from "./context"
import MenuItem from "./MenuItem"

const Menu = () => {
    const {items} = useGlobalContext()
    return (
        <div className="section-center">
            {items.map((item) => {
                return <MenuItem key={item.id} {...item} />
            })}
        </div>
    )
}
export default Menu
