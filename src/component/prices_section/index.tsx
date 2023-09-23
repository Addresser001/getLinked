import './styles.scss'
import { IO } from '../../animation/observe';
import { useEffect } from 'react'
import gsap from 'gsap';


const loadPriceAnimation = () => {
  const positions = document.querySelector('.positions');
  const position1 = document.querySelector('#position1');
  const position2 = document.querySelector('#position2');
  const position3 = document.querySelector('#position3');
  gsap.set([position1, position2, position3], {
    opacity: 0,
    y: 40,
  })
  IO(positions, {
    threshold: 1,
  }).then(() => {
    gsap.to([position3, position2, position1], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.5,
      ease: 'easeOut',
    });
  });
}
const PricesAndReward = () => {

  useEffect(() => {
    loadPriceAnimation()
  }, [])

  return (
    <section className="price_section">
      <div className='header_mobile'>
        <h3 className="section_heading" data-animation='header'>
          Prizes and
          <span> Rewards</span>
        </h3>
        <p className="section_paragraph" data-animation='paragraph'>Highlight of the prizes or rewards for winners and for participants.</p>
      </div>
      <div className="image_wrapper" data-animation='reveal'>
        <img src="/images/win-cup.png" alt="cup" />
      </div>
      <div className="content">
        <h3 className="section_heading" data-animation='header'>
          Prizes and
          <span> Rewards</span>
        </h3>
        <p className="section_paragraph" data-animation='paragraph'>Highlight of the prizes or rewards for winners and for participants.</p>
        <div className="positions">
          <div id='position2' className="position">
            <img src="/images/silver_medal.png" alt="silver medal" />
            <div className='details'>
              <span>2nd</span>
              <span>Runner</span>
              <span>N300,000</span>
            </div>
          </div>
          <div id='position1' className="position">
            <img src="/images/gold_medal.png" alt="gold medal" />
            <div className='details'>
              <span>1st</span>
              <span>Runner</span>
              <span>N400,000</span>
            </div>
          </div>
          <div id='position3' className="position">
            <img src="/images/bronze_medal.png" alt="bronze medal" />
            <div className='details'>
              <span>3rd</span>
              <span>Runner</span>
              <span>N150,000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricesAndReward;