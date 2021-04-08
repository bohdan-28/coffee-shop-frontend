import React from 'react'
import style from './mainchat.module.css'
import {usericon} from '../../../assets/images'

function MainChat() {
  return (
    <div>
      <div className={[['jumbotron'], ['jumbotron-fluid'], style['chat-bg']].join(' ')}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={style['side-chat']}>
                <form className="form-inline">
                  <input className={[ ['mr-sm-2'], style['form-search']].join(' ')} type="search" placeholder="Search" aria-label="Search"/>
                  <h5 className={style['chat-title']} >Choose a staff you want to talk with</h5>
                </form>
                <div className="row">
                  <div className="col-4 mt-5">
                    <img className={style['icon-user']} src={usericon} alt=""/>
                  </div>
                  <div className="col-lg-6 mt-5 mr-5">
                    <h5 className={style['username']}>
                      Jason
                    </h5>
                    <h5 className={style['chat-value']}>Hey, I’m Jason, Let’s talk and share what’s on your thoughts!</h5>
                  </div>
                  <div className={style['line-chat']}></div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={style['main-chat']}>
                <h4>Room Chat</h4>
                <div className="row">
                  <div className="col-4 mt-5">
                    <img className={style['icon-user']} src={usericon} alt=""/>
                  </div>
                  <div className="col-lg-6 mt-5 mr-5">
                    <h5 className={style['username-2']}>
                      Jason
                    </h5>
                    <h5 className={style['chat-value-2']}>Hey, I’m Jason, Let’s talk and share what’s on your thoughts!</h5>
                  </div>

                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainChat
