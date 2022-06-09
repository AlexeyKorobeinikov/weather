import { useContext } from "react"
import { CityListContext } from "../../../../contexts/CityListContexts"
import { useWeather } from "../../../../hooks/useWeather";

const CityItem = ({id, text, index}) => {

	const {deleteCity} = useContext(CityListContext);
	const infoWeather = useWeather(text || "Москва");
	const deleteHandler = () => deleteCity(id);

	
	return (
		<li className="list-group-item">
			<span>
				{index + 1}. {text} 
				
				{infoWeather && (
        <div> {`Температура: ${infoWeather?.main?.temp || ""}*C`}  </div>
    
      		)}
			</span>
			<div>
				<button onClick={deleteHandler} type="button" className="btn btn-danger">Удалить</button>
			</div>
		</li>
	)
}

export default CityItem