import React from 'react';

function Hero() {
    return ( 
       <>
          <div className="container text-center  mb-5 border-bottom">
              <div className="row mb-5" style={{lineHeight:"2.0"}}>
                   <h1 className='mt-5'>Technology</h1>
                   <h4 className='text-muted'>Sleek, modern and intuitive trading platforms</h4>
                   <p className='mb-5'>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings <i class='fa fa-long-arrow-right' aria-hidden="true"></i></a></p>
              </div>
          </div>
       </>
     );
}

export default Hero;