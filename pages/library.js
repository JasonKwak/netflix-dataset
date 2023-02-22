import Navigation from "@/comps/Navigation/navigation"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import record from '../data/netflix.json'
import Link from 'next/link'
import Movie from '@/comps/HorizontalScroller/movie'
import { Player } from '@lottiefiles/react-lottie-player'
import Tvshow from "@/comps/VerticalScroller/tvshow"
import { useState, useEffect } from 'react'


export default function Library(){


    let children = record.filter(film => (film.listed_in === "Children & Family Movies" || film.listed_in === "Kids' TV"))
    let horror = record.filter(film => (film.listed_in === "TV Horror" || film.listed_in === "Horror Movies"))
    let tvshows = record.filter(film => (film.type === "TV Show")).sort(() => Math.random() - 0.5);
    let movie = record.filter(film => (film.type === 'Movie')).sort(() => Math.random() - 0.5);
    let r = record.filter(film => (film.rating === "R"))
    let tvma = record.filter(film => (film.rating === "TV-MA"));
    let tv14 = record.filter(film => (film.rating === "TV-14"));
    let tvpg = record.filter(film => (film.rating === "TV-PG"));
    let pg13 = record.filter(film => (film.rating === "PG-13"));
    let comedy = record.filter(film => (film.listed_in.includes("Comedies") || film.listed_in.includes("TV Comedies")))
    let crime = record.filter(film => (film.listed_in === "Crime TV Shows" || film.listed_in === "Crime"))
    let action = record.filter(film => (film.listed_in === "Action & Adventure"))
    let anime = record.filter(film => (film.listed_in.includes("Anime Series") || film.listed_in.includes("Anime Features") ))
    let oldest = record.sort((a, b) => (a.release_year > b.release_year) ? 1 : -1);
    let latest = record.sort((a, b) => (a.release_year < b.release_year) ? 1 : -1);

    const [category, setCategory] = useState(movie)
    const [header, setHeader] = useState('All Movies')
    const [selected, setSelected] = useState('movie')

    const [filterMenu, setFilterMenu] = useState(false);

    const handleMenu = () => {
        setFilterMenu(!filterMenu);
    }

    const handleCategory = (e) => {
        setCategory(e);
        if(e === movie){
            setHeader('All Movies')
            setSelected('movie')
        } else if(e === tvshows){
            setHeader('All TV Shows')
            setSelected('tvshows')
        } else if(e === r){
            setHeader('R Rated')
            setSelected('r')
        } else if(e === tvma){
            setHeader('TV-MA Rated')
            setSelected('tvma')
        } else if(e === tv14){
            setHeader('TV-14 Rated')
            setSelected('tv14')
        } else if(e === tvpg){
            setHeader('TV-PG Rated')
            setSelected('tvpg')
        } else if(e === pg13){
            setHeader('PG-13 Rated')
            setSelected('pg13')
        } else if(e === comedy){
            setHeader('Comedy')
            setSelected('comedy')
        } else if(e === crime){
            setHeader('Crime')
            setSelected('crime')
        } else if(e === children){
            setHeader('Children & Family Movies')
            setSelected('children')
        } else if(e === action){
            setHeader('Action & Adventure')
            setSelected('action')
        } else if(e === anime){
            setHeader('Anime')
            setSelected('anime')
        } else if(e === horror){
            setHeader('Horror')
            setSelected('horror')
        }
    }

    const [showComponent, setShowComponent] = useState(false);
    
    useEffect(() => {
        setShowComponent(true);
    },[])


    return (
        <>
            <Head>
                <title>Spot — Library</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
            </Head>

            <div className={styles.main} style={{maxHeight:'100vh'}} id='main'>

                <Navigation />

                <div className={styles.librarylayout}>

                <div className={styles.sidemenucont} id='sidemenu'>
                    <div id='sidebar'className={filterMenu ? `${styles.mobilesidemenu}` : `${styles.sidemenu}`}>
                        
                        <ul>
                            <li style={{cursor:'not-allowed', marginTop:'0rem'}}>Movies</li>
                            <ul>
                                <li className={selected === 'movie' ? `${styles.selected}` : `${styles.not}`} onClick={() => handleCategory(movie)}>All Movies</li>
                                <li className={selected === 'r' ? `${styles.selected}` : `${styles.not}`} onClick={() => handleCategory(r)}>R-Rated</li>
                            </ul>
                            <li style={{cursor:'not-allowed'}}>TV Shows</li>  
                            <ul>
                                <li className={selected === 'tvshows' ? `${styles.selected}` : `${styles.not}`} onClick={() => handleCategory(tvshows)}>All TV Shows</li>
                                <li className={selected === 'tvma' ? `${styles.selected}` : '' }  onClick={() => handleCategory(tvma)}>TV—MA</li>
                                <li className={selected === 'tv14' ? `${styles.selected}` : '' } onClick={() => handleCategory(tv14)}>TV—14</li>
                                <li className={selected === 'tvpg' ? `${styles.selected}` : '' } onClick={() => handleCategory(tvpg)}>TV—PG</li>
                                <li className={selected === 'pg13' ? `${styles.selected}` : '' } onClick={() => handleCategory(pg13)}>PG—13</li>
                            </ul>
                            {/* <li style={{cursor:'not-allowed'}}>Alphabetical (A—Z)</li>
                            <ul>
                                <li>A — Z</li>
                                <li>Z — A</li>
                            </ul> */}

                            <li style={{cursor:'not-allowed'}}>Genres</li>
                                <ul>
                                    <li className={selected === 'action' ? `${styles.selected}` : '' }  onClick={() => handleCategory(action)}>Action & Thrillers</li>
                                    <li className={selected === 'anime' ? `${styles.selected}` : '' } onClick={() => handleCategory(anime)}>Anime</li>
                                    <li className={selected === 'children' ? `${styles.selected}` : '' } onClick={() => handleCategory(children)}>Children & Family</li>
                                    <li className={selected === 'comedy' ? `${styles.selected}` : '' }  onClick={() => handleCategory(comedy)}>Comedy</li>
                                    <li className={selected === 'crime' ? `${styles.selected}` : '' } onClick={() => handleCategory(crime)}>Crime</li>
                                    <li className={selected === 'horror' ? `${styles.selected}` : '' } onClick={() => handleCategory(horror)}>Horror</li>
                                </ul>
                            {/* <li style={{cursor:'not-allowed'}}>Release Year</li>
                            <ul>
                                <li onClick={() => handleCategory(latest)}>Latest</li>
                                <li onClick={() => handleCategory(oldest)}>Oldest</li>
                            </ul> */}


                        </ul>
                    </div>
                </div>

                <div className={styles.scrollablecont}>
                    <div className={styles.scrollablecontchild}>
                    <img className={styles.sorting} onClick={handleMenu} src='/sorting.svg'></img> 
                    <div className={styles.categoryinfo}>
                        <h1 className={styles.vertihead} id='categorytitle'>{header}</h1> 
                        <h3 className={styles.vertilength}>{category.length} items</h3>
                    </div>
                    </div>

                <div className={styles.vertiscroll}>

                {showComponent && [...category].map((item,index) => (
                    <div className={styles.librarycont} key={index} style={{backgroundImage:`linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.6)), url('${item.imageurl}')`}}>
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
                    {/* { category === 'All Movies' ? <Tvshow/> : <Tvshow/>} */}
                    
                </div>

            </div>
        </>
    )
}