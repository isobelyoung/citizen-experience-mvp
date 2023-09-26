import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmphasisButton from '../../components/EmphasisButton';
import { ReactComponent as Logo } from '../../assets/CheonJaeVR_logo.svg';
import paths from '../../routes/paths';
import axios from 'axios';
import './index.css';

const Home = () => {
    useEffect(() => {
        // try {
        //     let res = await axios.get('/my-api-route');
        
        //     // Work with the response...
        // } catch (err) {
        //     if (err.response) {
        //         // The client was given an error response (5xx, 4xx)
        //         console.log(err.response.data);
        //         console.log(err.response.status);
        //         console.log(err.response.headers);
        //     } else if (err.request) {
        //         // The client never received a response, and the request was never left
        //     } else {
        //         // Anything else
        //     }
        // }
    })

    const navigate = useNavigate();

    const handleClick = (route: string) => {
        navigate(route);
    };

    return (
        <div>
            <h1 className='squish-width'>Welcome to the CheonJae VR Citizen Experience</h1>
            <div className='flex center'>
                <Logo className='logo' />
            </div>
            <EmphasisButton text='Enter' onClick={() => handleClick(paths.INTRO_GAME)} />
            {/* <EmphasisButton text='Enter' onClick={navigate(`{http://localhost:3000/${paths.playGame}`)} /> */}
        </div>
    )
}

export default Home;