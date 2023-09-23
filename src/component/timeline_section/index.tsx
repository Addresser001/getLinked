import { timlines } from '../../utils/data';
import './styles.scss'
import TimelineMobile from './timeline_mobile';

const TimelineSection = () => {
  return (
    <section id='timeline' className='timeline_section'>
      <h3 className='section_heading' data-animation='header'>Timeline</h3>
      <p className='section_paragraph' data-animation='paragraph'>Here is the breakdown of the time we anticipate
        using for the upcoming event.
      </p>
      <TimelineMobile />
      <div className='timeline_wrapper'>
        {timlines.map(({ date, description, title }, idx) => {
          let even = (idx + 1) % 2 === 0
          return <div key={idx} className='single_timeline'>
            {!even && <div className="left_side details">
              <span>{title}</span>
              <span>{description}</span>
            </div>}
            {even && <div className='left_side date'>
              <span>{date}</span>
            </div>}
            <div className='center'>
              <div className='line' />
              <div className='number'>{idx + 1}</div>
            </div>
            {!even && <div className='date'>
              <span>{date}</span>
            </div>}
            {even && <div className="details">
              <span>{title}</span>
              <span>{description}</span>
            </div>}
          </div>
        })}
      </div>
    </section>
  );
}

export default TimelineSection;