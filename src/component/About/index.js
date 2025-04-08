import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'


const About = () => {
    return (
        <>
        <div className = "container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>
                I'm an ambitious front-end developer looking for a role in an established IT 
                company where I can use the latest technologies on challenging and diverse projects.
                I'm quite confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                </p>
                <p>
                Demonstrated excellent skills in HTML, JavaScript, and PHP. Organized and dependable candidate, successful at managing multiple priorities with a positive attitude. Capable of taking on added responsibilities to meet team goals. I am presentable and easy to approach, and I like creating a trustworthy relationship with those I work closely with.
                </p>
                <p>
                Besides being a passionate developer, I am a great cook, I love playing around with flavors and trying out new dishes for my family. While I am not cooking, I am probably baking or trying to learn a new fun skill. I love being creative, I think anything I work with must look good and presentable; hence, even with my code and food, I do my best to serve people something appealing that will put a smile on their faces.

                </p>

            </div>

            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
          </div>
        </div>
        < Loader type="pacman" />
        </>
    )
}

export default About