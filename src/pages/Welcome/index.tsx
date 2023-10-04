import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmphasisButton from '../../components/EmphasisButton';
import { ReactComponent as Logo } from '../../assets/CheonJaeVR_logo.svg';
import paths from '../../routes/paths';
import axios from 'axios';
import './index.css';

const Home = () => {
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
        </div>
    )
}

export default Home;