import './styles.scss';
const PartnerSection = () => {
  return (
    <section className='partners_section'>
      <h3 className='section_heading'>Partners and Sponsors</h3>
      <p className='section_paragraph'>
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
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

      <div className='stars_constainer'>
        <img className='star4' src='/images/star_4.png' alt='' />
        <img className='star1' src='/images/star_1.png' alt='' />
        <img className='star2' src='/images/star_2.png' alt='' />
      </div>
    </section>
  );
};

export default PartnerSection;
