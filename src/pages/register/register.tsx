import CongratulationModal from '../../component/congratulation_modal/congratulation';
import CustomInput from '../../component/forms/Input';
import './styles.scss';
import { useFormik } from 'formik';
const RegisterPage = () => {
  const {
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    errors,
    handleReset,
  } = useFormik({
    initialValues: {
      last_name: '',
      first_name: '',
      phone_no: '',
      email: '',
      password: '',
      password_confirmation: '',
      type: 'user',
    },
    // validationSchema: validationSchema,

    onSubmit: async () => {
      try {
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <>
      <div className='register_page'>
        {/* <CongratulationModal /> */}
        <div className='sub_container'>
          <div className='background_beem_left'></div>
          <div className='background_beem_right'></div>

          <div className='image_section'>
            <img src='/images/star_1.png' className='star_1' />
            <h1 className='register_header_mobile'>Register</h1>
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

            <form
              className='form'
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              {' '}
              <div className='form_input_container'>
                <div className='form_input_sub_container'>
                  <CustomInput
                    className='register_input_fill'
                    label="Team's Name"
                    placeholder='Enter the name of your group'
                    type='text'
                  />
                  <CustomInput
                    className='register_input_fill'
                    label='Email'
                    placeholder='Enter your email address'
                    type='email'
                  />
                  <CustomInput
                    className='register_input_fill'
                    label='Category'
                    placeholder='Select your category'
                    type='text'
                  />
                </div>
                <div className='form_input_sub_container'>
                  <CustomInput
                    className='register_input_fill'
                    label='Phone'
                    placeholder='Enter your phone number'
                    type='number'
                  />
                  <CustomInput
                    className='register_input_fill'
                    label='Project Topic'
                    placeholder='What is your group project topic'
                    type='text'
                  />
                  <CustomInput
                    className='register_input_fill'
                    label='Group Size'
                    placeholder='Select'
                    type='text'
                  />
                </div>
              </div>
              <p className='please_review_your_registration'>
                Please review your registration details before submitting
              </p>
              <div className='check_box_contianer'>
                <input type='checkbox' className='checkbox' />{' '}
                <span className='i_agreed_with_the_event_terms'>
                  I agreed with the event terms and conditions and privacy
                  policy
                </span>
              </div>
              <button className='register_now_btn'>Register Now</button>
            </form>

            <img src='/images/star_4.png' className='star_4' />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
