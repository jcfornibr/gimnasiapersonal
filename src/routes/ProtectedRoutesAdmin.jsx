import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoutesAdmin({children, auth}) {
  
    /* let auth = false; */
    if(auth){
        return children;
    } else {
        return (
            <Navigate to='/' />
        )
    }
}
