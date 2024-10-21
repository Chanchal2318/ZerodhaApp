import React from 'react' ;

function Education() {
    return ( 
      <>
        <div className="container">
          <div className="row">
            <div className="col-6 mt-5">
                 <img src='media/images/education.svg' style={{width:"70%"}}/>
            <div/>
            </div>
            <div className="col-6">
            <h2 className='mt-5 fs-2'>Free and open market education</h2>
                  <p className='mt-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                  <a href='' style={{textDecoration:"none"}}>Versity  <i class='fa fa-long-arrow-right' aria-hidden="true" ></i></a>

                  <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                  <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class='fa fa-long-arrow-right' aria-hidden="true" ></i></a>
            </div>
          </div>
        </div>
    </>
    );
}

export default Education;
