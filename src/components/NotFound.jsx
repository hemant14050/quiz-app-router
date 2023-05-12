import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 3000);
    }, [navigate]);

    return (
        <div className='box textcenter'>
            <h1>Not Found</h1>
        </div>
    );
}

export default NotFound;