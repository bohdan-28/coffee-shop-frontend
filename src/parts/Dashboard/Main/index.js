import React from 'react'
import CardProgress from '../CardProgress'
import style from './main.module.css'
import CardAsideRight from '../CardAsideRight'
import CardAsideRightProgress from '../CardAsideRightProgress'
import Button from '../../../components/Button'

function Main() {
  return (
    <>
      <div class={[['jumbotron'], ['jumbotron-fluid'], style['jumbotron-dashboard']].join(' ')}>
        <div class="container">
          <h3 class={style['dashboard-title']}>See how your store progress so far</h3>
          <p class="lead">15 April - 21 April 2020</p>
          <div className="row">
            <div className="col">
              <CardProgress />
            </div>
            <div className="col">
              <div className="row">
                <div className="col">
                  <CardAsideRight />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col">
                  <CardAsideRightProgress />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Button
                title="Download Report"
                btn="btn-download-report"
                color="chocolate"
              />
            </div>
            <div className="col">
              <Button
                title="Share Report"
                btn="btn-share-report"
                color="chocolate"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Main
