import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from 'react';

import Loader from '../Loader/loader';
import css from './SharedLayout.module.css'
import styled from "styled-components";

const StyledLink = styled(NavLink)`
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-weight: 500;

    &.active {
    color: white;
    background-color: orangered;
}
`;

export const SharedLayout = () => {
    return ( 
        <>
        <div className={css.Header}>
            <nav className={css.Nav}>
                  <StyledLink to="/">
                    Home
                </StyledLink>
                  <StyledLink to="/movies">
                    Movies
                </StyledLink>
            </nav>
        </div>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    )
};