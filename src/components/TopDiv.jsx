import {MdOutlineLogout} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { removeStorage } from '../services/utils';

const TopDiv = () => {


    const navigate = useNavigate();
    
    return(
        <div  className="topdiv" >
            <MdOutlineLogout id="logout" onClick={()=>{removeStorage('idToken');
    navigate('/');}} />
        </div>
        
    );
};

export default TopDiv;