import styles from './styles.module.scss';
import { FaReact } from 'react-icons/fa';

export function Header (){
    return(
        <header className={ styles.headerContainer }>
            
            <FaReact size = {50} className = { styles.reactIcon } color = "var(--yellow-omni)"/>

            <div className = { styles.headerContent }>
                <a href="#">About</a>
                <a href="#">Featured</a>
                <a href="#">Portfolio</a>
                <a href="#">Blog</a>
            </div>

            <div className = { styles.headerButton }>
                <button type = "button">
                    Send Email   
                </button>
            </div>
            
            
        </header>
    )
}