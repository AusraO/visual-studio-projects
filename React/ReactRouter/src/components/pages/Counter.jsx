import { useContext } from "react";
import CounterContext from "../../contexts/TryingContext";

const Counter = () => {
    const { numberNow }=useContext (CounterContext)
    return ( <>
    <div>
        <p>{numberNow}</p>
        <button onClick={()=> dispatch('more')}>Prideti</button>
        <button onClick={()=> dispatch('more')}> Atimti</button>

    </div>
    </> );
}
 
export default Counter;