import React from "react";

function Hero() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5 border-bottom text-center ">
            <h1 className="mb-4">Pricing</h1>
            <h3 className="text-muted fs-4">Free equity investments and flat  ₹20 traday and F&O trades</h3>
          </div>
          <div className="row p-5 text-center ">
          <div className="col-4 p-5 ">
              <img src='media/images/pricingEquity.svg'/>
              <h1 className="fs-3" >Free Equity delivery</h1>
              <p className="text-muted">All equity delivery investments (NSE,BSE), <br/> are absolutely free -  ₹ 0 brokerage.</p>
          </div>
          <div className="col-4 p-5 ">
              <img src='media/images/intradayTrades.svg'/>
              <h1 className="fs-3">Intraday and F&O trades</h1>
              <p className="text-muted">Flat Rs. 20 or 0.03% (whichever is lower) <br/> per executed order on intraday trades <br/> across equity,currency, and commodity <br/> <span style={{marginLeft:"30px"}}>  trades. </span></p>
          </div>
          <div className="col-4 p-5 ">
              <img src='media/images/pricingEquity.svg'/>
              <h1 className="fs-3">Free direct MF</h1>
              <p className="text-muted">All direct mutual fund investments are absolutely free - ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
