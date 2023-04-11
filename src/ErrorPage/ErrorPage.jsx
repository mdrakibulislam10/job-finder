import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    const navigate = useNavigate();

    return (
        <div className='font-semibold mt-5' id="error-page" style={{ textAlign: "center" }}>
            <h1>404!!!</h1>
            <h4 className='my-2'>
                {error.statusText || error.message}!
            </h4>
            <h3>Please search valid URL!</h3>
            <p className='my-2'>OR</p>
            <button onClick={() => navigate(-1)}>Go previous Page</button>
        </div>
    );
};

export default ErrorPage;