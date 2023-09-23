import { useEffect, useRef, useState } from 'react';
import { bendLine } from '../../assets/svg';
import './styles.scss'
import Countdown from 'react-countdown'
import { useHistory } from 'react-router-dom';
import { heroanimation } from '../../animation/animations';

const HeroSection = () => {
  const [countdownComplete, setCountdownComplete] = useState<boolean>(false)
  const history = useHistory();
  const effectRan = useRef(false);
  useEffect(() => {
    if (!effectRan.current) {
      heroanimation()
    }
    return () => { effectRan.current = true };
  }, []);
  return (
    <section className='hero_section'>
      <div className='top_text'>
        <span id='heroanim1' >Igniting a Revolution in HR Innovation</span>
        {bendLine}
      </div>
      <div className='hero_content'>
        <div className='content'>
          <img src="/images/bulb.png" className='bulb-img' alt="bulb" />
          <img src="/images/chain.png" className="chain-img" alt="" />
          <img src="/images/strike.png" className='strike-img' alt="" />

          <h1 id='heroanim2'>getlinked Tech Hackathon <span>1.0</span>
          </h1>
          <p id='heroanim3'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
          <button id='heroanim5' onClick={() => history.push("/register")}>Register</button>
          {!countdownComplete && <Countdown
            onComplete={() => setCountdownComplete(true)}
            date='2023-09-26T01:02:03'
            renderer={({ days, hours, minutes, seconds }) => <div id='heroanim6' className='count_down'>
              <span>{days}<small>D</small></span>
              <span>{hours}<small>H</small></span>
              <span>{minutes}<small>M</small></span>
              <span>{seconds}<small>S</small></span>
            </div>
            }
          />}

        </div>
        <div className='hero_image' id='heroanim4'>
          <img className='particle_image' src="/images/hero-image-2.png" alt="man wearing smart glasses" />
          <img src="/images/man-wearing-smart-glasses.png" alt="man wearing smart glasses" />
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
