import React from "react";
import "./Summary.css";

function Summary(props) {
  const { item, setIdFunc } = props;

  return (
    <div className="summary-container">
      <i
        onClick={() => setIdFunc(0)}
        className="back-btn fas fa-long-arrow-alt-left"
      ></i>
      <div className="summary-div">
        <img src={item.image.original} alt="" />
        <div className="summary-details">
          <div className="info">
            <p className="info-heading">Name</p>
            <p className="info-data">{item.name}</p>
          </div>
          <div className="info">
            <p className="info-heading">Language</p>
            <p className="info-data">{item.language}</p>
          </div>
          <div className="info">
            <p className="info-heading">Rating</p>
            <p className="info-data">{item.rating.average}</p>
          </div>
          <div className="info">
            <p className="info-heading">Country</p>
            <p className="info-data">
              {item.network !== null
                ? item.network.country.name
                : item.webChannel.country.name}
            </p>
          </div>
          <div className="summary">
            <span dangerouslySetInnerHTML={{ __html: item.summary }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
