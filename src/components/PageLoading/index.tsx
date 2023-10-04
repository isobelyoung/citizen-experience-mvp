import LoadingDots from '../LoadingDots';
import PageWrapper from '../../views/PageWrapper';

const PageLoading = () => {
    return (
        <div className="page-wrapper">
            <LoadingDots text="Page Loading" />
        </div>
    );
};

export default PageLoading;
