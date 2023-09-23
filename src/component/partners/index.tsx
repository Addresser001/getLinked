import './styles.scss';
const PartnerSection = () => {
  return (
    <section className='partners_section'>
      <h3 className='section_heading' data-animation='header'>Partners and Sponsors</h3>
      <p className='section_paragraph' data-animation='paragraph'>
        Getlinked Hackathon 1.0 is honored to have the following major
        companies as its partners and sponsors
      </p>
      <div className='partners_wrapper'>
        <div className='partners'>
          <div className='partner bottom right'>
            <img src='/images/company-logo-1.png' alt='company logo' />
          </div>
          <div className='partner bottom'>
            <img src='/images/company-logo-2.png' alt='company logo' />
          </div>
          <div className='partner left bottom'>
            <img src='/images/company-logo-3.png' alt='company logo' />
          </div>
          <div className='partner'>
            <img src='/images/company-logo-4.png' alt='company logo' />
          </div>
          <div className='partner left'>
            <img src='/images/company-logo-5.png' alt='company logo' />
          </div>
          <div className='partner left'>
            <img src='/images/company-logo-6.png' alt='company logo' />
          </div>
        </div>
      </div>


    </section>
  );
};

export default PartnerSection;
