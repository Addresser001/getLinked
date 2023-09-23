import './styles.scss'
const FAQSection = () => {
  return (
    <section id='faq' className="faq_section">

      <div className="content">
        <h3 className='section_heading' data-animation='header'>
          Frequently Ask
          <span> Question</span>
        </h3>
        <p data-animation='paragraph' className='section_paragraph'>We got answers to the questions that you might
          want to ask about getlinked Hackathon 1.0</p>
        <div className='faq_questions'>
          <div className='single_faq' data-animation='reveal'>
            <span>Can I work on a project I started before the hackathon?</span>
            <img src="/images/plus-icon.png" alt="add" />
          </div>
          <div className='single_faq' data-animation='reveal'>
            <span>What happens if I need help during the hackathon?</span>
            <img src="/images/plus-icon.png" alt="add" />
          </div>
          <div className='single_faq' data-animation='reveal'>
            <span>What happens if I don't have an idea for a project?</span>
            <img src="/images/plus-icon.png" alt="add" />
          </div>
          <div className='single_faq' data-animation='reveal'>
            <span>Can I join a team or do I have to come with one?</span>
            <img src="/images/plus-icon.png" alt="add" />
          </div>
          <div className='single_faq' data-animation='reveal'>
            <span>What happens after the hackathon ends</span>
            <img src="/images/plus-icon.png" alt="add" />
          </div>
          <div className='single_faq' data-animation='reveal'>
            <span>Can I work on a project I started before the hackathon?</span>
            <img src="/images/plus-icon.png" alt="add" />
          </div>
        </div>
      </div>
      <div className="image_wrapper">
        <img src="/images/faq-side-image.png" alt="questions" />
      </div>
    </section>
  );
}

export default FAQSection;