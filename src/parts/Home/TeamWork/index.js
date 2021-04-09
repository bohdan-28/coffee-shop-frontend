import React from 'react'
import Style from './teamwork.module.css'

function TeamWork() {
  return (
    <div>
      <div className={[['jumbotron'], ['jumbotron-fluid'], Style['jumbotron-team-work']].join(' ')}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={Style['img-team-work']}></div>
            </div>
            <div className="col">
              <h5 className={Style['teamwork-title']}>We Provide Good Coffee and Healthy Meals</h5>
              <h5 className={Style['teamwork-detail']}>You can explore the menu that we provide with fun and have their own taste and make your day better.</h5>
              
              <div className={Style['img-checklist']}></div>
              <h6 className={Style['checklist-teks']}>High quality beans</h6>
              <div className={Style['img-checklist']}></div>
              <h6 className={Style['checklist-teks']}>Healthy meals, you can request the ingredients</h6>
              <div className={Style['img-checklist']}></div>
              <h6 className={Style['checklist-teks']}>Chat with our staff to get better experience for ordering</h6>
              <div className={Style['img-checklist']}></div>
              <h6 className={Style['checklist-teks']}>Free member card with a minimum purchase of IDR 200.000.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamWork
