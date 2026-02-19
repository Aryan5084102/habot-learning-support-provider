import styles from './styles/Loading.module.scss'

export default function Loading() {
  return (
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <span className={styles.loader}></span>
        </div>
  );
}
