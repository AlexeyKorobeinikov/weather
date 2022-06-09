import { useContext } from "react"
import { CityListContext } from "../../../contexts/CityListContexts"
import CityItem from "./CityItem/CityItem"

const CityList = () => {

	const {cityes} = useContext(CityListContext)

	
	return (
		<ul className="list-group">
			{cityes.length ? cityes.map((city, index) => {
				return (
				<CityItem key={city.id} id={city.id} index={index} text={city.text} />
			); }) : <p>Добавьте город...</p>} 
		</ul>
	);
};

export default CityList