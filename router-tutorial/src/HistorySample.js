import React  from 'react'
import { useNavigate, UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom'

const HistorySample = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
       
            navigate(-1);
        
    };

    const handleGoHome = () =>{
        navigate('/');
    };
  
        return(
            <div>
                <button onClick={handleGoBack}>뒤로</button>
                <button onClick={handleGoHome}>홈으로</button>
            </div>
        )
    
}


export default HistorySample;