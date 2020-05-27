import React from 'react';

const References = ({ declaration }) => (
  <section id="references" className="row">
    <aside className="col-sm-3">
      <h3>Declaration</h3>
    </aside>
    <div className="col-sm-9">
      <div className="row">
        {declaration.map(obj => (
          <div key={obj.name} className="col-sm-12">
            <blockquote className="reference">
              <p>{obj.quote}</p>
              <p className="name">
                <strong>— {obj.name}</strong>
              </p>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default References;
