import './index.css';

interface PageWrapperProps {
    children: React.ReactNode | React.ReactNode[]
}

const PageWrapper = ({ children }: PageWrapperProps) => {
    return <div className='page-wrapper'>{children}</div>
}

export default PageWrapper;