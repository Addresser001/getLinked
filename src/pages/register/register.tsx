import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik, FormikHelpers } from 'formik';
import { apiRegistrationData, singleCartigoryType } from '../../utils/types';
import {
  notificationVariant,
  notificationVariant2,
  validatePhone,
} from '../../utils/helpers';
import CongratulationModal from '../../component/congratulation_modal/congratulation';
import CustomInput from '../../component/forms/Input';
import CustomSelect from '../../component/forms/select';
import CustomCheckBox from '../../component/forms/checkBox';
import Services from '../../api/services';
import { AnimatePresence, motion } from 'framer-motion';

import './styles.scss';
const RegisterPage = () => {
  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (
    values: apiRegistrationData,
    formikHelpers: FormikHelpers<apiRegistrationData>
  ) => {
    if (loading) return;
    setSuccessMessage(false);
    setErrorMessage(null);
    try {
      setLoading(true);

      await Services.registerUser(values);

      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 4000);

      formikHelpers.resetForm();
    } catch (err: any) {
      setLoading(false);
      console.log(err.response.data.email[0]);
      if (err.response.data.email[0] != null) {
        setErrorMessage(err.response.data.email[0]);
      } else {
        setErrorMessage('An error occured, Please Try again.');
      }
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik<apiRegistrationData>({
    initialValues: {
      email: '',
      team_name: '',
      phone_number: '',
      group_size: 0,
      project_topic: '',
      category: '',
      privacy_poclicy_accepted: false,
    },
    validateOnChange: true,
    validationSchema: Yup.object().shape({
      team_name: Yup.string().min(3).required().label('Team name'),
      email: Yup.string().required().email().label('Email'),
      phone_number: Yup.number().test(
        'valid-phone',
        'Phone number is not valid',
        validatePhone
      ),
      category: Yup.string().required().label('Category'),
      group_size: Yup.number().min(1).required().label('Group size'),
      project_topic: Yup.string().min(3).required().label('Project topic'),
      privacy_poclicy_accepted: Yup.bool().oneOf(
        [true],
        'You need to accept the privacy policy'
      ),
    }),
    onSubmit,
  });

  const [categoryList, setCategoryList] = useState<
    singleCartigoryType[] | null
  >(null);
  const loadCategories = async () => {
    try {
      const res = await Services.getCategoryList();
      let categoties: singleCartigoryType[] = res.data;
      setCategoryList(categoties);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <div className='register_page'>
        {successMessage && <CongratulationModal />}
        <div className='sub_container'>
          {/* <div className='background_beem_left'></div> */}
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

            <AnimatePresence>
              {errorMessage && (
                <motion.div
                  variants={notificationVariant2}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  className={`notification  ${errorMessage ? 'error' : ''}`}
                >
                  <small>{successMessage}</small>
                  <small>{errorMessage}</small>
                </motion.div>
              )}
            </AnimatePresence>

            <form
              className='form'
              onSubmit={(e) => {
                e.preventDefault();
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
                    name='team_name'
                    onChange={handleChange('team_name')}
                    errorVisible={touched['team_name']}
                    errorMessage={errors['team_name']}
                    onBlur={handleBlur('team_name')}
                    value={values.team_name}
                  />
                  <CustomInput
                    className='register_input_fill'
                    label='Email'
                    placeholder='Enter your email address'
                    type='email'
                    name='email'
                    onChange={handleChange('email')}
                    errorVisible={touched['email']}
                    errorMessage={errors['email']}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  <CustomSelect
                    className='register_input_fill'
                    label='Category'
                    placeholder='Select your category'
                    errorVisible={touched['category']}
                    errorMessage={errors['category']}
                    onBlur={handleBlur('category')}
                    value={values.category}
                    onChange={handleChange('category')}
                  >
                    {categoryList?.map((cat) => {
                      const { id, name } = cat;
                      return (
                        <option
                          key={id}
                          value={id}
                          className='category_options'
                        >
                          {name}
                        </option>
                      );
                    })}
                  </CustomSelect>
                </div>
                <div className='form_input_sub_container'>
                  <CustomInput
                    className='register_input_fill'
                    label='Phone'
                    placeholder='Enter your phone number'
                    type='number'
                    name='phone_number'
                    onChange={handleChange('phone_number')}
                    errorVisible={touched['phone_number']}
                    errorMessage={errors['phone_number']}
                    onBlur={handleBlur('phone_number')}
                    value={values.phone_number}
                  />
                  <CustomInput
                    className='register_input_fill'
                    label='Project Topic'
                    placeholder='What is your group project topic'
                    type='text'
                    name='project_topic'
                    onChange={handleChange('project_topic')}
                    errorVisible={touched['project_topic']}
                    errorMessage={errors['project_topic']}
                    onBlur={handleBlur('project_topic')}
                    value={values.project_topic}
                  />
                  <CustomInput
                    className='register_input_fill'
                    label='Group Size'
                    placeholder='Select'
                    type='number'
                    name='group_size'
                    onChange={handleChange('group_size')}
                    errorVisible={touched['group_size']}
                    errorMessage={errors['group_size']}
                    onBlur={handleBlur('group_size')}
                    value={values.group_size}
                  />
                </div>
              </div>
              <p className='please_review_your_registration'>
                Please review your registration details before submitting
              </p>
              <CustomCheckBox
                label='I agreed with the event terms and conditions and privacy
                  policy'
                onChange={handleChange('privacy_poclicy_accepted')}
                errorVisible={touched['privacy_poclicy_accepted']}
                errorMessage={errors['privacy_poclicy_accepted']}
              />
              <button
                className='register_now_btn'
                disabled={loading}
                onClick={() => handleSubmit()}
              >
                {loading ? (
                  <div className='loader' />
                ) : (
                  <span>Register Now</span>
                )}
              </button>
            </form>

            <img src='/images/star_4.png' className='star_4' />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
