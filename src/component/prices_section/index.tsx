import './styles.scss'
const PricesAndReward = () => {
  return (
    <section className="price_section">
      <div className="image_wrapper">
        <img src="/images/win-cup.png" alt="cup" />
      </div>
      <div className="content">
        <h3 className="section_heading">
          Prizes and
          <span> Rewards</span>
        </h3>
        <p className="section_paragraph">Highlight of the prizes or rewards for winners and for participants.</p>
        <div className="positions">
          <div className="position">
            <img src="/images/silver_medal.png" alt="" />
            <div className='details'>
              <span>2nd</span>
              <span>Runner</span>
              <span>N300,000</span>
            </div>
          </div>
          <div className="position">
            <img src="/images/gold_medal.png" alt="" />
            <div className='details'>
              <span>1st</span>
              <span>Runner</span>
              <span>N400,000</span>
            </div>
          </div>
          <div className="position">
            <img src="/images/bronze_medal.png" alt="" />
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