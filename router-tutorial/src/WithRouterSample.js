import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

const WithRouterSample = () => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

  return (
    <>
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly/>

      <h4>params</h4>
      <textarea value={JSON.stringify(params)} readOnly/>

      <button onClick={()=> navigate('/')}>홈으로</button>
    </>
  );
};

export default WithRouterSample