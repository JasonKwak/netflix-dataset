import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Navigation(){

    const [active, setActive] = useState('Home')
    const router = useRouter();

    const handleActive = (e) => {
        setActive(e.target.innerText)
    }


    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        window.onscroll = () => {
            if ( window.scrollY > 35) {
                setScrolled(true);
            } else if ( window.scrollY < 35) {
                setScrolled(false);
            }
        };
    }, []);
    

    return (
        <div className={scrolled ? `${styles.navscroll}` : `${styles.nav}`}>
            <a href="/"> <img src="/logo.png" alt="logo" className={styles.logo}/> </a>
            <div className={styles.navli}>
                <Link href="/" className={router.pathname == "/" ? styles.active : ""} >Home</Link>
                <Link href="/library" className={router.pathname == "/library" ? styles.active : ""} >Library</Link>
            </div>
        </div>
    )

}