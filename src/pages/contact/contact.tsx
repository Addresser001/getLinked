import './styles.scss';
import { instagram, X, facebook, linkedIn, back_icon } from '../../assets/svg';
import CustomInput from '../../component/forms/Input';
import TextArea from '../../component/forms/TextArea';
const ContactPage = () => {
  return (
    <div className='contact_page'>
      <div className='sub_container'>
        <div className='background_beem_left'></div>
        <div className='background_beem_right'></div>
        <div className='text_section'>
          <img src='/images/star_1.png' className='star_1' />
          <div className='text'>
            <h1>Get in touch</h1>
            <p>
              Contact <br />
              Information
            </p>
            <p>
              27,Alara Street
              <br />
              Yaba 100012
              <br />
              Lagos State
            </p>
            <p>Call Us : 07067981819</p>

            <p>
              we are open from Monday-Friday
              <br />
              08:00am - 05:00pm
            </p>
            <div className='social_media_handles'>
              <h4>Share on</h4>
              <div className='icons'>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  {instagram}
                </a>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  {X}
                </a>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  {facebook}
                </a>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  {linkedIn}
                </a>
              </div>
            </div>
          </div>
          <img src='/images/star_3.png' className='star_3' />
        </div>
        <div className='form_section'>
          <img src='/images/star_2.png' className='star_2_2' />
          <div className='header_container'>
            <a href='#' className='mobile_back_btn'>
              {back_icon}
            </a>
            <h4 className='contact_sub_header'>
              Questions or need assistance? <br />
              Let us know about it!
            </h4>
            <p className='email_us_below'>
              Email us below to any question related to our event
            </p>{' '}
          </div>

          <div className='contact_form_container'>
            <CustomInput
              placeholder='First Name'
              type='text'
              className='contact_input_fill'
            />
            <CustomInput
              placeholder='Mail'
              type='email'
              className='contact_input_fill'
            />
            <TextArea
              placeholder='Message'
              className='message_input_fill contact_input_fill'
            />
            <div className='submit_btn_container'>
              <button className='submit_btn'>Submit</button>
            </div>
          </div>

          <img src='/images/star_5.png' className='star_5' />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
