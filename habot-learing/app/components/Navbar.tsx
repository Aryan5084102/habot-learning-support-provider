import styles from '../styles/Navbar.module.scss';

export default function Navbar() {
  return (
    <div style={{width: '100%'}}>
      <nav className={styles.navbar}> 
        <div className={styles.logo}>Learning Support Provider </div>
      </nav>
    </div>
  );
}