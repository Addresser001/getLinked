import { checkIcon, guardIcon } from '../../assets/svg';
import './styles.scss'
const PrivacyPolicy = () => {
  return (
    <section className="terms_section">
      <div className='content'>
        <h3 className="section_heading">Privacy Policy and <span>Terms</span></h3>
        <p className="section_paragraph last_updated">Last updated on September 12, 2023</p>
        <p className="section_paragraph">Below are our privacy & policy, which outline a lot of goodies.
          it’s our aim to always take of our participant</p>
        <div className="terms_wrapper">
          <p className="section_paragraph">At getlinked tech Hackathon 1.0, we value your privacy
            and are committed to protecting your personal information.
            This Privacy Policy outlines how we collect, use, disclose,
            and safeguard your data when you participate in our tech
            hackathon event. By participating in our event, you consent
            to the practices described in this policy.
          </p>
          <span>Licensing Policy</span>
          <p className="section_paragraph terms_heading">Here are terms of our Standard License:</p>
          <div className='privacy_list'>
            <div>
              {checkIcon}
              <span>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </span>
            </div>
            <div>
              {checkIcon}
              <span>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </span>
            </div>
          </div>
          <div className='button_wrapper'>

            <button>Read More</button>
          </div>
        </div>
      </div>
      <div className='image_wrapper'>
        <img src="/images/privacy.png" alt="" />
      </div>
    </section>
  );
}

export default PrivacyPolicy;