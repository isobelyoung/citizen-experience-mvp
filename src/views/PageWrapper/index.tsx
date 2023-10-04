import './index.css';
import { Transition } from 'react-transition-group';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

interface PageWrapperProps {
    children: React.ReactNode | React.ReactNode[];
}

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <CSSTransition classNames="fade" timeout={300}>
            <div className="page-wrapper">{children}</div>
        </CSSTransition>
    );
};

export default PageWrapper;
