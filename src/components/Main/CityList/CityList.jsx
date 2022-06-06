import { useContext } from "react"
import { CityListContext } from "../../../contexts/CityListContexts"
import CityItem from "./CityItem/CityItem"

const CityList = () => {

	const {cityes} = useContext(CityListContext)


	return (
		<ul className="list-group">
			{cityes.map((city, index) => (
				<CityItem key={city.id} id={city.id} index={index} text={city.text} />
			))}
		</ul>
	)
}

export default CityList