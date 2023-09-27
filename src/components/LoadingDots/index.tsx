import './index.css';

type LoadingDotsProps = {
    size?: 'normal' | 'large';
}

const LoadingDots = ({ size }: LoadingDotsProps) => {
    return <p className={`loading-dots ${size ? size : 'normal'}`}></p>
}

export default LoadingDots;