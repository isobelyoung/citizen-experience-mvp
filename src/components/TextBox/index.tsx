import './index.css';

interface TextBoxProps {
    isLoading?: boolean;
    text: string;
}

const TextBox = ({isLoading, text}: TextBoxProps) => {
    return (<div className='text-box'>{text}</div>)
}