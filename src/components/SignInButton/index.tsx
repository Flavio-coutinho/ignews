import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButtton() {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button type="button" className={styles.signInButton}>
        <FaGithub color="#04b351" />
        Flávio Coutinho
        <FiX color="#737380" className={styles.closeIcon} />
    </button>

    ) : (
        <button type="button" className={styles.signInButton}>
        <FaGithub color="#eba417" />
        Sign In with Github
    </button>
    )
       
    
}