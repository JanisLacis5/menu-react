import {useGlobalContext} from "./context"

const Filter = () => {
    const {categories, filter} = useGlobalContext()

    return (
        <div className="btn-container">
            {categories.map((category) => {
                return (
                    <button
                        type="button"
                        className="btn"
                        onClick={() => filter(category)}
                        key={category}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
}
export default Filter
