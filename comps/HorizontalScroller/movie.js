import record from '../../data/netflix.json'
import styles from '../../styles/Home.module.css'
import { useEffect, useState, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


export default function Movie(){

    let movie = record.filter(film => (film.type === 'Movie'));
    let randomize = [...movie].sort((a, b) => 0.5 - Math.random());
    randomize.length = 20;

    const [movies, setMovies] = useState([...movie]);
    const [showComponent, setShowComponent] = useState(false);
    useEffect(() => {
        setShowComponent(true);
    },[])


    const animation = useRef(null);

    const refreshList = () => {
        animation.current?.play();
        setTimeout(() => {
            setMovies(randomize)
            animation.current?.stop();
        }, 960);

    }
    
    return (
        <div>
            <div className={styles.movie_head}>
                <h1 className={styles.categoryhead}>Featured Movies</h1>
                
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
                <div className={styles.movierow}>
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