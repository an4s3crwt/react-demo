

import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';

function withRouter(Component) {

    function ComponentWithRouterProp(props){
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
    
        return (
            <Component
            {...props}
            location={location}
            params={params}
            navigate={navigate}/>

    
  );

}

    return ComponentWithRouterProp;


}

export default withRouter;