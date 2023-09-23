import './styles.scss'
const RulesAndGuideLines = () => {
  return (
    <section className="rules_section">

      <div className="content">
        <h3 className='section_heading' data-animation='header'>
          Rules and
          <span> Guidelines</span>
        </h3>
        <p data-animation='paragraph'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
          clear as day: to shape the future. Whether you're a coding genius, a
          design maverick, or a concept wizard, you'll have the chance to transform
          your ideas into reality. Solving real-world problems, pushing the boundaries
          of technology, and creating solutions that can change the world,
          that's what we're all about!</p>
      </div>
      <div className="image_wrapper" data-animation='reveal'>
        <img src="/images/girl-siting.png" alt="girl-siting" />
      </div>
    </section>
  );
}

export default RulesAndGuideLines;