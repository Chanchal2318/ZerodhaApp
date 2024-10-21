import React from 'react';

function Hero() {
    return ( 
        <>
          <section className="container-fluid " id='supportHero'>
            <div className=" p-3  " id='supportWrapper'>
              <h3 className='mt-4'>Support Portal</h3>
              <a href='' className='mt-4'>Track Tickets</a>
            </div>
            <div className="row p-4 m-5">
            <div className="col-6 ">
              <h1 className='fs-3 m-2' style={{lineHeight:"1.5"}}>Search for an answer or browse help topics <br/>to create a ticket</h1>
              <input className='mb-4 m-4' placeholder='E.g. how do i activate F&O, why is my order getting rejected.'/>
              <br/>
              <a href='' className='m-4'>Track account opening</a>
              <a href='' className='m-4'>Track segment activation</a>
              <a href=''>Intraday margins</a><br/>
              <a href='' className='m-4'>Kite user manual</a>
            </div>
            <div className="col-6 ">
              <h1 className='m-2'>Featured</h1>
              <ol style={{lineHeight:"1.5"}}>
                   <li><a href=''>Current Takeovers and Delisting - January 2024</a></li><br/>
                   <li><a href=''>Latest Itraday leverages - MS & CO</a></li><br/>
              </ol>
            </div>
               
            </div>
          </section>
        </>
     );
}

export default Hero;