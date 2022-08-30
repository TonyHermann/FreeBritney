import { FunctionComponent, useState } from "react";
import { reto } from "../../models";
import { getRetos } from '../../services';

interface FreeBritneyButtonProps {
    
}
 
const FreeBritneyButton: FunctionComponent<FreeBritneyButtonProps> = () => {
    const [retos, setRetos] = useState<reto[]>([]);

    const getRetos = () => {

    }

    const getRandomReto = () => {

    };

    const handleClick = () => {

    }; 
    return ( 
        <div className="fbButton" onClick={() => {
            handleClick()
        }}>
            <h1>#FreeBritney</h1>
        </div>
     );
}
 
export default FreeBritneyButton;