import React from "react";
import "./Home.css";

function Home(props) {
  const {item,setIdFunc} = props;

  return (
    <>
      <div className="home-container">
        <div className="indivitual-container">
          <img
            src={item.image.original}
            alt=""
          />
          <div className="information">
            <div className="some-info">
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
            </div>
            <div className="summary-btn-container">
              <button onClick={()=>setIdFunc(item.id)} className="summaryButton">Summary</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
