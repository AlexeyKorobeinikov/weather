import { useContext } from "react"
import { CityListContext } from "../../../../contexts/CityListContexts"

const CityItem = ({id, text, index}) => {

	const {deleteCity} = useContext(CityListContext)

	const deleteHandler = () => deleteCity(id)

	
	return (
		<li className="list-group-item">
			<span>
				{index + 1}. {text}
			</span>
			<div>
				<button onClick={deleteHandler} type="button" className="btn btn-danger">Удалить</button>
			</div>
		</li>
	)
}

export default CityItem