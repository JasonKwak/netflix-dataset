import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DarkMode from '../DarkMode/darkModeToggle'
import styled from "@emotion/styled";
import {useState, useEffect, useRef} from "react";
import { Player } from '@lottiefiles/react-lottie-player'
import Image from 'next/image';

const ToggleButton = styled.button`
  --toggle-width: 4rem;
  --toggle-height: 1.75rem;
  --toggle-padding: 0.3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0.75rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-text-primary);
  transition: background 0.25s ease-in-out;
`;

const ToggleThumb = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: var(--color-bg-primary);
  p.activeTheme === "dark"
  ? "white"
  : "black";
  transition: transform 0.25s ease-in-out;
  transform: ${(p) =>
    p.activeTheme === "dark"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
`;


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

    const [activeTheme, setActiveTheme] = useState("dark");
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    const animation = useRef(null);

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
      }, [activeTheme]);

    const toggleMode = () => {
        if (activeTheme === "light") {
            setActiveTheme("dark");
            animation.current?.play();
        } else {
            setActiveTheme("light");
            animation.current?.play();
        }

        // setTimeout((keepLastFrame) => {
        //     animation.current?.stop(keepLastFrame = true);
        // }   , 800);
    }
    

    return (
        <div className={scrolled ? `${styles.navscroll}` : `${styles.nav}`}>
            <a href="/" className={styles.imageanchor}> <img src={ activeTheme === "dark" ? "/logo.png" : "/logoBlack.png"} alt="logo" className={styles.logo}/> </a>
            <div className={styles.navli}>
                <Link href="/" className={router.pathname == "/" ? styles.active : ""} >Home</Link>
                <Link href="/library" className={router.pathname == "/library" ? styles.active : ""} >Library</Link>
                <ToggleButton
                    type="button"
                    onClick={toggleMode}>
                    <ToggleThumb activeTheme={activeTheme} />
                    <span className={styles.iconcont}><Image src='/moon.svg' className={styles.darkmode} width={25} height={25}/></span>
                    <span className={styles.iconcont}><Image src='/sun.svg' className={styles.darkmode} width={25} height={25}/></span>                   
                </ToggleButton>
                 </div>  
        </div>
    )

}