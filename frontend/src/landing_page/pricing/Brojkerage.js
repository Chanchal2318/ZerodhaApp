import React from 'react';

function Brojkerage() {
    return ( 
        <>
          <div className="container">
            <div className="row border-top ">
              <div className="col-6 mt-4 p-4 text-center">
                   <a href='' style={{textDecoration:"none"}} className='  fs-4 '>Brokerage calculator</a>
                   <ul style={{textAlign:"left",lineHeight:"2.0"}} className='mt-4 fs-6'>
                      <li className='mb-2 text-muted'>Call & Trade and RMS auto-squareoff : Adiitional charges of ₹50+ GST per order.</li>
                      <li className='mb-2 text-muted'>Digital contract notes will be sent via e-mail.</li>
                      <li className='mb-2 text-muted'>Physical copies of contract notes, if required, shall be charged ₹20 oer contract note. Courier charges apply.</li>
                      <li className='mb-2 text-muted'>For NRI account (non-PIS), 0.5% or  ₹100 per executed order for equity (whichever is lower).</li>
                      <li className='mb-2 text-muted'>For NRI account (non-PIS), 0.5% or  ₹200 per executed order for equity (whichever is lower).</li>
                      <li className='mb-2 text-muted'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                   </ul>
              </div>
              <div className="col-6 mt-4 p-4 text-center">
              <a href='' style={{textDecoration:"none"}} className='  fs-4 '>List of Charges</a>
              </div>
            </div>
          </div>
        </>
    );
}

export default Brojkerage;