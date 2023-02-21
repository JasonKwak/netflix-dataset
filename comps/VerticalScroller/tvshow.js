import { useEffect, useState, useRef} from 'react';
import record from '../../data/netflix.json'
import styles from '../../styles/Home.module.css'
import { Player } from '@lottiefiles/react-lottie-player';

export default function Tvshow({
    header = 'Sample Category'
}){
    
    let tvshows = record.filter(film => (film.type === "TV Show"));
    let movie = record.filter(film => (film.type === 'Movie'));
    
    let randomize = [...tvshows].sort((a, b) => 0.5 - Math.random());

    const [shows, setShows] = useState([...tvshows]);
    const [showComponent, setShowComponent] = useState(false);
    
    useEffect(() => {
        setShowComponent(true);
    },[])

    return (
        <div>
            <div style={{marginBottom:'1rem'}}>
                <h1 className={styles.categoryhead}>{header}</h1>
                
            </div>

        <div className={styles.vertiscroll}>

        {showComponent && randomize.map((item,index) => (
            <div className={styles.librarycont} key={item.show_id} style={{backgroundImage:`linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 1)), url('${item.imageurl}')`}}>
                <div className={styles.column}>
                <div className={styles.row}>
                    <h1 className={styles.movietitle}>{item.title}</h1>
                </div>
                <div className={styles.row}>

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