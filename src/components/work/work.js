import React from 'react';
import './work.css';

const Work= (props) => {
  return(

    <section className="content-section black-back" id="portfolio">
      <div className="container">
        <h1 className="grey-with-red text-center">Featured Projects</h1>
        <br />
        <br />
        <div className="row no-gutters">

        {props.project.map((i, key) => (
            <div key={key} className="col-lg-4">
            <a className="portfolio-item" href={i.url} target="_blank" rel="noopener noreferrer">
              <span className="caption">
                <span className="caption-content">
                  <b>{i.name}</b>
                  <p className="mb-0">{i.desc}</p>
                </span>
              </span>
              <img className="img-fluid" src={i.img} alt="" />
            </a>
          </div>
        ))}

        </div>
      </div>
    </section>
  );
};

export default Work