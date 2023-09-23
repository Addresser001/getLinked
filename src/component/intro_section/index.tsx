import './styles.scss'
const IntroSection = () => {
  return (
    <section id='overview' className="intro_section">
      <div className="image_wrapper" data-animation='reveal'>
        <img src="/images/the-big-idea.png" alt="the big idea" />
      </div>
      <div className="content">
        <h3 className='section_heading' data-animation="header">
          Introduction to getlinked
          <span> tech Hackathon 1.0</span>
        </h3>
        <p className='section_paragraph' data-animation="paragraph">Our tech hackathon is a melting pot of visionaries, and its purpose is as
          clear as day: to shape the future. Whether you're a coding genius, a
          design maverick, or a concept wizard, you'll have the chance to transform
          your ideas into reality. Solving real-world problems, pushing the boundaries
          of technology, and creating solutions that can change the world,
          that's what we're all about!</p>
      </div>
    </section>
  );
}

export default IntroSection;