import React from 'react';
import './car.css';

const Work= (props) => {
    
  return(
      
    <div className="black-back text-center">
        <h1 className="grey-with-red">bonus stage</h1>
        <img src={"/img/car/" + props.frame + ".png"} onClick={props.func} alt="car" className="car"/>
    </div>
  );
};

export default Work