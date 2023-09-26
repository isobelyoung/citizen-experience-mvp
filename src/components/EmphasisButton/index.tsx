
import './index.css';

interface EmphasisButtonProps {
    text: string;
    onClick: any;
    alignment?: 'left' | 'center' | 'right';
    additionalClasses?: string;
}

const EmphasisButton = ({text, onClick, alignment, additionalClasses}: EmphasisButtonProps): JSX.Element => {
    return (
        <div className={`flex ${alignment ?? 'center'} ${additionalClasses ?? additionalClasses}`}>
            <button
                type='button'
                className='nes-btn'
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
}

export default EmphasisButton;