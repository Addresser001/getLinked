import { timlines } from "../../utils/data";

const TimelineMobile = () => {
  return (
    <div className="timeline_mobile">
      {timlines.map(({ date, description, title }, idx) => {
        return <div key={idx} className="single_timeline">
          <div className="numbering">
            <div />
            <span>{idx + 1}</span>
          </div>
          <div className="details">
            <div>
              <h5>{title}</h5>
              <p>{description}</p>
            </div>

            <span className="date">{date}</span>
          </div>

        </div>
      })}
    </div>
  );
}

export default TimelineMobile;