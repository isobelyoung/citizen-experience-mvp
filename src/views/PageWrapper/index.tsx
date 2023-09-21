interface PageWrapperProps {
    children: React.ReactNode | React.ReactNode[]
}

const PageWrapper = ({ children }: PageWrapperProps) => {
    return <div>{children}</div>
}

export default PageWrapper;