import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Navigation(){
    return (
        <div className={styles.nav}>
            <img src="/logo.png" alt="logo" className={styles.logo}/>
            <div className={styles.navli}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </div>
        </div>
    )

}