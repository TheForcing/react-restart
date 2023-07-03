import React, {Component, useCallback, useContext, useEffect} from 'react'
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
export function useBlocker(bloker, when= true){
    const {navigator} = useContext(NavigationContext);

    useEffect(()=>{
        if(!when) return;

        const unblock = navigator.block((tx)=>{
            const autoUnblockingTx = {
                ...tx,
                retry() {
                    unblock();
                    tx.retry();
                },
            };
            bloker(autoUnblockingTx);
        });
        return unblock;
    }, [navigator, bloker, when]);
};

export function usePrompt(message, when = true) {
    const bloker = useCallback((tx)=>{
        //eslint-disable-next-line no-alert
        if(window.confirm(message)) tx.retry();
    }, [message]);
    useBlocker(bloker, when);
    
  return (
    <div>HistorySample</div>
  )
};

export default HistorySample;