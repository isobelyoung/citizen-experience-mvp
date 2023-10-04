import './index.css';

type LoadingDotsProps = {
    size?: 'normal' | 'large';
    color?: 'light' | 'dark';
    text?: string;
};

const LoadingDots = ({ size, text, color }: LoadingDotsProps) => {
    return <p className={`loading-dots${color ? '-light' : ''} ${size ? size : 'normal'} ${color && `${color}-text`}`}>{text}</p>;
};

export default LoadingDots;
