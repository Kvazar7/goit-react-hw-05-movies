import { Outlet, Link } from "react-router-dom";
import { Suspense } from 'react';
import Loader from '../Loader/loader';
import css from './SharedLayout.module.css'

const SharedLayout = () => {
    return ( 
        <div>
        <div className={css.Header}>
            <nav className={css.Nav}>
                <Link to="/" className={css.Link}>
                    Home
                </Link>
                <Link to="/movies" className={css.Link}>
                    Movies
                </Link>
            </nav>
            </div>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    )
};

export default SharedLayout;