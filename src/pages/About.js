import React from "react";
import { useHistory } from "react-router-dom";

function About() {
  const history = useHistory();
  const handleClickBackToHome = (e) => {
    history.push("/");
  };
  return (
    <div className="container-about">
      <h3 className="about-info">
        This application was developed by the student Cebotari Marin as a result
        of the knowledge provided by the best teacher Vladimir Țurcan
      </h3>
      <div className="thanks">
        <button className = 'button-thanks' onClick={handleClickBackToHome}>Thanks</button>
      </div>
    </div>
  );
}

export default About;
