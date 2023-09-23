import './styles.scss';
import { useState } from 'react'
import { instagram, X, facebook, linkedIn, back_icon } from '../../assets/svg';
import CustomInput from '../../component/forms/Input';
import TextArea from '../../component/forms/TextArea';
import * as Yup from 'yup';
import { useFormik, FormikHelpers } from 'formik';
import { apiContactData } from '../../utils/types';
import { notificationVariant2, validatePhone } from '../../utils/helpers';
import Services from '../../api/services';
import { AnimatePresence, motion } from 'framer-motion';


const ContactPage = () => {

  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async (values: apiContactData, formikHelpers: FormikHelpers<apiContactData>) => {
    if (loading) return;
    setSuccessMessage(null)
    setErrorMessage(null)
    try {
      setLoading(true);

      await Services.userContact(values)

      setSuccessMessage("Thanks for reaching out!");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 2000);

      formikHelpers.resetForm()
    } catch (err) {
      setLoading(false);
      setErrorMessage("An error occured, Please Try again.");
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
    }
    finally {
      setLoading(false)
    }

  };


  const { handleChange, handleBlur, handleSubmit, values, errors, touched, } = useFormik<apiContactData>({
    initialValues: {
      email: "",
      first_name: "",
      phone_number: "",
      message: ""
    },
    validateOnChange: true,
    validationSchema: Yup.object().shape({
      first_name: Yup.string().min(3).required().label('Full Name'),
      email: Yup.string().required().email().label("Email"),
      phone_number: Yup.number().test("valid-phone", "Phone number is not valid", validatePhone),
      message: Yup.string().min(3).required().label('Message'),
    }),
    onSubmit,
  });
  return (
    <main className='contact_page'>
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

          <AnimatePresence>
            {(successMessage || errorMessage) &&
              <motion.div
                variants={notificationVariant2}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`notification ${successMessage ? "success" : ""} ${errorMessage ? "error" : ""}`}>
                <small>{successMessage}</small>
                <small>{errorMessage}</small>
              </motion.div>
            }
          </AnimatePresence>

          <div className='contact_form_container'>
            <CustomInput
              className='mt-42'
              placeholder="First Name"
              onChange={handleChange('first_name')}
              errorVisible={touched['first_name']}
              errorMessage={errors['first_name']}
              onBlur={handleBlur('full_name')}
              value={values.first_name}
              name='full name'
            />
            <CustomInput
              className='mt-42'
              placeholder="Mail"
              onChange={handleChange('email')}
              errorVisible={touched['email']}
              errorMessage={errors['email']}
              onBlur={handleBlur('email')}
              value={values.email}
              name='email'
              type='email'
            />
            <CustomInput
              className='mt-42'
              type="number"
              placeholder="Phone number"
              onChange={handleChange('phone_number')}
              errorVisible={touched['phone_number']}
              errorMessage={errors['phone_number']}
              onBlur={handleBlur('phone_number')}
              value={values.phone_number}
              name="phone"
            />

            <TextArea
              name='message'
              placeholder='Message'
              className='mt-42'
              onChange={handleChange('message')}
              errorVisible={touched['message']}
              errorMessage={errors['message']}
              onBlur={handleBlur('message')}
              value={values.message}
            />
            <div className='submit_btn_container'>
              <button disabled={loading} onClick={() => handleSubmit()}>{loading ? <div className="loader" /> : <span>Submit</span>}</button>
            </div>
          </div>

          <img src='/images/star_5.png' className='star_5' />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
