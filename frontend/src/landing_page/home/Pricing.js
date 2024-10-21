import React from 'react' ;

function Pricing() {
    return (  
      <>
        <div classname='conatiner'>
            <div className='row text-center mx-8' >
              <div className='col-4'>
                  <h2 className='mb-5 fs-2'>Unbeatable Pricing</h2>
                  <p className='mb-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden changes.</p>
                  <a href='' style={{textDecoration:"none"}}>See Pricing  <i class='fa fa-long-arrow-right' aria-hidden="true" ></i></a>
              </div>
              <div className='col-2'>

              </div>
              <div className='col-6'>
                  <div className='row'>
                    <div className="col p-3 border">
                        <h1 className='mb-3'>₹0</h1>
                        <p>Free equity delivery and <br/>direct mutual funds</p>
                    </div>
                    <div className="col p-3 border mr-3">
                        <h1 className='mb-3 '>₹20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </>
    );
}

export default Pricing;
