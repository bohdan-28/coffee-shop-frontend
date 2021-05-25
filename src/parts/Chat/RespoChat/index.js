import React from 'react'
import style from './respochat.module.css'
// import {usericon} from '../../../assets/images'
import { useHistory } from "react-router"; 

function RespoChat({staffname, staffprofile, msgvalue}) {
  const history = useHistory();
    return (
        <div>
          
          <div className={style['respo-chat']}>
            <h4 className={style['title']}>Chat</h4>
            <button type="button" class={[['btn'], style['btn-back']].join(' ')} onClick={() => {history.push(`/`);}}>back</button>

            <form className="form-inline">
              <input className={[ ['mr-sm-2'], style['search-chat-respo']].join(' ')} type="search" placeholder="Search" aria-label="Search"/>
            </form>
            
            <h5 className={style['chat-title']} >Choose a staff you want to talk with</h5>
            <div className="row">
              <div className="col-4">
                <img className={style['staff-img']} src={staffprofile} alt=""/>
                <p className={style['staff-name']}>{staffname}</p>
              </div>
              {/* <div className="col-4">
                <img className={style['staff-img']} src={staffprofile} alt=""/>
                <p className={style['staff-name']}>{staffname}</p>
              </div>
              <div className="col-4">
                <img className={style['staff-img']} src={staffprofile} alt=""/>
                <p className={style['staff-name']}>{staffname}</p>
              </div> */}
            </div>

            <div className={style['line-chat']}></div>

            <p className={style['title-msg']}>Message</p>
            <div className="row">
              <div className="col-4">
                <img className={style['staff-img']} src={staffprofile} alt=""/>
              </div>
              <div className="col-6">
                <p className={style['staff-name-msg']}>{staffname}</p>
                <p className={style['text-msg']}>{msgvalue} </p>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-4">
                <img className={style['staff-img']} src={staffprofile} alt=""/>
              </div>
              <div className="col-6">
                <p className={style['staff-name-msg']}>{staffname}</p>
                <p className={style['text-msg']}>{msgvalue} </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <img className={style['staff-img']} src={staffprofile} alt=""/>
              </div>
              <div className="col-6">
                <p className={style['staff-name-msg']}>{staffname}</p>
                <p className={style['text-msg']}>{msgvalue} </p>
              </div>
            </div> */}

            <p className={style['no-msg']}>You have no conversation left</p>

          </div>
        </div>
    )
}


export default RespoChat
