import './styles.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { notificationVariant2 } from '../../utils/helpers';

const CongratulationModal = () => {
  return (
    <AnimatePresence>
      <motion.div
        className='congratulation_modal'
        variants={notificationVariant2}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className='congratulation_modal_sub_container'>
          <div className='successful_image_container'>
            <img
              src='/images/successfully_done.png'
              alt=''
              className='successfully_done_image'
            />
            <img
              src='/images/successful_man.png'
              alt=''
              className='successful_man_image'
            />
          </div>

          <div className='text_container'>
            <h2>
              Congratulations
              <br />
              you have successfully Registered!
            </h2>

            <div className='yes_it_was_easy'>
              <p>
                Yes, it was easy and you did it!
                <br />
                check your mail box for next step
              </p>
              <img src='/images/congratulation_modal_emoji.png' alt='' />
            </div>
          </div>

          <button className='back_btn'>Back</button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CongratulationModal;
