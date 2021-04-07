import React from 'react'
import Style from './visitstore.module.css'

function VisitStore() {
  return (  
    <div>
      <div className={[['jumbotron'], ['jumbotron-fluid'], Style['jumbotron-visit-store']].join(' ')}>
        <div className="container">
          <h4 className={Style['visit-store-title']}>Visit Our Store in the Spot on the Map Below</h4>
          <p className={Style['visit-store-teks']}>See our store in every city on the spot and spen your good day there. See you soon!</p>
          <div className={Style['visit-store-img']}></div>
          <h4 className={Style['partner-title']}>Our Partner</h4>
          <div className="row">
            <div className="col">
              <div className={Style['img-partner-1']}></div>
            </div>
            <div className="col">
              <div className={Style['img-partner-2']}></div>
            </div>
            <div className="col">
              <div className={Style['img-partner-3']}></div>
            </div>
            <div className="col">
              <div className={Style['img-partner-4']}></div>
            </div>
            <div className="col">
              <div className={Style['img-partner-5']}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default VisitStore
