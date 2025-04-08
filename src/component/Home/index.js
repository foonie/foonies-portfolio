import { useEffect, useState } from 'react'
import './index.scss'
import LogoTitle from '../../assets/images/logo-f.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'o' , 'n', 'i', 'e',]
    const jobArray = [
        'A',' ', 'F','r','o','n','t','e','n','d',' ','D','e','v','e','l','o','p','e','r','.',]  

    return(
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>    
                <span className={`${letterClass} _12`}>i,</span>    
                <br/>
                <span className={`${letterClass} _13`}>I</span>    
                <span className={`${letterClass} _14`}>'m</span>    

                <img className='mylogo' src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClasss={letterClass} 
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClasss={letterClass} 
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Frontend Developer / Wordpress Developer / PHP / React Js </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        < Loader type="pacman" />
        </>
    )
}

export default Home