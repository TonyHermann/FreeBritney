import { FunctionComponent } from "react";
import { getRetos } from '../../services';

interface FreeBritneyButtonProps {
    
}
 
const FreeBritneyButton: FunctionComponent<FreeBritneyButtonProps> = () => {
    return ( 
        <div className="fbButton">
            <h1>#FreeBritney</h1>
        </div>
     );
}
 
export default FreeBritneyButton;