import './styles.scss';
const FAQSection = () => {
  return (
    <section className='faq_section'>
      <div className='stars_constainer'>
        <img className='star4' src='/images/star_4.png' alt='' />
        <img className='star1' src='/images/star_1.png' alt='' />
        <img className='star2' src='/images/star_2.png' alt='' />
      </div>

      <div className='content'>
        <h3 className='section_heading'>
          Frequently Ask
          <span> Question</span>
        </h3>
        <p className='section_paragraph'>
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        <div className='faq_questions'>
          <div className='single_faq'>
            <span>Can I work on a project I started before the hackathon?</span>
            <img src='/images/plus-icon.png' alt='' />
          </div>
          <div className='single_faq'>
            <span>Can I work on a project I started before the hackathon?</span>
            <img src='/images/plus-icon.png' alt='' />
          </div>
          <div className='single_faq'>
            <span>Can I work on a project I started before the hackathon?</span>
            <img src='/images/plus-icon.png' alt='' />
          </div>
          <div className='single_faq'>
            <span>Can I work on a project I started before the hackathon?</span>
            <img src='/images/plus-icon.png' alt='' />
          </div>
          <div className='single_faq'>
            <span>Can I work on a project I started before the hackathon?</span>
            <img src='/images/plus-icon.png' alt='' />
          </div>
          <div className='single_faq'>
            <span>Can I work on a project I started before the hackathon?</span>
            <img src='/images/plus-icon.png' alt='' />
          </div>
          <div className='single_faq'>
            <span>Can I work on a project I started before the hackathon?</span>
            <img src='/images/plus-icon.png' alt='' />
          </div>
        </div>
      </div>
      <div className='image_wrapper'>
        <img src='/images/faq-side-image.png' alt='questions' />
      </div>
    </section>
  );
};

export default FAQSection;
