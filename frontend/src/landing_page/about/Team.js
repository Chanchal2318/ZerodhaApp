import React from "react";

function Team() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5 mb-5 border-top">
            <h1 className="text-center mt-5">People</h1>
        </div>
      </div>
      <div
        className="row  "
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-2 text-center ">
            <img className="mb-3"src='media/images/nithinKamath.jpg' style={{borderRadius:"100%" , width:"40%"}}/>
            <h4 className="text-muted mb-2">Nithin Kamath</h4>
            <h6 className="text-muted">Founder, CEO</h6>
        </div>
        <div className="col-6 p-2 text-muted">
        <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
        </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href=""  style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> /{" "}
            <a href="" style={{textDecoration:"none"}}>Twitter</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Team;
