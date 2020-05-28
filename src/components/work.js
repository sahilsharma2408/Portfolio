import React, { useState } from 'react';

const Work = ({ works }) => {
  const [showRestWorkExperience, setShowRestWorkExperience] = useState(
    works.lenght > 1,
  );

  const workToShow = showRestWorkExperience ? works : works.slice(0, 1);

  return (
    <section id="work" className="row">
      <aside className="col-sm-3">
        <h3>Work</h3>
      </aside>
      <div className="col-sm-9">
        <div className="row">
          {workToShow.map(work => (
            <div key={work.name} className="col-sm-12">
              <h4 className="strike-through">
                <span>{work.name}</span>
                <span className="date">
                  {work.startDate} — {work.endDate}
                </span>
              </h4>
              <div className="website pull-right">
                <a href={work.url}>{work.url}</a>
              </div>
              <div className="position">{work.position}</div>
              <div className="summary">
                <p>{work.summary}</p>
              </div>
              {work.highlights && (
                <React.Fragment>
                  <h4>Highlights</h4>
                  <ul className="highlights">
                    {work.highlights.map((highlight, index) => (
                      <li key={index} className="bullet">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </React.Fragment>
              )}
            </div>
          ))}
          <button
            className="button-link"
            onClick={() => setShowRestWorkExperience(!showRestWorkExperience)}>
            {showRestWorkExperience ? 'Hide' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
