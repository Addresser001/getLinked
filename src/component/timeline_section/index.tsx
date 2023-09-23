import { timlines } from '../../utils/data';
import './styles.scss'

const TimelineSection = () => {
  return (
    <section className='timeline_section'>
      <h3 className='section_heading'>Timeline</h3>
      <p className='section_paragraph'>Here is the breakdown of the time we anticipate
        using for the upcoming event.
      </p>
      <div className='timeline_wrapper'>
        {timlines.map(({ date, description, title }, idx) => {
          let even = (idx + 1) % 2 === 0
          return <div className='single_timeline'>
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