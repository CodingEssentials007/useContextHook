
import { AppContext } from "../App";
import {useContext} from 'react';

function ThirdLevel() {

const {name}=useContext(AppContext);
        return (
    <div>
        <h1> Hello  {name} </h1> 
    </div>  
            );
}

export default ThirdLevel;