import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import styles from './Menu.module.css';

const Navigation = () => (
    <AuthUserContext.Consumer>
        {
            authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
    </AuthUserContext.Consumer>
)

const NavigationAuth = () => (
    <div>
        <ul className={styles.Menu}>
            <li className={styles.Menu_item}>
                <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
            <li className={styles.Menu_item}>
                <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li className={styles.Menu_item}>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            <li className={styles.Menu_item}>
                <SignOutButton />
            </li>
        </ul>
    </div>
);

const NavigationNonAuth = () => (
    <div>
        <ul className={styles.Menu}>
            <li className={styles.Menu_item}>
                <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
            <li className={styles.Menu_item}>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
        </ul>
    </div>
);

export default Navigation;