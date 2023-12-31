import { TypeAnimation } from 'react-type-animation';
import EmphasisButton from '../../components/EmphasisButton'
import { useNavigate } from 'react-router-dom';
import PageLoading from '../../components/PageLoading';
import { useDispatch } from 'react-redux';
import { GAME_SCENARIOS } from '../../constants';
import paths from '../../routes/paths';
import './index.css';
import { resetConversationHistory, resetPromptResponse } from '../../store/reducers/gameReducer';

const IntroGame = () => {
    const scenario = GAME_SCENARIOS[Math.floor(Math.random() * GAME_SCENARIOS.length)];
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(resetPromptResponse());
        dispatch(resetConversationHistory());
        navigate(paths.INTRO_GAME);
    }

    const renderDescription = () => {
        return (
            <div className='nes-container with-title type-wrapper is-rounded flex column middle'>
                <p className='py-2' style={{ lineHeight: '2rem' }}>
                    Thanks for playing the CheonJae VR Experience!
                </p>
                <div className='gif-wrapper'>
                    <img src='https://i.gifer.com/OPXV.gif' />
                </div>
                <p className='py-2' style={{ lineHeight: '2rem' }}>
                    Our vision is to empower citizens and rescuers in facing a thousand disasters.
                </p>
                <EmphasisButton text='Play Again' onClick={handleClick} />
            </div>
        )
    }

    return (
        <div className='play-window flex middle center' style={{ backgroundColor: '#C3BABA' }}>
            {renderDescription()}
        </div>
    )
}

export default IntroGame;