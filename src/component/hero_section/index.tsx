import { bendLine } from '../../assets/svg';
import './styles.scss'

const HeroSection = () => {
  return (
    <section className="hero_section">

      <div className='top_text'>
        <span>Igniting a Revolution in HR Innovation</span>
        {bendLine}
      </div>
      <div className='hero_content'>
        <div className='content'>

          <h1>getlinked Tech Hackathon <span>1.0</span></h1>
          <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
          <button>Register</button>
          <div className='count_down'>
            <span>00<small>H</small></span>
            <span>00<small>M</small></span>
            <span>00<small>S</small></span>
          </div>
        </div>
        <div className='hero_image'>
          <img src="/images/man-wearing-smart-glasses.png" alt="man wearing smart glasses" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;