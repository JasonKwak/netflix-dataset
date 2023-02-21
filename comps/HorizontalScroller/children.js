import { useEffect, useState, useRef} from 'react';
import record from '../../data/netflix.json'
import styles from '../../styles/Home.module.css'
import { Player } from '@lottiefiles/react-lottie-player';
import axios from 'axios';

export default function Children(){
    
    let childrenmovie = record.filter(film => (film.listed_in === "Children & Family Movies"));
    let randomize = [...childrenmovie].sort((a, b) => 0.5 - Math.random());
    randomize.length = 20;

    const [shows, setShows] = useState([...childrenmovie]);
    const [showComponent, setShowComponent] = useState(false);
    
    useEffect(() => {
        setShowComponent(true);
    },[])

    const animation = useRef(null);

    const refreshList = () => {
        animation.current?.play();
        setTimeout(() => {
            setShows(randomize)
            animation.current?.stop();
        }, 960);

    }

    return (
        <div>
            <div className={styles.movie_head}>
                <h1 className={styles.categoryhead}>Family Day Specials</h1>
                
                <div onClick={refreshList} className={styles.movie_head_child}>
                    <Player
                        autoplay={false}
                        ref={animation}
                        loop={false}
                        src="/refresh.json"
                        style={{ height: '1.75rem', width: '1.75rem', cursor:'pointer'}}
                />
                </div>
            </div>

        <div className={styles.horizscroll}>

        {showComponent && randomize.map((item,index) => (
            <div className={styles.moviecont} key={item.show_id} style={{backgroundImage:`linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.6)), url('${item.imageurl}')`}}>
                <div className={styles.column}>
                <div className={styles.moviepostercont}>
                </div>
                <div className={styles.childrenrow}>
                    <h1 className={styles.movietitle}>{item.title}</h1>
                </div>
                <div className={styles.secrow}>

                <div className={styles.column}>
                    <p>{item.duration}</p>
                    <p>{item.release_year}</p>
                </div>

                <div className={styles.type_rating}>
                        {item.type === 'Movie' ? <img src='/movie.svg' alt='Movie'/> : <img src='/tv.svg' alt='TV Series'/>}
                        <p>{item.rating}</p>
                    </div>
                </div>
                </div>
            </div>
            ))} 
        </div>

        </div>
    )
}