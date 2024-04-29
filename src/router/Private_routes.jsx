
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { OwnContext } from '../context/ContextComponents';
import { Navigate, useLocation } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
const PrivateRoutes = ({ children }) => {
    const { users, loading } = useContext(OwnContext);
    const location = useLocation()
    if (loading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <Bars
                    height="80"
                    width="80"
                    color="#2B3440"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        )
    }
    if (users) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/login"} />;
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
};

export default PrivateRoutes;