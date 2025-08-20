import { faSearch, faG, faMailBulk, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputField from "../input-field/InputField";
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav_container}>
            <div className={styles.logo_bars}>
                <button className={styles.bars_btn}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <a href="#" className={styles.logo}>
                    <FontAwesomeIcon icon={faMailBulk} />
                    <h4>Gmail</h4>
                </a>
            </div>
            <InputField 
                type={'text'}
                name={'search'}
                id={'search'}
                placeholder={'Search mail'}
                icon={faSearch}
                classes={styles.search_input}
            />
            <div className={styles.user_info}>
                <FontAwesomeIcon icon={faG} />
                <p>Suite</p>
                <a href="#" className={styles.user_details}>P</a>
            </div>
        </nav>
    )
}

export default Navbar;