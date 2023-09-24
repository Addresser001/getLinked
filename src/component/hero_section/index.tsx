import { bendLine } from '../../assets/svg';
import './styles.scss';

const HeroSection = () => {
  return (
    <section className='hero_section'>
      <div className='top_text'>
        <span>Igniting a Revolution in HR Innovation</span>
        {bendLine}
      </div>
      <div className='hero_content'>
        <div className='content'>
          <h1>
            getlinked Tech Hackathon <span>1.0</span>
          </h1>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <button>Register</button>
          <div className='count_down'>
            <span>
              00<small>H</small>
            </span>
            <span>
              00<small>M</small>
            </span>
            <span>
              00<small>S</small>
            </span>
          </div>
        </div>
        <div className='hero_image'>
          <img
            src='/images/man-wearing-smart-glasses.png'
            alt='man wearing smart glasses'
          />
        </div>
      </div>

      <div className='stars_constainer'>
        <img className='star4' src='/images/star_4.png' alt='' />
        <img className='star1' src='/images/star_1.png' alt='' />
        <img className='star2' src='/images/star_2.png' alt='' />
        <img className='star3' src='/images/star_3.png' alt='' />
        <img className='star5' src='/images/star_4.png' alt='' />
      </div>
    </section>
  );
};

export default HeroSection;
