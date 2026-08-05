import testTubeImg from "../images/blod_test.png";
import { cellarData } from "../cellarData";
import { useState, useRef, useEffect } from "react";

const Collection = () => {
  return (
    <div className="collectionWrapper">
      <p className="title">Our reserved collection</p>

      <p className="description">
        We offer the possibility of access to our reserved collections to our
        most faithful users. The acquisition of such a limited and rare blood
        can be discussed only by phone, followed by a meeting face to face as per
        THEIR directive 43/45/5.
      </p>

      <p className="phone">
        <span>Phone:</span> 0799111111
      </p>

      <div className="wrapper">
        <p>Our available collections here:</p>

        <div className="innerWrapper">
          <div className="item">
            <img src={testTubeImg} alt="Test tube" />
            <div className="info">
              <span>AB+</span>, 1998
            </div>
          </div>

          <div className="item">
            <img src={testTubeImg} alt="Test tube" />
            <div className="info">
              <span>0</span>, 1600
            </div>
          </div>

          <div className="item">
            <img src={testTubeImg} alt="Test tube" width="230px" height="230px" />
            <div className="info">
              <span>B</span>, 1600
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
