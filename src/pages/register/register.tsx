import CustomInput from '../../forms/Input';
import './styles.scss';
const RegisterPage = () => {
  return (
    <div className='register_page'>
      <div className='sub_container'>
        <div className='background_beem_left'></div>

        <div className='image_section'>
          <img src='/images/star_1.png' className='star_1' />
          <img
            src='/images/register_page_side_image.png'
            className='register_page_side_image'
          />
          <img src='/images/star_3.png' className='star_3' />
          <img src='/images/star_2.png' className='star_2' />
        </div>
        <div className='form_section'>
          <img src='/images/star_2.png' className='star_2_2' />
          <div className='header_container'>
            <h1 className='register_header'>Register</h1>

            <div className='be_part_of_this_movement'>
              <div className='image_container'>
                <img src='/images/register_human_image_1.png' alt='' />
                <img src='/images/register_human_image_2.png' alt='' />
              </div>
              <p className='text'>
                Be part of this movement! <span></span>
              </p>
            </div>

            <h2 className='create_your_account_text'>CREATE YOUR ACCOUNT</h2>
          </div>

          <CustomInput />

          <img src='/images/star_4.png' className='star_4' />
        </div>
      </div>
      <div className='background_beem_right'></div>
    </div>
  );
};

export default RegisterPage;
