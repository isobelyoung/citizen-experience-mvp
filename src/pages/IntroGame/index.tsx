import { TypeAnimation } from 'react-type-animation';
import EmphasisButton from '../../components/EmphasisButton'
import { useNavigate } from 'react-router-dom';
import PageLoading from '../../components/PageLoading';
import { useDispatch } from 'react-redux';
import { GAME_SCENARIOS } from '../../constants';
import paths from '../../routes/paths';
import './index.css';
import { setScenario } from '../../store/reducers/gameReducer';

const IntroGame = () => {
    const scenario = GAME_SCENARIOS[Math.floor(Math.random() * GAME_SCENARIOS.length)];
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // api loading state

    const handleClick = () => {
        dispatch(setScenario(scenario));
        navigate(paths.PLAY_GAME)
    }

    const renderDescription = () => {
        return (
            <div className='nes-container with-title type-wrapper'>
                <h2 className='title' style={{ backgroundColor: '#C3BABA' }}>Imagine this...</h2>
                <p className='py-2' style={{ lineHeight: '2rem' }}>{scenario.BACKSTORY}</p>
                <EmphasisButton text='Play' onClick={handleClick} />
            </div>
        )
    }

    return (
        <div className='play-window flex middle' style={{ backgroundColor: '#C3BABA' }}>
            {renderDescription()}
        </div>
    )
}

export default IntroGame;