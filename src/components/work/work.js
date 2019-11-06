import React from 'react';
import './work.css';

const Work= (props) => {
  return(

    <section class="content-section black-back" id="portfolio">
      <div class="container">
        <h1 class="grey-with-red text-center">Featured Projects</h1>
        <br />
        <br />
        <div class="row no-gutters">

        {props.project.map(i => (
            <div class="col-lg-4">
            <a class="portfolio-item" href={i.url} target="_blank">
              <span class="caption">
                <span class="caption-content">
                  <b>{i.name}</b>
                  <p class="mb-0">{i.desc}</p>
                </span>
              </span>
              <img class="img-fluid" src={i.img} alt="" />
            </a>
          </div>
        ))}

        </div>
      </div>
    </section>
  );
};

export default Work