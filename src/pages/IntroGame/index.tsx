import { TypeAnimation } from 'react-type-animation';
import EmphasisButton from '../../components/EmphasisButton';
import { useNavigate } from 'react-router-dom';
import PageLoading from '../../components/PageLoading';
import { useDispatch } from 'react-redux';
import { GAME_SCENARIOS } from '../../constants';
import paths from '../../routes/paths';
import './index.css';
import { setScenario } from '../../store/reducers/gameReducer';

const IntroGame = () => {
    const scenario =
        GAME_SCENARIOS[Math.floor(Math.random() * GAME_SCENARIOS.length)];
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // api loading state

    const handleClick = () => {
        dispatch(setScenario(scenario));
        navigate(paths.PLAY_GAME);
    };

    const slicer = Math.floor(scenario.BACKSTORY.length / 2);

    const renderDescription = () => {
        return (
            <div className="nes-container is-rounded with-title type-wrapper double-line-height">
                <h2
                    className="title subheading"
                    style={{ backgroundColor: '#C3BABA' }}
                >
                    Imagine this...
                </h2>
                <div className="overflow-scroll">
                    <p className='py-2 paragraph'>{scenario.BACKSTORY}</p>                    
                </div>
                <EmphasisButton text="Play" onClick={handleClick} />
            </div>
        );
    };

    return (
        <div
            className="play-window flex middle center"
            style={{ backgroundColor: '#C3BABA' }}
        >
            {renderDescription()}
        </div>
    );
};

export default IntroGame;
