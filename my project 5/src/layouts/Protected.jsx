import React from 'react'
import { Navigate } from 'react-router-dom';
const Protected = ({ state, children }) => {
    if (!state) {
        return <Navigate to="/" replace />;
    }
    return children;
};
export default Protected;



